<template>
<div class="app-container">
  <el-table
    :data="tableData"
    :cell-style="cellStyle"
    :header-cell-style="rowClass"
    height="300"
    border
    style="width: 100%;margin-top:20px;margin-left:300px;">
    <el-table-column
      prop="phone"
      label="电话"
      width="180">
    </el-table-column>
    <el-table-column
      prop="username"
      label="姓名"
      width="180">
    </el-table-column>
  </el-table>
   <div class="tabListPage">
           <el-pagination @size-change="handleSizeChange" 
                          @current-change="handleCurrentChange" 
                          :current-page="currentPage" 
                          :page-sizes="pageSizes" 
                          :page-size="PageSize" layout="total, sizes, prev, pager, next, jumper" 
                          :total="totalCount">
             </el-pagination>
       </div>
       <el-row type="flex" class="row-bg3" justify="center">

   <el-col :span="16"><div class="grid-content3">
         <br>
         <el-button @click="btnClick" type="primary">返回首页</el-button>
       </div>
       </el-col>

 </el-row>
</div>
</template>

<script>
import router from '@/router'
import {getclassList} from "../../api"
  export default {
    data() {
      return {
          // 默认显示第几页
      currentPage:1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount:1,
      // 个数选择器（可修改）
      pageSizes:[5,10,15,20],
      // 默认每页显示的条数（可修改）
      PageSize:3,
      dialogTableVisible: false,
        tableData: []
      }
    },
    created(){
      this.convert();
    },
    methods: {
    // 分页
        // 每页显示的条数
       handleSizeChange(val) {
           // 改变每页显示的条数 
           this.PageSize=val
           // 注意：在改变每页显示的条数时，要将页码显示到第一页
           this.currentPage=1
       },
         // 显示第几页
       handleCurrentChange(val) {
           // 改变默认的页数
           this.currentPage=val
       },
       convert: async function () {
        let getclassList =  await this.$api.getclassList()
        console.log(getclassList)
        this.tableData = getclassList.data
        this.totalCount = getclassList.data.length
      
      },
      cellStyle({row,column,rowIndex,columnIndex}){
          return "text-align:center";
      },
      rowClass({row,rowIndex}){
          return "text-align:center";
      },
      btnClick(){
          router.replace('/homepage');
      }
    }
  }
</script>