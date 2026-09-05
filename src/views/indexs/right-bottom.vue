<template>
  <div class="evaluation-panel">
    <Echart class="evaluation-chart" :options="chartOptions" />
  </div>
</template>

<script>
import { graphic } from "echarts";
import Echart from "@/components/echart/index.vue";

const indicators = [
  { name: "技术先进性", max: 100 },
  { name: "市场需求度", max: 100 },
  { name: "产业匹配度", max: 100 },
  { name: "成熟度", max: 100 },
  { name: "投资价值", max: 100 },
  { name: "可复制性", max: 100 },
  { name: "政策协同性", max: 100 },
];

export default {
  name: "RightBottom",
  components: { Echart },
  data() {
    return {
      chartOptions: {
        animationDuration: 900,
        color: ["#1ec9f4", "#8172c7"],
        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(2, 24, 50, .95)",
          borderColor: "#1689bd",
          textStyle: { color: "#c8edf7" },
        },
        legend: {
          orient: "vertical",
          right: 0,
          top: "center",
          width: 105,
          itemWidth: 14,
          itemHeight: 7,
          itemGap: 14,
          formatter: (name) =>
            name === "重点成果平均水平"
              ? "重点成果\n平均水平"
              : "研究院整体\n水平",
          textStyle: {
            color: "#80aabd",
            fontSize: 12,
            fontWeight: "bold",
            lineHeight: 16,
          },
          data: ["重点成果平均水平", "研究院整体水平"],
        },
        radar: {
          center: ["38%", "52%"],
          radius: "68%",
          shape: "polygon",
          splitNumber: 4,
          indicator: indicators,
          axisName: { color: "#a9cbd7", fontSize: 12, fontWeight: "bold" },
          axisNameGap: 10,
          axisLine: { lineStyle: { color: "rgba(42, 128, 167, .58)" } },
          splitLine: { lineStyle: { color: "rgba(42, 128, 167, .48)" } },
          splitArea: {
            areaStyle: {
              color: ["rgba(2, 29, 59, .48)", "rgba(6, 52, 82, .26)"],
            },
          },
        },
        series: [
          {
            type: "radar",
            symbol: "circle",
            symbolSize: 4,
            lineStyle: { width: 1.5 },
            data: [
              {
                name: "重点成果平均水平",
                value: [86, 78, 82, 72, 84, 76, 68],
                lineStyle: { color: "#26d7f5", width: 1.5 },
                itemStyle: { color: "#b4f7ff" },
                areaStyle: {
                  color: new graphic.RadialGradient(0.5, 0.5, 1, [
                    { offset: 0, color: "rgba(113, 239, 255, .05)" },
                    { offset: 0.55, color: "rgba(25, 204, 240, .12)" },
                    { offset: 1, color: "rgba(0, 105, 170, .42)" },
                  ]),
                },
              },
              {
                name: "研究院整体水平",
                value: [72, 68, 75, 66, 70, 64, 61],
                lineStyle: { color: "#8275c9", width: 1, type: "dashed" },
                itemStyle: { color: "#b6a9ee" },
                areaStyle: {
                  color: new graphic.RadialGradient(0.5, 0.5, 1, [
                    { offset: 0, color: "rgba(196, 178, 255, .025)" },
                    { offset: 0.55, color: "rgba(125, 103, 202, .07)" },
                    { offset: 1, color: "rgba(58, 45, 126, .28)" },
                  ]),
                },
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.evaluation-panel {
  width: 100%;
  height: 100%;
  min-height: 230px;
}

.evaluation-chart {
  width: 100%;
  height: 100%;
}
</style>
