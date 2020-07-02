<template>
  <el-carousel :interval="5000" arrow="always"
  :height="imgHeight+'px'" trigger="click">
    <el-carousel-item v-for="(item,adindex) in abc_img" :key="adindex">
      <img :src="item.src" class="lunbotu" alt="轮播图">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
    data() {
      return {
         abc_img: [
    { src: require("../../img/project-item-01.jpg") },
    { src: require("../../img/project-item-02.jpg") },
    { src: require("../../img/project-item-03.jpg") },
    { src: require("../../img/project-item-04.jpg") },
    { src: require("../../img/project-item-05.jpg") },
    { src: require("../../img/project-item-06.jpg") },
    { src: require("../../img/project-item-07.jpg") }
  ],
  imgHeight: ""
      }
      },
};
</script>>
<style>
.el-carousel__item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

}
  .carousel-image {
    max-width: 100%;
    max-height: 100%;
  }
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>