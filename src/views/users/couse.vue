<template>
  <div>
    <el-button round @click="dialogFormVisible = true">个人课表</el-button>

<el-dialog title="查看个人课表" :visible.sync="dialogFormVisible" center>
       <!--表格-->
    <div  slot="footer" class="table-footer">
    <el-table
      :data="timeData"
      stripe
      style="width: 80%">
      <el-table-column label="周" prop="label" align="center"></el-table-column>

      <el-table-column label="上午" align="center">
        <el-table-column
          v-for="(v,i) in titleData" :key="i"
          v-if="v.label==='上午'" align="center">
          <template slot="header" slot-scope="scope">
            <div class="tabletitle-timeline">
              第{{v.count}}节 <br/>
              {{v.startTime}}-{{v.endTime}}
          </div>
          </template>
          <template slot-scope="scope">
            <div >
              <div v-if="timeShow">
                {{scope.row[sbjectKey[i]]}}<br/>
                {{scope.row[teacherKey[i]]}}
            </div>
              <div v-else>
                <el-input
                  size="mini"
                  placeholder="科目"
                  suffix-icon="el-icon-date"
                  v-model="scope.row[sbjectKey[i]]">
                </el-input>
                <el-select
                  clearable
                  v-model="scope.row[teacherKey[i]]"
                  size="mini"
                  placeholder="任课老师">
                  <el-option
                    v-for="(val,ind) in teachers"
                    :key="ind"
                    :label="val.teacherName"
                    :value="val.id"></el-option>
                </el-select>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column label="下午" align="center">
        <el-table-column
          v-for="(v,i) in titleData" :key="i"
          v-if="v.label==='下午'" align="center">
          <template slot="header" slot-scope="scope">
            <div class="tabletitle-timeline">
              第{{v.count}}节 <br/>
              {{v.startTime}}-{{v.endTime}}
          </div>
          </template>
          <template slot-scope="scope">
            <div >
              <div v-if="timeShow">
                {{scope.row[sbjectKey[i]]}}<br/>
                {{scope.row[teacherKey[i]]}}
            </div>
              <div v-else>
                <el-input
                  size="mini"
                  placeholder="科目"
                  suffix-icon="el-icon-date"
                  v-model="scope.row[sbjectKey[i]]">
                </el-input>
                <el-select
                  clearable
                  v-model="scope.row[teacherKey[i]]"
                  size="mini"
                  placeholder="任课老师">
                  <el-option
                    v-for="(val,ind) in teachers"
                    :key="ind"
                    :label="val.teacherName"
                    :value="val.id"></el-option>
                </el-select>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column label="晚上" align="center">
        <el-table-column
          v-for="(v,i) in titleData" :key="i"
          v-if="v.label==='晚上'"
          align="center">
          <template slot="header" slot-scope="scope">
            <div class="tabletitle-timeline">
              第{{v.count}}节 <br/>
              {{v.startTime}}-{{v.endTime}}
          </div>
          </template>
          <template slot-scope="scope">
            <div >
              <div v-if="timeShow">
                {{scope.row[sbjectKey[i]]}}<br/>
                {{scope.row[teacherKey[i]]}}
            </div>
              <div v-else>
                <el-input
                  size="mini"
                  placeholder="科目"
                  suffix-icon="el-icon-date"
                  v-model="scope.row[sbjectKey[i]]">
                </el-input>
                <el-select
                  clearable
                  v-model="scope.row[teacherKey[i]]"
                  size="mini"
                  placeholder="任课老师">
                  <el-option
                    v-for="(val,ind) in teachers"
                    :key="ind"
                    :label="val.teacherName"
                    :value="val.id"></el-option>
                </el-select>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
   </div>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false;">取 消</el-button>
  </div>
</el-dialog>
  </div>
