<template>
  <div class="monthly-trend">
    <Echart class="monthly-chart" :options="chartOptions" />
  </div>
</template>

<script>
import Echart from "@/components/echart/index.vue";
import { graphic } from "echarts";

const months = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];
const newResults = [18, 26, 22, 31, 28, 38, 24, 29, 32, 19, 27, 35];
const enterpriseLinks = [26, 33, 30, 39, 35, 46, 31, 37, 41, 28, 36, 44];
const contractAmounts = [
  320, 470, 430, 590, 560, 760, 510, 610, 650, 430, 580, 750,
];

export default {
  name: "LeftBottom",
  components: { Echart },
  data() {
    return {
      chartOptions: {
        animationDuration: 1000,
        color: ["#24cfff", "#6e74d9", "#ffe18a"],
        grid: { left: 38, right: 42, top: 38, bottom: 30 },
        legend: {
          top: 4,
          left: "center",
          itemWidth: 16,
          itemHeight: 7,
          itemGap: 18,
          textStyle: { color: "#a9c9d9", fontSize: 10 },
          data: ["新增成果数（项）", "企业对接数（次）", "签约金额（万元）"],
        },
        tooltip: {
          trigger: "axis",
          axisPointer: { type: "cross", crossStyle: { color: "#7bdfff" } },
          backgroundColor: "rgba(2, 24, 50, .95)",
          borderColor: "#1da9e8",
          textStyle: { color: "#dff8ff" },
          formatter: (params) => {
            const index = params[0].dataIndex;
            return `${months[index]}<br/>新增成果数：${newResults[index]} 项<br/>企业对接数：${enterpriseLinks[index]} 次<br/>签约金额：${contractAmounts[index]} 万元`;
          },
        },
        xAxis: {
          type: "category",
          data: months,
          axisLine: { lineStyle: { color: "#39718e" } },
          axisTick: { show: false },
          axisLabel: { color: "#8baec0", fontSize: 10 },
        },
        yAxis: [
          {
            type: "value",
            name: "成果数量（项）",
            nameTextStyle: {
              color: "#7da7ba",
              fontSize: 10,
              padding: [0, 0, 2, -4],
            },
            min: 0,
            max: 50,
            interval: 10,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { color: "#779cac", fontSize: 9 },
            splitLine: { lineStyle: { color: "rgba(76, 140, 176, .18)" } },
          },
          {
            type: "value",
            name: "万元",
            nameTextStyle: {
              color: "#7da7ba",
              fontSize: 10,
              padding: [0, -8, 2, 0],
            },
            min: 0,
            max: 1000,
            interval: 250,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { color: "#779cac", fontSize: 9 },
            splitLine: { show: false },
          },
        ],
        series: [
          {
            name: "新增成果数（项）",
            type: "bar",
            barWidth: 7,
            itemStyle: {
              color: new graphic.LinearGradient(0, 1, 0, 0, [
                { offset: 0, color: "#8cf2ff" },
                { offset: 1, color: "#0879c9" },
              ]),
              shadowBlur: 8,
              shadowColor: "rgba(0, 205, 255, .42)",
            },
            data: newResults,
          },
          {
            name: "企业对接数（次）",
            type: "bar",
            barWidth: 7,
            itemStyle: {
              color: new graphic.LinearGradient(0, 1, 0, 0, [
                { offset: 0, color: "#b5c4ff" },
                { offset: 1, color: "#343c9e" },
              ]),
              shadowBlur: 8,
              shadowColor: "rgba(96, 117, 226, .35)",
            },
            data: enterpriseLinks,
          },
          {
            name: "签约金额（万元）",
            type: "line",
            yAxisIndex: 1,
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            lineStyle: {
              width: 1,
              color: "#ffe18a",
              shadowBlur: 6,
              shadowColor: "#ffc84d",
            },
            itemStyle: {
              color: "#ffe18a",
              borderColor: "#fff4bf",
              borderWidth: 1,
            },
            data: contractAmounts,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.monthly-trend {
  width: 100%;
  height: 100%;
  min-height: 230px;
}

.monthly-chart {
  width: 100%;
  height: 100%;
}
</style>
