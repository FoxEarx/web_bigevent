<template>
  <div class="technology-analysis">
    <Echart class="technology-chart" :options="chartOptions" />
  </div>
</template>

<script>
import Echart from "@/components/echart/index.vue";

const fields = [
  { name: "智能装备关键部件", value: 26, percent: "20.3%" },
  { name: "智能制造系统", value: 22, percent: "17.2%" },
  { name: "储能技术", value: 18, percent: "14.1%" },
  { name: "新能源材料", value: 16, percent: "12.5%" },
  { name: "工业数字化", value: 14, percent: "10.9%" },
  { name: "新材料", value: 12, percent: "9.4%" },
  { name: "绿色低碳", value: 10, percent: "7.8%" },
  { name: "智能运维", value: 10, percent: "7.8%" },
];

export default {
  name: "LeftCenter",
  components: { Echart },
  data() {
    return {
      chartOptions: {
        animationDuration: 900,
        grid: { left: 116, right: 80, top: 10, bottom: 25 },
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "none" },
          backgroundColor: "rgba(2, 24, 50, .95)",
          borderColor: "#1da9e8",
          textStyle: { color: "#dff8ff" },
          formatter: (params) => {
            const item = fields[params[0].dataIndex];
            return `${item.name}<br/>成果数量：${item.value}项<br/>占比：${item.percent}`;
          },
        },
        xAxis: {
          type: "value",
          min: 0,
          max: 30,
          interval: 10,
          axisLine: { lineStyle: { color: "rgba(89, 155, 190, .45)" } },
          axisTick: { show: false },
          axisLabel: { color: "#6f9aae", fontSize: 10 },
          splitLine: { lineStyle: { color: "rgba(72, 131, 170, .16)" } },
        },
        yAxis: {
          type: "category",
          inverse: true,
          data: fields.map((item) => item.name),
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: "#b6d6e6",
            fontSize: 11,
            margin: 10,
            formatter: (value) => `{icon|◆} {name|${value}}`,
            rich: {
              icon: { color: "#70dfff", fontSize: 9 },
              name: { color: "#b6d6e6", fontSize: 11 },
            },
          },
        },
        series: [
          {
            type: "bar",
            barWidth: 8,
            showBackground: true,
            backgroundStyle: { color: "rgba(22, 77, 125, .28)" },
            itemStyle: {
              borderRadius: [0, 2, 2, 0],
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  { offset: 0, color: "#087bd6" },
                  { offset: 1, color: "#42dfff" },
                ],
              },
              shadowBlur: 8,
              shadowColor: "rgba(0, 194, 255, .48)",
            },
            label: {
              show: true,
              position: "right",
              distance: 7,
              formatter: (params) => {
                const item = fields[params.dataIndex];
                return `{value|${item.value}项}  {percent|${item.percent}}`;
              },
              rich: {
                value: { color: "#d9f7ff", fontSize: 11 },
                percent: { color: "#8bb7c9", fontSize: 10 },
              },
            },
            data: fields.map((item) => item.value),
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.technology-analysis {
  width: 100%;
  height: 100%;
  min-height: 230px;
}

.technology-chart {
  width: 100%;
  height: 100%;
}
</style>
