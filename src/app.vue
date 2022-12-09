<template>
  <div>
    <button @click="handleImport()">click</button>
    <component :is="comp"></component>
  </div>
</template>

<script>
import { markRaw } from "vue";
export default {
  data() {
    return {
      path: "http://localhost:4000/hello-async-component/index.1.0.0.umd.js",
      comp: "div",
    };
  },
  methods: {
    handleImport() {
      // 使用 amd 加载远程组件
      requirejs([this.path], (m) => {
        console.log(m);
        this.comp = markRaw(m);
      });
    },
  },
};
</script>
