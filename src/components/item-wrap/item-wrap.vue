<!--
 * @Author: daidai
 * @Date: 2022-03-01 09:16:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-29 15:12:34
 * @FilePath: \web-pc\src\pages\big-screen\components\item-wrap\item-wrap.vue
-->
<template>
  <div class="lr_titles">
    <div class="item_title" v-if="title !== ''">
      <div class="zuo"></div>
      <i class="title-bar"></i>
      <span class="title-inner"> &nbsp;&nbsp;{{ title }}&nbsp;&nbsp; </span>
    </div>
    <div
      :class="title !== '' ? 'item_title_content' : 'item_title_content_def'"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: () => "",
    },
  },
  created() {},

  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
$item-title-height: 38px;
$item_title_content-height: calc(100% - 38px);

.lr_titles {
  padding: 15px 20px;
  box-sizing: border-box;
  background-image: url("../../assets/img/left-top.png");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;

  :deep(.border-box-content) {
    box-sizing: border-box;
    padding: 6px 16px 0px;
    background: transparent;
  }

  .item_title {
    height: $item-title-height;
    line-height: $item-title-height;
    width: 100%;
    color: #fff;
    // background: linear-gradient(to right, transparent, #0f0756, transparent);
    position: relative;

    .title-bar {
      display: inline-block;
      width: 4px;
      height: 16px;
      vertical-align: -3px;
      border-radius: 2px;
      background: linear-gradient(180deg, #52e8ff 0%, #087bff 100%);
      box-shadow: 0 0 8px rgba(19, 193, 255, 0.75);
    }

    .title-inner {
      font-weight: 900;
    }
  }

  .item_title_content {
    height: $item_title_content-height;
  }

  .item_title_content_def {
    width: 100%;
    height: 100%;
  }
}
</style>