</template>
<script>
import Message from 'element-ui'
import axios from 'axios'
import Qs from "qs"
export default {
  data() {
      return {
          timeShow:true,//编辑表与展示表
        teachers:[],//全部教师


        sbjectKey:['oneS','twoS','threeS','fourS','fiveS','sixS','sevenS','eightS','nineS',"tenS","elevenS"],//科目key值
        teacherKey:['oneT','twoT','threeT','fourT','fiveT','sixT','sevenT','eightT','nineT',"tenT","elevenT"],//老师key值
        //每天的课表
        timeData:[
          {
            id:'1',
            label:'周一',
            oneS:'',
            oneT:'',
            twoS:'',
            twoT:'',
            threeS:'',
            threeT:'',
            fourS:'',
            fourT:'',
            fiveS:'现代网络安全分析与应用{15-16周}',
            fiveT:'卢福',
            sixS:'现代网络安全分析与应用{15-16周}',
            sixT:'卢福',
            sevenS:'大学生职业发展与就业指导系列讲座{5-8周}',
            sevenT:'刘利丹',
            eightS:'大学生职业发展与就业指导系列讲座{5-8周}',
            eightT:'刘利丹',
            nineS:'',
            nineT:''
          },
          {
            id:'2',
            label:'周二',
            oneS:'网络综合布线{11-12周}',
            oneT:'乔付',
            twoS:'网络综合布线{11-12周}',
            twoT:'乔付',
            threeS:'移动应用开发{3-14周}',
            threeT:'陈霞',
            fourS:'移动应用开发{3-14周}',
            fourT:'陈霞',
            fiveS:'物联网{3-13周}',
            fiveT:'曾绍庚',
            sixS:'物联网{3-13周}',
            sixT:'曾绍庚',
            sevenS:'',
            sevenT:'',
            eightS:'',
            eightT:'',
            nineS:'',
            nineT:''
          },
          {
            id:'3',
            label:'周三',
            oneS:'',
            oneT:'',
            twoS:'',
            twoT:'',
            threeS:'计算机专业英语{3-16周}',
            threeT:'闽笛',
            fourS:'计算机专业英语{3-16周}',
            fourT:'闽笛',
            fiveS:'',
            fiveT:'',
            sixS:'',
            sixT:'',
            sevenS:'',
            sevenT:'',
            eightS:'',
            eightT:'',
            nineS:'',
            nineT:''
          },
          {
            id:'4',
            label:'周四',
            oneS:'现代网络安全分析与应用{3-16周}',
            oneT:'卢福',
            twoS:'现代网络安全分析与应用{3-16周}',
            twoT:'卢福',
            threeS:'物联网{3-12周}',
            threeT:'曾绍庚',
            fourS:'物联网{3-12周}',
            fourT:'曾绍庚',
            fiveS:'网络综合布线{3-16周}',
            fiveT:'乔付',
            sixS:'网络综合布线{3-16周}',
            sixT:'乔付',
            sevenS:'',
            sevenT:'',
            eightS:'',
            eightT:'',
            nineS:'',
            nineT:''
          },
          {
            id:'5',
            label:'周五',
            oneS:'计算机专业英语{1-2周}',
            oneT:'闽笛',
            twoS:'计算机专业英语{1-2周}',
            twoT:'闽笛',
            threeS:'',
            threeT:'',
            fourS:'',
            fourT:'',
            fiveS:'移动应用开发{3-14周}',
            fiveT:'陈霞',
            sixS:'移动应用开发{3-14周}',
            sixT:'陈霞',
            sevenS:'',
            sevenT:'',
            eightS:'',
            eightT:'',
            nineS:'',
            nineT:''
          },
          {
            id:'',
            label:'周六',
            oneS:'形式与政策{7-8周}',
            oneT:'龙山',
            twoS:'形式与政策{7-8周}',
            twoT:'龙山',
            threeS:'形式与政策{7-8周}',
            threeT:'龙山',
          },
          {
            id:'',
            label:'周天',
          },
        ],
 //课节数据---标题
        titleData:[
          {
            id:'1',
            count:1,
            label:'上午',
            startTime:'08:00',
            endTime:'08:45'
          },
          {
            id:'2',
            count:2,
            label:'上午',
            startTime:'08:55',
            endTime:'09:40'
          },
          {
            id:'3',
            count:3,
            label:'上午',
            startTime:'10:00',
            endTime:'10:45'
          },
          {
            id:'4',
            count:4,
            label:'上午',
            startTime:'10:55',
            endTime:'11：40'
          },
          {
            id:'5',
            count:5,
            label:'下午',
            startTime:'14:50',
            endTime:'15:15'
          },
          {
            id:'6',
            count:6,
            label:'下午',
            startTime:'15:25',
            endTime:'16:10'
          },
          {
            id:'7',
            count:7,
            label:'下午',
            startTime:'16:30',
            endTime:'17:15'
          },
          {
            id:'8',
            count:8,
            label:'下午',
            startTime:'17:25',
            endTime:'18:10'
          },
          {
            id:'9',
            count:9,
            label:'晚上',
            startTime:'19:30',
            endTime:'20:15'
          },
          {
            id:'10',
            count:10,
            label:'晚上',
            startTime:'20:25',
            endTime:'21:10'
          },
           {
            id:'11',
            count:11,
            label:'晚上',
            startTime:'21:20',
            endTime:'22:15'
          },
        ],
        dialogTableVisible: false,
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

  }
</script>
<style >
    .tabletitle-timeline{
    line-height: 18px!important;
  }
</style>
<style scoped>
.table-footer {width: 900px;
padding-right: 50%;}
</style>