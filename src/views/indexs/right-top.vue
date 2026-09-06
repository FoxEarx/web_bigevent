<template>
  <div class="conversion-stage">
    <div
      v-for="(stage, index) in stages"
      :key="stage.name"
      class="stage-row"
      @click="showStage(stage)"
    >
      <span class="stage-icon" :class="`stage-icon-${index + 1}`">
        {{ stage.icon }}
      </span>
      <span class="stage-name">{{ stage.name }}</span>
      <span class="stage-bar-wrap">
        <i
          class="stage-bar"
          :style="{ width: `${stage.percent}%`, opacity: 1 - index * 0.025 }"
        ></i>
      </span>
      <strong class="stage-value">{{ stage.value }}</strong>
      <span class="stage-percent">{{ stage.percentText }}%</span>
    </div>
  </div>
</template>

<script>
const stages = [
  { name: "成果入库", value: 128, percent: 100, percentText: "100", icon: "▣" },
  {
    name: "可转化潜力",
    value: 84,
    percent: 65.6,
    percentText: "65.6",
    icon: "◈",
  },
  {
    name: "价值评估",
    value: 63,
    percent: 49.2,
    percentText: "49.2",
    icon: "◇",
  },
  {
    name: "中试验证",
    value: 39,
    percent: 30.5,
    percentText: "30.5",
    icon: "▤",
  },
  {
    name: "企业对接",
    value: 28,
    percent: 21.9,
    percentText: "21.9",
    icon: "▥",
  },
  {
    name: "商务谈判",
    value: 22,
    percent: 17.2,
    percentText: "17.2",
    icon: "¤",
  },
  {
    name: "协议签订",
    value: 16,
    percent: 12.5,
    percentText: "12.5",
    icon: "▧",
  },
  {
    name: "产业化落地",
    value: 10,
    percent: 7.8,
    percentText: "7.8",
    icon: "▦",
  },
];

export default {
  name: "RightTop",
  data() {
    return { stages };
  },
  methods: {
    showStage(stage) {
      this.$Message({
        type: "info",
        message: `${stage.name}：${stage.value}项，转化率 ${stage.percentText}%`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.conversion-stage {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 4px 13px 4px 12px;
  box-sizing: border-box;
  color: #d7efff;
}

.stage-row {
  display: grid;
  grid-template-columns: 20px 66px minmax(0, 1fr) 34px 40px;
  align-items: center;
  gap: 5px;
  height: 28px;
  cursor: pointer;
  transition: filter 0.2s ease, transform 0.2s ease;
}

.stage-row:hover {
  filter: brightness(1.25);
  transform: translateX(2px);
}

.stage-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  height: 17px;
  border: 1px solid #328bd5;
  border-radius: 3px;
  color: #9edfff;
  font-size: 11px;
  line-height: 1;
  box-sizing: border-box;
  text-shadow: 0 0 6px #2dbdff;
}

.stage-icon-1,
.stage-icon-2 {
  border-color: #70c7ff;
  color: #d5f4ff;
}

.stage-name {
  overflow: hidden;
  color: #d0e9f5;
  font-size: 11px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.stage-bar-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 19px;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    transparent 48%,
    rgba(46, 126, 190, 0.14) 50%,
    transparent 52%
  );
}

.stage-bar {
  display: block;
  height: 100%;
  min-width: 8px;
  max-width: 100%;
  background: linear-gradient(90deg, #0876e8 0%, #2b9dff 65%, #58c9ff 100%);
  box-shadow: 0 0 9px rgba(22, 149, 255, 0.8);
  clip-path: polygon(0 0, 100% 0, calc(100% - 8px) 100%, 8px 100%);
  transition: width 0.5s ease;
}

.stage-value,
.stage-percent {
  font-size: 10px;
  font-weight: 400;
  text-align: right;
  white-space: nowrap;
}

.stage-value {
  color: #dff6ff;
}

.stage-percent {
  color: #bdd8e7;
}
</style>
