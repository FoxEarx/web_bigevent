<template>
  <div class="contents">
    <div style="flex: 1">
      <div class="top-layout">
        <div class="content-left">
          <div class="pagetab"></div>
          <ItemWrap class="content-item left-top-item" title="成果结构分析">
            <LeftTop />
          </ItemWrap>
          <ItemWrap
            class="content-item left-center-item"
            title="重点技术领域分析"
          >
            <LeftCenter />
          </ItemWrap>
        </div>

        <div class="content-center">
          <CenterTop class="center-top" />
          <CenterMap class="center-map" />
        </div>
      </div>
      <div class="bottom-layout">
        <ItemWrap class="bottom-trend" title="月度转换趋势分析">
          <LeftBottom />
        </ItemWrap>
        <ItemWrap class="bottom-install" title="转换效益监测">
          <CenterBottom />
        </ItemWrap>
      </div>
    </div>
    <div class="content-right">
      <ItemWrap class="right-top-item" title="成果转换阶段分析">
        <RightTop />
      </ItemWrap>
      <ItemWrap class="right-center-item" title="重点项目推进榜">
        <RightCenter />
      </ItemWrap>
      <ItemWrap class="right-warning-item" title="项目堵点预警">
        <RightCenter2 />
      </ItemWrap>
      <ItemWrap class="bottom-statistics" title="成果综合评价">
        <RightBottom />
      </ItemWrap>
    </div>
  </div>
</template>

<script>
import LeftTop from "./left-top.vue";
import LeftCenter from "./left-center.vue";
import LeftBottom from "./left-bottom.vue";
import CenterTop from "./center-top.vue";
import CenterMap from "./center-map.vue";
import CenterBottom from "./center-bottom.vue";
import RightTop from "./right-top.vue";
import RightCenter from "./right-center.vue";
import RightCenter2 from "./right-center2.vue";
import RightBottom from "./right-bottom.vue";

export default {
  components: {
    LeftTop,
    LeftCenter,
    LeftBottom,
    CenterTop,
    CenterMap,
    CenterBottom,
    RightTop,
    RightCenter,
    RightCenter2,
    RightBottom,
  },
};
</script>

<style lang="scss" scoped>
.contents {
  display: flex;
  gap: 12px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 16px;
}

.top-layout,
.bottom-layout {
  display: flex;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
}

.top-layout {
  align-items: flex-start;
}

.bottom-layout {
  align-items: stretch;
  gap: 12px;
  height: 300px;
}

.content-left,
.content-right {
  display: flex;
  flex: 0 0 450px;
  flex-direction: column;
  width: 450px;
  min-width: 0;
}

.content-center {
  flex: 1;
  padding-top: 30px;
  min-width: 0;
}

.content-item {
  min-height: 0;
}

.left-top-item,
.left-center-item {
  height: 330px;
}

.right-top-item {
  height: 290px;
}

.right-center-item {
  height: 215px;
}

.right-warning-item {
  height: 185px;
}

.center-map {
  width: 100%;
}

.bottom-trend {
  flex: 1 1 0;
  width: 0;
  min-width: 0;
}

.bottom-install {
  flex: 1 1 0;
  width: 0;
  min-width: 0;
}

.bottom-statistics {
  height: 268px;
}

@keyframes rotating {
  0% {
    transform: rotate(0) scale(1);
  }

  50% {
    transform: rotate(180deg) scale(1.1);
  }

  100% {
    transform: rotate(360deg) scale(1);
  }
}
</style>
