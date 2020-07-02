<template>
 <div class="app-container">
<FilenameOption v-model="filename" />
  <BookTypeOption v-model="bookType" />
  <el-button :loading="downloadLoading" style="margin:0 0 20px 20px;" type="primary" icon="el-icon-document" @click="handleDownload">
        导出
  </el-button>
  
   <lb-table :column="tableData.column"
    :data="tableData.data">
  </lb-table>
  <!-- 弹出框 -->
  <el-dialog :visible.sync="dialogVisible"
      title="编辑"
      append-to-body>
      <div class="dialog-content">
        <el-form v-if="currentEdit"
          label-width="100px">

          <el-form-item label="日期">
            <el-date-picker size="small" v-model="currentEdit.date"
              type="datetime"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>

          <el-form-item label="使用人">
            <el-input v-model="currentEdit.money_user"
              placeholder="请输入使用人">
            </el-input>
          </el-form-item>

          <el-form-item label="收/支情况">
            <el-input v-model="currentEdit.in_out"
              type="textarea"
              placeholder="请输入收/支情况">
            </el-input>
          </el-form-item>

           <el-form-item label="钱数">
            <el-input v-model="currentEdit.left_money"
              type="matchthing"
              placeholder="请输入钱数">
            </el-input>
          </el-form-item>
          <el-form-item label="用途">
            <el-input v-model="currentEdit.purpose"
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
import {changeclassfee} from "../../api"
import LbTable from "../../components/lb-table/lb-table"
import FilenameOption from '../FilenameOption'
import BookTypeOption from '../BookTypeOption'
import {getclassfee} from "../../api"
  export default {
    components: {
    FilenameOption,
    BookTypeOption ,
    LbTable,
  },
    data() {
      return {
        time1:null,
        hang:null,
        alterdata:[],
        c:[],
        currentEdit: null,
      currentIndex: null,
      dialogVisible: false,
        filename: '',
      autoWidth: true,
      bookType: 'xlsx',
      downloadLoading: false,
        tableData:{
          data:[],
          column:[
            {
            prop: 'date',
            label: '日期'
          },
          {
            prop: 'money_user',
            label: '姓名'
          },
          {
            prop: 'in_out',
            label: '收/支情况'
          },
          {
            prop: 'left_money',
            label: '钱数'
          },
          {
            prop:"purpose",
            label:"用途"
          },
          {
            label: '修改班费',
            render: (h, scope) => {
              return <el-button type="primary" onClick={ () => { this.openDialog(scope) } }>详情</el-button>
            }
          },
        ],
          
        },
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
        this.tableData.data = getclassfee.data
      
      },
        handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['日期', '名字', '收/支情况', '钱数', '用途']
        const filterVal = ['date', 'money_user', 'in_out', "left_money",'purpose']
        const list = this.tableData.data
        console.log(list)
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
     openDialog (scope) {
      this.currentEdit = JSON.parse(JSON.stringify(scope.row))
      
      this.c = JSON.parse(JSON.stringify(scope.row))
      this.currentIndex = scope.$index
      this.hang = this.currentIndex + 1
      this.dialogVisible = true
     
    },  
    async confirm () {
      //时间转字符串
      this.time1 = this.currentEdit.date
      var d = new Date(this.currentEdit.date); 
      d=d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate() 
      this.alterdata = {"number":this.hang,"alter_date":d,'alter_money_user':this.c.money_user,"alter_in_out":this.c.in_out,
      "alter_left_money":this.c.left_money,"alter_purpose":this.c.purpose}
      console.log(this.alterdata)
      await this.$api.changeclassfee(this.alterdata).then(
          res=>{
            var arr = Object.keys(res)
            var arr1 = Object.values(res)
            console.log(2,arr1[0])
            if(res&&arr.length>0)
            {
              if (arr1[0].status == ["Class fee modified successfully"]){
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
      this.currentEdit.date = d
      console.log(this.currentEdit)
      this.$set(this.tableData.data, this.currentIndex, this.currentEdit)
    }
      
         
    },

  }
</script>