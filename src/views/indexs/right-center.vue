<template>
  <div class="project-ranking">
    <el-table
      :data="projects"
      height="150"
      class="project-table"
      :show-header="true"
      :row-class-name="rowClassName"
      @row-click="showProject"
    >
      <el-table-column label="排名" width="42" align="center">
        <template slot-scope="scope">
          <span class="rank" :class="{ top: scope.$index < 3 }">
            {{ scope.$index + 1 }}
          </span>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="项目名称"
        min-width="145"
        show-overflow-tooltip
      />
      <el-table-column prop="stage" label="当前阶段" width="78" />
      <el-table-column label="进度" width="120" align="center">
        <template slot-scope="scope">
          <div class="progress-cell">
            <i class="progress-track">
              <b :style="{ width: `${scope.row.progress}%` }"></b>
            </i>
            <em>{{ scope.row.progress }}%</em>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import ElTable from "element-ui/lib/table";
import ElTableColumn from "element-ui/lib/table-column";

const projects = [
  { name: "氢能装备关键部件项目", stage: "中试验证", progress: 92 },
  { name: "某储能系统集成项目", stage: "企业对接", progress: 88 },
  { name: "智能运维诊断平台项目", stage: "商务谈判", progress: 81 },
  { name: "新型热管理材料项目", stage: "中试验证", progress: 76 },
  { name: "新能源储能器件项目", stage: "企业对接", progress: 72 },
  { name: "工业数字孪生平台项目", stage: "价值评估", progress: 69 },
];

export default {
  name: "RightCenter",
  components: {
    ElTable,
    ElTableColumn,
  },
  data() {
    return { projects };
  },
  methods: {
    rowClassName() {
      return "project-row";
    },
    showProject(project) {
      this.$Message({
        type: "info",
        message: `${project.name}：${project.stage}，当前进度 ${project.progress}%`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.project-ranking {
  width: 100%;
  height: 100%;
  padding: 8px 13px 8px 12px;
  box-sizing: border-box;
  color: #c9e5f2;
}

.project-table {
  width: 100%;
  border: 0;
  background: transparent;
  color: #d7edf7;
  font-size: 11px;
}

.project-table::v-deep::before,
.project-table::v-deep::after {
  display: none;
}

.project-table::v-deep .el-table__header-wrapper,
.project-table::v-deep .el-table__body-wrapper,
.project-table::v-deep table,
.project-table::v-deep tr {
  background: transparent;
}

.project-table::v-deep th.el-table__cell,
.project-table::v-deep td.el-table__cell {
  height: 20px;
  padding: 0;
  border-bottom-color: rgba(42, 126, 179, 0.28);
  border-right: 0;
  background: transparent;
}

.project-table::v-deep th.el-table__cell {
  height: 21px;
  color: #82aabd;
  font-size: 11px;
  font-weight: 400;
}

.project-table::v-deep .cell {
  padding: 0 4px;
  line-height: 20px;
}

.project-table::v-deep th.el-table__cell .cell {
  color: #82aabd;
  font-weight: 400;
}

.project-table::v-deep .el-table__body tr:last-child td.el-table__cell {
  border-bottom: 0;
}

.project-table::v-deep th:first-child .cell {
  padding: 0;
}

.project-table::v-deep .el-table__body tr {
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.project-table::v-deep .el-table__body tr:hover > td.el-table__cell {
  background: rgba(21, 123, 193, 0.16);
}

.project-table::v-deep .el-table__body-wrapper {
  overflow-y: auto;
  overflow-x: hidden;
}

.project-table::v-deep .el-table__fixed,
.project-table::v-deep .el-table__fixed-right {
  background: transparent;
}

.rank {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  margin: 0 auto;
  border: 1px solid #537487;
  border-radius: 50%;
  color: #a9c4d0;
  font-size: 10px;
  box-sizing: border-box;
}

.rank.top {
  border-color: #e4a844;
  color: #ffe18d;
  box-shadow: 0 0 5px rgba(244, 177, 57, 0.45);
}

.project-name,
.project-stage {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.project-name {
  color: #d8edf8;
}

.project-stage {
  color: #aac8d6;
}

.progress-cell {
  display: flex;
  align-items: center;
  gap: 7px;
  min-width: 0;
}

.progress-track {
  display: block;
  flex: 1;
  height: 7px;
  overflow: hidden;
  background: rgba(21, 70, 112, 0.72);
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.45);
}

.progress-track b {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, #168bea, #3ac8ff);
  box-shadow: 0 0 7px rgba(35, 182, 255, 0.9);
  transition: width 0.45s ease;
}

.progress-cell em {
  width: 31px;
  color: #d8f3ff;
  font-style: normal;
  text-align: right;
}
</style>
