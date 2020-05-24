<template>
  <el-table
    :data="tableData.filter(data => !search || data.money_user.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
     max-height="400">
    <el-table-column
      label="日期"
      prop="date">
    </el-table-column>
    <el-table-column
      label="名字"
      prop="money_user">
    </el-table-column>
    <el-table-column
      label="收/支情况"
      prop="in_out">
    </el-table-column>
    <el-table-column
      label="钱数"
      prop="left_money">
    </el-table-column>
    <el-table-column
      label="用途"
      prop="purpose">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {getclassfee} from "../../api"
  export default {
    data() {
      return {
        tableData: [

        ],
        search: ''
      }
    },
       
    created(){
      this.convert();
    },
    methods: {
        convert: async function () {
        let getclassfee =  await this.$api.getclassfee()
        console.log(getclassfee)
        this.tableData = getclassfee.data
      
      }
       
      
         
    },

  }
</script>