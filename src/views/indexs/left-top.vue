<template>
  <div class="achievement-structure">
    <div class="structure-main">
      <Echart class="structure-chart" :options="chartOptions" />
      <div class="structure-center">
        <span>成果总量</span>
        <strong>128</strong>
      </div>
      <div class="structure-list">
        <div v-for="item in categories" :key="item.name" class="category-item">
          <i
            :style="{
              backgroundColor: item.color,
              boxShadow: `0 0 6px ${item.color}`,
            }"
          ></i>
          <span class="category-name">{{ item.name }}</span>
          <b>{{ item.value }}项</b>
          <em>{{ item.percent }}%</em>
        </div>
      </div>
    </div>
    <div class="structure-metrics">
      <div v-for="metric in metrics" :key="metric.label" class="metric-item">
        <span>{{ metric.label }}</span>
        <strong>{{ metric.value }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
import Echart from "@/components/echart/index.vue";

const categories = [
  { name: "发明专利", value: 38, percent: "29.7", color: "#138cff" },
  { name: "软件著作", value: 22, percent: "17.2", color: "#42c7df" },
  { name: "技术秘密", value: 18, percent: "14.1", color: "#f3a34d" },
  { name: "非标装备", value: 16, percent: "12.5", color: "#6d86e8" },
  { name: "工艺包", value: 12, percent: "9.4", color: "#b178d5" },
  { name: "专技规范", value: 8, percent: "6.3", color: "#d66c9f" },
  { name: "技术报告", value: 14, percent: "10.9", color: "#8794c9" },
];

export default {
  name: "LeftTop",
  components: { Echart },
  data() {
    return {
      categories,
      metrics: [
        { value: "128", label: "成果总量" },
        { value: "56", label: "高价值成果" },
        { value: "36", label: "本年新增" },
        { value: "65.6%", label: "可转化率" },
      ],
      chartOptions: {
        animationDuration: 900,
        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(2, 24, 50, .95)",
          borderColor: "#1da9e8",
          textStyle: { color: "#dff8ff" },
          formatter: "{b}<br/>{c}项（{d}%）",
        },
        series: [
          {
            type: "pie",
            radius: ["47%", "70%"],
            center: ["26%", "48%"],
            silent: false,
            avoidLabelOverlap: true,
            label: { show: false },
            labelLine: { show: false },
            itemStyle: {
              borderColor: "#09264d",
              borderWidth: 2,
            },
            color: categories.map((item) => item.color),
            data: categories,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.achievement-structure {
  height: 100%;
  color: #b9d7e9;
  padding: 6px 12px 10px;
  box-sizing: border-box;
}

.structure-main {
  position: relative;
  height: calc(100% - 62px);
  min-height: 185px;
}

.structure-chart {
  position: absolute;
  top: 0;
  left: 0;
  width: 53%;
  height: 100%;
}

.structure-center {
  position: absolute;
  top: 42%;
  left: 26%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
  color: #e2f7ff;
  white-space: nowrap;
}

.structure-center span {
  font-size: 12px;
  line-height: 20px;
}

.structure-center strong {
  color: #5edaff;
  font-size: 27px;
  line-height: 30px;
  text-shadow: 0 0 10px rgba(0, 198, 255, 0.65);
}

.structure-list {
  position: absolute;
  top: 13px;
  right: 0;
  width: 47%;
}

.category-item {
  display: grid;
  grid-template-columns: 9px 1fr 38px 42px;
  align-items: center;
  gap: 5px;
  height: 24px;
  font-size: 11px;
  white-space: nowrap;
}

.category-item i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.category-name {
  overflow: hidden;
  text-overflow: ellipsis;
}
.category-item b {
  color: #d8eef8;
  font-weight: 400;
  text-align: right;
}
.category-item em {
  color: #78a8bd;
  font-style: normal;
  text-align: right;
}

.structure-metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  height: 56px;
}

.metric-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
  background-image: url("../../assets//img/smallBg.png");
  background-size: 100% 100%;
}

.metric-item strong {
  color: #70dcff;
  font-size: 18px;
  line-height: 23px;
}
.metric-item span {
  color: #def5ff;
  font-size: 10px;
  margin-bottom: 2px;
  white-space: nowrap;
}
</style>
