(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require("vue")) : typeof define === "function" && define.amd ? define(["vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.HelloAsyncComponent = factory(global.Vue));
})(this, function(vue) {
  "use strict";
  var __vite_style__ = document.createElement("style");
  __vite_style__.textContent = "\n.hello-async-component[data-v-4872773c] {\n  font-size: 20px;\n}\n";
  document.head.appendChild(__vite_style__);
  const HelloAsyncComponent_vue_vue_type_style_index_0_scoped_4872773c_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main = {
    name: "HelloAsyncComponent",
    setup() {
      const markedStr = vue.ref("");
      markedStr.value = "- hello, async component vue3";
      const changHtml = () => {
        markedStr.value = new Date().getTime();
      };
      return {
        markedStr,
        changHtml
      };
    }
  };
  const _hoisted_1 = ["innerHTML"];
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", {
      class: "hello-async-component",
      innerHTML: $setup.markedStr,
      onClick: _cache[0] || (_cache[0] = (...args) => $setup.changHtml && $setup.changHtml(...args))
    }, null, 8, _hoisted_1);
  }
  const HelloAsyncComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4872773c"]]);
  return HelloAsyncComponent;
});
