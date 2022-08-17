<template>
  <div class="item-main">
    <input type="text" v-model="url" /> <button @click="address">观看</button>
    <div class="video-item">
      <video :id="id" width="600"></video>
    </div>
  </div>
</template>
<script setup>
  import { ref } from "@vue/reactivity";
  const props = defineProps({
    id: Number,
  });
  let url = ref("");
  const address = () => {
    let video = document.getElementById(props.id);
    let option = {
      video: video,
      autoplay: true,
    };
    let player = new window.JSWebrtc.Player(url.value, option);
  };

</script>
<style lang="scss">
  input {
    width: 300px;
  }
  .item-main {
    border: 1px red solid;
    width: 700px;
    height: 400px;
  }
</style>
