<template>
  <div class="warning-list">
    <el-table
      :data="warnings"
      height="120"
      class="warning-table"
      :show-header="true"
      @row-click="showWarning"
    >
      <el-table-column label="项目名称" min-width="145" show-overflow-tooltip>
        <template slot-scope="scope">
          <span class="warning-name">
            <img
              :src="warningIcon"
              :class="`warning-icon ${scope.row.level}`"
              :style="iconStyle(scope.row.level)"
              alt="风险提示"
            />
            {{ scope.row.name }}
          </span>
        </template>
      </el-table-column>
      <el-table-column
        prop="detail"
        label="问题描述"
        min-width="135"
        show-overflow-tooltip
      />
      <el-table-column label="风险等级" width="62" align="right">
        <template slot-scope="scope">
          <span class="warning-level" :class="scope.row.level">
            <img
              :src="warningIcon"
              :class="`level-icon ${scope.row.level}`"
              :style="iconStyle(scope.row.level)"
              alt="风险等级"
            />
            {{ scope.row.levelText }}
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import ElTable from "element-ui/lib/table";
import ElTableColumn from "element-ui/lib/table-column";
import warningIcon from "@/assets/svg/风险提示_line.svg";

const warnings = [
  {
    name: "某新材料项目",
    detail: "市场应用延期",
    level: "high",
    levelText: "高风险",
  },
  {
    name: "某储能项目",
    detail: "商务谈判停滞",
    level: "high",
    levelText: "高风险",
  },
  {
    name: "某装备项目",
    detail: "知识产权交底中",
    level: "medium",
    levelText: "中风险",
  },
  {
    name: "某器件项目",
    detail: "企业需求匹配确认",
    level: "medium",
    levelText: "中风险",
  },
  {
    name: "某节能改造项目",
    detail: "等待资料补充",
    level: "low",
    levelText: "低风险",
  },
];

export default {
  name: "RightCenter2",
  components: {
    ElTable,
    ElTableColumn,
  },
  data() {
    return { warnings, warningIcon };
  },
  methods: {
    iconStyle(level) {
      const filters = {
        high: "brightness(0) saturate(100%) invert(54%) sepia(75%) saturate(1211%) hue-rotate(307deg) brightness(101%) contrast(102%)",
        medium:
          "brightness(0) saturate(100%) invert(79%) sepia(73%) saturate(729%) hue-rotate(357deg) brightness(101%) contrast(90%)",
        low: "brightness(0) saturate(100%) invert(77%) sepia(53%) saturate(658%) hue-rotate(106deg) brightness(92%) contrast(88%)",
      };
      return { filter: filters[level] || filters.medium };
    },
    showWarning(item) {
      this.$Message.warning(`${item.name}：${item.detail}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.warning-list {
  width: 100%;
  height: 100%;
  padding: 0 13px 6px 12px;
  box-sizing: border-box;
  color: #c9e5f2;
}

.warning-table {
  width: 100%;
  border: 0;
  background: transparent;
  color: #d6edf7;
  font-size: 10px;
}

.warning-table::v-deep::before,
.warning-table::v-deep::after {
  display: none;
}

.warning-table::v-deep .el-table__header-wrapper,
.warning-table::v-deep .el-table__body-wrapper,
.warning-table::v-deep table,
.warning-table::v-deep tr {
  background: transparent;
}

.warning-table::v-deep th.el-table__cell,
.warning-table::v-deep td.el-table__cell {
  height: 21px;
  padding: 0;
  border-right: 0;
  border-bottom-color: rgba(42, 126, 179, 0.28);
  background: transparent;
}

.warning-table::v-deep th.el-table__cell {
  height: 20px;
  color: #82aabd;
  font-size: 10px;
  font-weight: 400;
}

.warning-table::v-deep .cell {
  padding: 0 4px;
  line-height: 20px;
}

.warning-table::v-deep .el-table__body tr {
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.warning-table::v-deep .el-table__body tr:hover > td.el-table__cell {
  background: rgba(21, 123, 193, 0.16);
}

.warning-table::v-deep .el-table__body tr:last-child td.el-table__cell {
  border-bottom: 0;
}

.warning-table::v-deep .el-table__body-wrapper {
  overflow-y: auto;
  overflow-x: hidden;
}

.warning-name,
.warning-detail {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.warning-name {
  display: flex;
  align-items: center;
  color: #d6edf7;
}

.warning-icon {
  display: block;
  flex: 0 0 15px;
  width: 15px;
  height: 15px;
  margin-right: 6px;
  object-fit: contain;
}

.warning-detail {
  color: #aac8d6;
}

.warning-level {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3px;
  font-size: 10px;
  text-align: right;
}

.level-icon {
  width: 12px;
  height: 12px;
  object-fit: contain;
}

.warning-icon.high,
.level-icon.high {
  color: #ff6c78;
  filter: brightness(0) saturate(100%) invert(54%) sepia(75%) saturate(1211%)
    hue-rotate(307deg) brightness(101%) contrast(102%);
}

.warning-icon.medium,
.level-icon.medium {
  color: #f0c452;
  filter: brightness(0) saturate(100%) invert(79%) sepia(73%) saturate(729%)
    hue-rotate(357deg) brightness(101%) contrast(90%);
}

.warning-icon.low,
.level-icon.low {
  color: #4ed6a0;
  filter: brightness(0) saturate(100%) invert(77%) sepia(53%) saturate(658%)
    hue-rotate(106deg) brightness(92%) contrast(88%);
}

.warning-level.high {
  color: #ff6c78;
}

.warning-level.medium {
  color: #f0c452;
}

.warning-level.low {
  color: #4ed6a0;
}
</style>
