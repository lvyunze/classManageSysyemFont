<template>
  <div>
    <v-header></v-header>
    <v-slideshow></v-slideshow>
    <v-introduce></v-introduce>
  </div>
</template>
<script>
import header from "../components/login_header";
import slideshow from "../components/home/slideshow";
import introduce from "../components/home/introduce";
export default {
  components: {
    "v-header": header,
    "v-slideshow": slideshow,
    "v-introduce": introduce
  }
};
</script>