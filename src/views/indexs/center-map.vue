<template>
  <section class="center-map-panel">
    <div class="panel-title">
      <span class="title-line"></span>
      <span>长三角成果转化布局</span>
      <span class="title-line title-line-right"></span>
    </div>
    <div ref="map" class="map-chart"></div>
    <div class="map-legend">
      <div><i class="legend-line legend-flow"></i>成果流向</div>
      <div><i class="legend-line legend-project"></i>项目合作</div>
      <div><i class="legend-line legend-industry"></i>产业对接</div>
      <div><i class="legend-line legend-service"></i>技术服务</div>
    </div>
    <div class="map-summary">
      <p>本月新增落地点：<strong>3</strong></p>
      <p>重点推进城市：</p>
      <b style="color: #fff">杭州 / 上海 / 苏州</b>
    </div>
  </section>
</template>

<script>
import * as echarts from "echarts";

const regionFiles = ["310000", "320000", "330000", "340000"];
const cities = [
  { name: "上海", value: [121.4737, 31.2304, 12], detail: "合作机构" },
  {
    name: "杭州",
    value: [120.1551, 30.2741, 18],
    detail: "落地项目",
    main: true,
  },
  { name: "苏州", value: [120.5853, 31.299, 7], detail: "中试合作" },
  { name: "南京", value: [118.7969, 32.0603, 6], detail: "技术服务" },
  { name: "宁波", value: [121.544, 29.8683, 9], detail: "产业对接" },
  { name: "合肥", value: [117.2272, 31.8206, 5], detail: "联合研发" },
  { name: "嘉兴", value: [120.7555, 30.7461, 6], detail: "产业协同" },
];

