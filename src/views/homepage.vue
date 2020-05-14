<template>
  <div>
    <v-header></v-header>
    <v-slideshow></v-slideshow>
    <v-uintroduce></v-uintroduce>
  </div>
</template>
<script>
import header from "../components/login_header";
import slideshow from "../components/home/slideshow";
import uintroduce from "../components/home/uintroduce";
export default {
  components: {
    "v-header": header,
    "v-slideshow": slideshow,
    "v-uintroduce": uintroduce
  }
};
</script>