<template>
  <div>
      <el-row type="flex" class="row-bg" justify="center">

   <el-col :span="8"><div class="grid-content" style="font-size:30px">欢迎查看班级的班费使用情况</div></el-col>

 </el-row>
  <el-row type="flex" class="row-bg1" justify="center">

   <el-col :span="8"><div class="grid-conten1t">
       <br>
       <br>
       <br>
       </div></el-col>

 </el-row>
      
 <el-row type="flex" class="row-bg2" justify="center">

   <el-col :span="16"><div class="grid-content2"><v-classfee></v-classfee></div></el-col>

 </el-row>
 <el-row type="flex" class="row-bg4" justify="center">

   <el-col :span="16"><div class="grid-content4">
         <br>
         <v-addclassfee></v-addclassfee>
       </div>
       </el-col>

 </el-row>
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
import addclassfee from "./addclassfee"
import router from '@/router'
import classfee from "../../components/home/classfee"
export default {
  components: {
    "v-classfee": classfee,
    "v-addclassfee": addclassfee
  },
  methods:{
      btnClick(){
          router.replace('/homepage');
      }
  }
};
</script>