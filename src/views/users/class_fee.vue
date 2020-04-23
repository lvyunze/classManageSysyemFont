
<template>
  <div>
    <v-header></v-header>
    <v-slideshow></v-slideshow>
      <el-button type="primary" size="50" style="float:right" >返回</el-button>
     <el-table
    :data="tableData"
    style="float:left"
    width="500"
    max-height="250">
    <el-table-column
      prop="date"
      label="日期"
      width="100">
    </el-table-column>
    <el-table-column
      prop="in_out"
      label="收支情况"
      width="100">
    </el-table-column>
    <el-table-column
      prop="left_money"
      label="剩余钱"
      width="100">
    </el-table-column>
    <el-table-column
      prop="money_user"
      label="使用人"
      width="120">
    </el-table-column>
    <el-table-column
      prop="purpose"
      label="用途"
      width="100">
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
import header from "../../components/header";
import slideshow from "../../components/home/slideshow";
export default {
  components: {
    "v-header": header,
    "v-slideshow": slideshow,
  },

  
};
</script>