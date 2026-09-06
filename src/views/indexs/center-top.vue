<template>
  <div class="center-top-metrics">
    <div v-for="item in metrics" :key="item.label" class="metric-box">
      <div class="metric-head">
        <div class="metric-icon">{{ item.icon }}</div>
        <span>{{ item.label }}</span>
      </div>
      <strong class="metric-value"
        >{{ item.value }}<small>{{ item.unit }}</small></strong
      >
      <em class="metric-trend"
        >环比 <b>{{ item.month }}</b
        >　同比 <b>{{ item.year }}</b></em
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CenterTop",
  data() {
    return {
      metrics: [
        {
          icon: "◇",
          label: "在库科技成果",
          value: "128",
          unit: "项",
          month: "↑ 8%",
          year: "↑ 12%",
        },
        {
          icon: "▣",
          label: "可转化重点成果",
          value: "42",
          unit: "项",
          month: "↑ 5%",
          year: "↑ 12%",
        },
        {
          icon: "＋",
          label: "本年新增成果",
          value: "36",
          unit: "项",
          month: "↑ 10%",
          year: "↑ 20%",
        },
        {
          icon: "▥",
          label: "合作企业数量",
          value: "86",
          unit: "家",
          month: "↑ 7%",
          year: "↑ 18%",
        },
        {
          icon: "￥",
          label: "累计签约金额",
          value: "5860",
          unit: "万元",
          month: "↑ 25%",
          year: "↑ 48%",
        },
        {
          icon: "♧",
          label: "产业化落地项目",
          value: "18",
          unit: "项",
          month: "↑ 6%",
          year: "↑ 13%",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.center-top-metrics {
  display: flex;
  gap: 9px;
  width: 100%;
  height: 108px;
  padding: 0 10px;
  margin-bottom: 8px;
}

.metric-box {
  position: relative;
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-width: 0;
  overflow: hidden;
  padding: 9px 7px 7px;
  box-sizing: border-box;
  background-image: url("../../assets//img/center-top.png");
  background-size: 100% 100%;
  //   box-sizing: border-box;
  //   border: 1px solid rgba(42, 153, 207, 0.72);
  //   border-radius: 7px;
  //   background: linear-gradient(
  //     180deg,
  //     rgba(7, 61, 105, 0.8),
  //     rgba(2, 24, 54, 0.94)
  //   );
  //   box-shadow: inset 0 0 14px rgba(0, 162, 234, 0.16),
  //     0 0 8px rgba(0, 105, 180, 0.2);
}

.metric-box::after {
  position: absolute;
  right: -10px;
  bottom: -14px;
  width: 54px;
  height: 54px;
  border: 1px solid rgba(42, 204, 255, 0.2);
  border-radius: 50%;
  content: "";
}

.metric-head {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 0;
  gap: 5px;
}

.metric-icon {
  flex: 0 0 19px;
  color: #44dfff;
  font-size: 20px;
  line-height: 1;
  text-align: center;
  text-shadow: 0 0 8px rgba(0, 210, 255, 0.72);
}

.metric-head span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #a9d2e4;
  font-size: 10px;
  line-height: 16px;
}

.metric-value {
  display: block;
  color: #9cecff;
  font-size: 24px;
  line-height: 30px;
  text-shadow: 0 0 9px rgba(54, 210, 255, 0.55);
}

.metric-value small {
  margin-left: 3px;
  color: #a6cbd8;
  font-size: 9px;
  font-weight: 400;
}

.metric-trend {
  display: block;
  overflow: hidden;
  color: #6f9daf;
  font-size: 9px;
  font-style: normal;
  line-height: 15px;
  white-space: nowrap;
}

.metric-trend b {
  color: #56d8be;
  font-weight: 400;
}
</style>
