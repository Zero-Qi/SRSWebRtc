<script setup>
  import { ref } from "vue";
  import VideoItem from "./components/VideoItem.vue";
  let total = ref(1);
  let allVideo = ref(1);
  const createvideo = () => {
    allVideo.value = Number(total.value);
  };
</script>

<template>
  <div class="header">
    <input type="text" v-model="total" class="int"/> <button @click="createvideo">生成</button>
  </div>
  <div class="main">
    <div v-for="(item,index) in allVideo"  :key="index">
      <VideoItem :id="index"></VideoItem>
    </div>
  </div>
</template>

<style scoped lang="scss">

  .header {
    display: flex;
  }
  
  .main {
    display: grid;
    grid-template-columns:repeat(3,700px); 
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    .vide-item {
      border: 1px red solid;
      margin: 50px;
    }
  }
</style>
