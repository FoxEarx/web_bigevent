<template>
  <div class="efficiency-monitor">
    <div v-for="item in metrics" :key="item.label" class="efficiency-card">
      <div class="metric-label">{{ item.label }}</div>
      <div
        class="ring"
        :style="{
          '--progress': `${item.progress}%`,
          '--ring-color': item.color,
        }"
      >
        <div class="ring-inner">
          <strong>{{ item.value }}</strong>
          <span>{{ item.unit }}</span>
        </div>
      </div>
      <div class="metric-change">
        同比 <b>{{ item.change }}</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CenterBottom",
  data() {
    return {
      metrics: [
        {
          label: "成果转化率",
          value: "38%",
          unit: "",
          progress: 38,
          change: "↑ 6.2%",
          color: "#21d5ff",
        },
        {
          label: "重点项目跟进率",
          value: "82%",
          unit: "",
          progress: 82,
          change: "↑ 7.5%",
          color: "#159bff",
        },
        {
          label: "中试成功率",
          value: "76%",
          unit: "",
          progress: 76,
          change: "↑ 5.8%",
          color: "#38c6ff",
        },
        {
          label: "平均转化周期",
          value: "142",
          unit: "天",
          progress: 68,
          change: "↓ 8天",
          color: "#647bd9",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.efficiency-monitor {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  width: 100%;
  height: 100%;
  padding: 8px 10px 10px;
  box-sizing: border-box;
}

.efficiency-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
  border: 1px solid transparent;
  border-radius: 15px;
  background: transparent;
  box-shadow: none;
}

.efficiency-card::before {
  position: absolute;
  inset: -1px;
  z-index: 0;
  border-radius: 16px;
  background: linear-gradient(180deg, #54e2ff 0%, #0a4a8b 100%);
  content: "";
  pointer-events: none;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  padding: 1px;
}

.efficiency-card > * {
  position: relative;
  z-index: 1;
}

.ring {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background: conic-gradient(
    from 220deg,
    var(--ring-color) 0 var(--progress),
    rgba(25, 69, 105, 0.38) var(--progress) 100%
  );
  box-shadow: 0 0 10px rgba(0, 157, 226, 0.28);
}

.ring::before,
.ring::after {
  position: absolute;
  content: "";
  border-radius: 50%;
  pointer-events: none;
}

.ring::before {
  inset: 4px;
  border: 1px solid rgba(91, 180, 220, 0.42);
  border-left-color: transparent;
  border-bottom-color: rgba(32, 133, 181, 0.28);
}

.ring::after {
  inset: -5px;
  border: 1px solid rgba(44, 125, 169, 0.3);
  border-top-color: transparent;
  border-right-color: rgba(87, 205, 240, 0.62);
}

.ring-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70px;
  height: 70px;
  border: 1px solid rgba(55, 158, 202, 0.38);
  border-radius: 50%;
  background: radial-gradient(circle, #0a3b64 0%, #031d3e 70%);
  box-shadow: inset 0 0 12px rgba(0, 189, 255, 0.2);
}

.ring-inner strong {
  color: #bdeeff;
  font-size: 22px;
  line-height: 24px;
  text-shadow: 0 0 8px rgba(76, 211, 255, 0.7);
}

.ring-inner span {
  color: #91bfd1;
  font-size: 11px;
}

.metric-label {
  max-width: 100%;
  margin: 0 0 7px;
  overflow: hidden;
  color: #8eb9ca;
  font-size: 10px;
  line-height: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.metric-change {
  margin-top: 6px;
  color: #6f9caf;
  font-size: 10px;
  line-height: 16px;
}

.metric-change b {
  color: #62d9be;
  font-weight: 400;
}
</style>