export default {
  name: "CenterMap",
  data() {
    return {
      chart: null,
      resizeHandler: null,
      edgeParticles: [],
    };
  },
  mounted() {
    this.loadMap();
    this.resizeHandler = () => this.chart && this.chart.resize();
    window.addEventListener("resize", this.resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeHandler);
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
  },
  methods: {
    async loadMap() {
      const responses = await Promise.all(
        regionFiles.map((code) =>
          fetch(`/map-geojson/${code}.json`).then((res) => res.json()),
        ),
      );
      const features = responses.reduce(
        (all, geoJson) => all.concat(geoJson.features || []),
        [],
      );
      this.edgeParticles = this.createEdgeParticles(features);
      echarts.registerMap("yangtze-delta", {
        type: "FeatureCollection",
        features,
      });
      this.chart = echarts.init(this.$refs.map);
      this.chart.setOption(this.createOption());
      this.chart.on("click", (params) => {
        if (!params.data || !params.data.detail) return;
        this.$Message({
          type: "info",
          text: `${params.data.name}：${params.data.detail} ${params.data.metric}项`,
        });
      });
    },
    createEdgeParticles(features) {
      const segments = new Map();
      const rings = [];
      const collectRings = (coordinates) => {
        if (!Array.isArray(coordinates) || !coordinates.length) return;
        if (
          Array.isArray(coordinates[0]) &&
          typeof coordinates[0][0] === "number"
        ) {
          rings.push(coordinates);
          return;
        }
        coordinates.forEach(collectRings);
      };
      features.forEach((feature) =>
        collectRings(feature.geometry && feature.geometry.coordinates),
      );

      const pointKey = (point) =>
        `${point[0].toFixed(5)},${point[1].toFixed(5)}`;
      rings.forEach((ring) => {
        for (let index = 0; index < ring.length - 1; index += 1) {
          const start = ring[index];
          const end = ring[index + 1];
          const startKey = pointKey(start);
          const endKey = pointKey(end);
          const key = [startKey, endKey].sort().join("|");
          const segment = segments.get(key) || { count: 0, start, end };
          segment.count += 1;
          segments.set(key, segment);
        }
      });

      const outerPoints = new Map();
      segments.forEach((segment) => {
        if (segment.count === 1) {
          outerPoints.set(pointKey(segment.start), segment.start);
          outerPoints.set(pointKey(segment.end), segment.end);
        }
      });
      return Array.from(outerPoints.values())
        .filter((point, index) => index % 2 === 0)
        .map((point, index) => [
          point[0],
          point[1],
          0.55 + ((index * 17) % 45) / 100,
        ]);
    },
    createOption() {
      const center = cities.find((city) => city.main).value;
      const linkColors = [
        "#ffd166",
        "#00e5ff",
        "#ff7a45",
        "#a77bff",
        "#ffd166",
        "#00e5ff",
      ];
      const links = cities
        .filter((city) => !city.main)
        .map((city, index) => ({
          coords: [
            [center[0], center[1]],
            [city.value[0], city.value[1]],
          ],
          lineStyle: {
            color: linkColors[index],
            type: "dashed",
          },
        }));
      const cityData = cities.map((city) => ({
        name: city.name,
        detail: city.detail,
        metric: city.value[2],
        main: city.main,
        label: {
          position: {
            上海: "right",
            杭州: "bottom",
            苏州: "top",
            南京: "left",
            宁波: "right",
            合肥: "left",
            嘉兴: "bottom",
          }[city.name],
          offset: {
            上海: [32, -18],
            杭州: [0, 28],
            苏州: [8, -32],
            南京: [-34, -8],
            宁波: [38, 12],
            合肥: [-34, 0],
            嘉兴: [26, 25],
          }[city.name],
        },
        value: [city.value[0], city.value[1], city.value[2]],
      }));
      const particleData = this.edgeParticles.map((particle) => ({
        value: [particle[0], particle[1]],
        intensity: particle[2],
      }));
      return {
        animationDuration: 1200,
        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(3, 25, 61, .94)",
          borderColor: "#1bbcff",
          textStyle: { color: "#d9f7ff" },
          formatter: (params) =>
            params.data && params.data.detail
              ? `${params.data.name}<br/>${params.data.detail}：${params.data.metric}项`
              : params.name,
        },
        geo: {
          map: "yangtze-delta",
          roam: false,
          zoom: 1.08,
          center: [120.25, 31.05],
          aspectScale: 1.45,
          layoutCenter: ["60%", "50%"],
          layoutSize: "100%",
          silent: true,
          itemStyle: {
            areaColor: "rgba(7, 53, 102, .78)",
            borderColor: "#1b9ed7",
            borderWidth: 1,
            shadowColor: "rgba(0, 157, 226, .72)",
            shadowBlur: 10,
          },
          emphasis: { itemStyle: { areaColor: "rgba(10, 76, 131, .9)" } },
        },
        series: [
          {
            type: "lines",
            coordinateSystem: "geo",
            zlevel: 2,
            effect: {
              show: true,
              period: 4,
              trailLength: 0.2,
              symbol: "circle",
              symbolSize: 5,
              color: "#ffe8a0",
            },
            lineStyle: { width: 1.6, opacity: 0.9, curveness: 0.22 },
            data: links,
          },
          {
            type: "scatter",
            id: "edge-particles",
            coordinateSystem: "geo",
            zlevel: 5,
            symbol: "circle",
            symbolSize: 2.5,
            itemStyle: {
              color: "#42d5f4",
              opacity: 0.64,
              shadowBlur: 3,
              shadowColor: "#008fca",
            },
            data: particleData,
          },
          {
            type: "scatter",
            coordinateSystem: "geo",
            zlevel: 4,
            symbolSize: (value, params) => (params.data.main ? 16 : 9),
            itemStyle: {
              color: "#55dcff",
              shadowBlur: 16,
              shadowColor: "#008fd1",
            },
            data: cityData.filter((city) => !city.main),
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 5,
            rippleEffect: { brushType: "stroke", scale: 4.2, period: 3.2 },
            symbolSize: 27,
            itemStyle: {
              color: "#ffe08a",
              shadowBlur: 22,
              shadowColor: "#f6a92d",
            },
            data: cityData.filter((city) => city.main),
          },
          {
            type: "scatter",
            coordinateSystem: "geo",
            zlevel: 6,
            symbolSize: 1,
            data: cityData,
            label: {
              show: true,
              formatter: (params) =>
                `{name|${params.data.name}}\n{detail|${params.data.detail}  }{value|${params.data.metric}}`,
              distance: 9,
              color: "#e7f9ff",
              backgroundColor: "rgba(2, 24, 50, .9)",
              borderColor: "#1b709f",
              borderWidth: 1,
              borderRadius: 3,
              padding: [6, 9],
              rich: {
                name: {
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: "bold",
                  lineHeight: 18,
                },
                detail: { color: "#79a9be", fontSize: 10, lineHeight: 16 },
                value: { color: "#ffdf6b", fontSize: 18, fontWeight: "bold" },
              },
            },
            labelLayout: { hideOverlap: true },
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.center-map-panel {
  background-image: url("../../assets//img/mapBg.png");
  background-size: 100% 100%;
  position: relative;
  height: 500px;
  overflow: hidden;
}
.panel-title {
  position: absolute;
  z-index: 10;
  top: 10px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #c2efff;
  font-size: 21px;
  letter-spacing: 2px;
  text-shadow: 0 0 12px rgba(33, 201, 255, 0.82);
}
.title-line {
  width: 58px;
  height: 1px;
  background: linear-gradient(to right, transparent, #39d8ff);
}
.title-line-right {
  background: linear-gradient(to left, transparent, #39d8ff);
}
.map-chart {
  width: 100%;
  height: 100%;
}
.map-legend,
.map-summary {
  position: absolute;
  z-index: 8;
  color: #86b4c9;
  font-size: 11px;
  line-height: 20px;
}
.map-legend {
  left: 14px;
  bottom: 14px;
  padding: 7px 11px;
  background-image: url("../../assets//img/smallBg.png");
  background-size: 100% 100%;
}
.map-summary {
  background-image: url("../../assets//img/smallBg.png");
  background-size: 100% 100%;
  right: 13px;
  bottom: 14px;
  padding: 7px 12px;
}
.map-summary p {
  margin: 0;
}
.map-summary strong,
.map-summary b {
  color: #ffdf6b;
  font-size: 14px;
}
.map-summary b {
  font-size: 12px;
}
.legend-line {
  display: inline-block;
  width: 20px;
  height: 0;
  margin: 0 8px 3px 0;
  vertical-align: middle;
  border-top: 1px dashed currentColor;
}
.legend-flow {
  color: #ffd166;
}
.legend-project {
  color: #00e5ff;
}
.legend-industry {
  color: #ff7a45;
}
.legend-service {
  color: #a77bff;
}
</style>
