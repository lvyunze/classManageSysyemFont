<template>
  <div>
      <el-button type="primary" @click="dialogVisible = true">点击增加班费使用情况</el-button>
      <el-dialog
  title="增加"
  :visible.sync="dialogVisible"
  width="30%"
   append-to-body>
  <div class="dialog-content">
        <el-form ref="form" :model="form"
          label-width="100px">

          <el-form-item label="日期">
            <el-date-picker size="small" v-model="form.date"
              type="datetime"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>

          <el-form-item label="使用人">
            <el-input v-model="form.money_user"
              placeholder="请输入使用人">
            </el-input>
          </el-form-item>

          <el-form-item label="收/支情况">
            <el-input v-model="form.in_out"
              type="textarea"
              placeholder="请输入收/支情况">
            </el-input>
          </el-form-item>

           <el-form-item label="钱数">
            <el-input v-model="form.left_money"
              type="matchthing"
              placeholder="请输入钱数">
            </el-input>
          </el-form-item>
          <el-form-item label="用途">
            <el-input v-model="form.purpose"
              type="matchthing"
              placeholder="请输入用途">
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer"
        class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
          @click="confirm">确 定</el-button>
      </div>
  </el-dialog>
  </div>
</template>

<script>
import {addclassfee} from "../../api"
  export default {
    data() {
      return {
          form:{
              date:null,
              money_user:null,
              in_out:null,
              left_money:null,
              purpose:null
          },
        dialogVisible: false
      };
    },
    methods: {
        async confirm () {
      //时间转字符串
      this.time1 = this.form.date
      var d = new Date(this.form.date); 
      d=d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate() 
      this.alterdata = {'add_money_user':this.form.money_user,"add_date":d,"add_in_out":this.form.in_out,
      "add_left_money":this.form.left_money,"add_purpose":this.form.purpose}
      console.log(this.alterdata)
      await this.$api.addclassfee(this.alterdata).then(
          res=>{
            var arr = Object.keys(res)
            var arr1 = Object.values(res)
            console.log(2,arr1[0])
            if(res&&arr.length>0)
            {
              if (arr1[0].status == ["Class fee increased successfully"]){
                alert("增加成功")
                this.dialogTableVisible = true
              }
              else{
                alert("增加失败")
              }

              
            }
            else{
              alert("增加失败")
            }
          }
        )
      this.dialogVisible = false
      this.currentEdit.date = d
      console.log(this.currentEdit)
      this.$set(this.tableData.data, this.currentIndex, this.currentEdit)
    }
    }
  };
</script>