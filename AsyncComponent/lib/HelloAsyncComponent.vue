<!-- lib/HelloAsyncComponent.vue -->
<template>
  <div class="hello-async-component" v-html="markedStr" @click="changHtml"></div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HelloAsyncComponent",
  setup() {
    const markedStr = ref("");

    // 同步加载 marked
    markedStr.value = "- hello, async component vue3";

    const changHtml = () => {
        markedStr.value = new Date().getTime()
    }

    return {
      markedStr,
      changHtml
    };
  },
};
</script>

<style scoped>
.hello-async-component {
  font-size: 20px;
}
</style>
