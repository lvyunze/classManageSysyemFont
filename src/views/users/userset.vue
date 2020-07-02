<template scope="scope">
<div>
    <el-button round @click="dialogFormVisible = true">个人设置</el-button>
  <div slot =  'footer' class="dialog-content" >
<el-dialog title="修改个人信息" :visible.sync="dialogFormVisible" >
  <lb-table :column="tableData.column"
    :data="tableData.data">
  </lb-table>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false; ">取 消</el-button>
</div>
</el-dialog>
</div>
<!-- 弹出框 -->
  <el-dialog :visible.sync="dialogVisible"
      title="编辑"
      append-to-body>
      <div class="dialog-content">
        <el-form v-if="currentEdit"
          label-width="100px">


          <el-form-item label="用户名">
            <el-input v-model="currentEdit.username"
              placeholder="请输入用户名">
            </el-input>
          </el-form-item>

          <el-form-item label="性别">
            <el-input v-model="currentEdit.sex"
              type="textarea"
              placeholder="请输入性别">
            </el-input>
          </el-form-item>

           <el-form-item label="电话">
            <el-input v-model="currentEdit.phone"
              type="matchthing"
              placeholder="请输入电话">
            </el-input>
          </el-form-item>
          <el-form-item label="生日">
            <el-date-picker size="small" v-model="currentEdit.birthday"
              type="datetime"
              placeholder="请输入生日">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="宿舍地址">
            <el-input v-model="currentEdit.dormitory_address"
              type="textarea"
              placeholder="请输入宿舍地址">
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
import postdata from "../../api"
import LbTable from "../../components/lb-table/lb-table"
import {getuser} from "../../api"
import Message from 'element-ui'
import axios from 'axios'
import Qs from "qs"
export default {
  components: {
    LbTable
  },
  data() {
      return {
        alterdata:[],
        c:[],
        currentEdit: null,
            loginPower:false,
            tableData:{
              column: [
          {
             prop:"username",
             label:"用户名",
          },
          {
            prop:"sex",
            label:"性别"
          },
          {
            prop:"phone",
            label:"电话"
          },
          {
             prop:"birthday",
             label:"生日",
          },
          {
            prop:"nation",
            label:"民族"
          },
          {
             prop:"dormitory_address",
             label:"宿舍地址"
          },
          {
            label: '修改个人信息',
            render: (h, scope) => {
              return <el-button type="primary" onClick={ () => { this.openDialog(scope) } }>编辑</el-button>
            }
          },
        ],

          data:[],
      },
      dialogVisible:false,
        dialogFormVisible: false,
        form: {
          name: '',
          type: [],
          resource: '',
          desc: ''
        },
       formLabelWidth: '120px' 
      };
    },
      created(){
      this.convert();
    },
    methods: {
        convert: async function () {
        let getuser =  await this.$api.getuser()
        console.log(getuser)
        this.tableData.data = getuser.data
        console.log(this.tableData.datas)
      
      },
      openDialog (scope) {
      this.currentEdit = JSON.parse(JSON.stringify(scope.row))
      this.c = JSON.parse(JSON.stringify(scope.row))
      this.currentIndex = scope.$index
      this.dialogVisible = true
    },
    async confirm () {
      //时间转字符串
      var d = new Date(this.currentEdit.birthday); 
      d=d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate() 
      this.alterdata = {"alter_birthday":d,"alter_username":this.currentEdit.username,"alter_sex":this.currentEdit.sex,
      "alter_phone":this.currentEdit.phone,"alter_nation":this.currentEdit.nation,"alter_dormitory_address":this.currentEdit.dormitory_address}
      console.log(this.alterdata)
      await this.$api.postdata(this.alterdata).then(
          res=>{
            var arr = Object.keys(res)
            var arr1 = Object.values(res)
            console.log(2,arr1[0])
            if(res&&arr.length>0)
            {
              if (arr1[0].status == ["Your information has been modified successfully"]){
                alert("修改成功")
                this.dialogTableVisible = true
              }
              else{
                alert("修改失败")
              }

              
            }
            else{
              alert("上传失败")
            }
          }
        )
      this.dialogVisible = false
      this.currentEdit.birthday = d
      console.log(this.currentEdit)
      this.$set(this.tableData.data, this.currentIndex, this.currentEdit)
    }        
    },

  }
</script>
<style scoped>
.dialog-content {width: 300px;}
</style>