<template>
<div>
    <calculator
        :cal-num-options="{'basic':true, 'science':false, 'programmer':false}"
        :cal-unit-options="true">
    </calculator>
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
import Calculator from './Calculator.vue'
export default{
    components:{Calculator},
    methods:{
      btnClick(){
          router.replace('/homepage');
      }
  }
}
 
</script>