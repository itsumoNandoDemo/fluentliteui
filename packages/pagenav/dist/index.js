"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/tsup/assets/cjs_shims.js
var init_cjs_shims = __esm({
  "../../node_modules/tsup/assets/cjs_shims.js"() {
  }
});

// ../button/dist/index.js
var require_dist = __commonJS({
  "../button/dist/index.js"(exports, module2) {
    "use strict";
    init_cjs_shims();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports2 = {};
    __export2(src_exports2, {
      Button: () => Button2
    });
    module2.exports = __toCommonJS2(src_exports2);
    var import_jsx_runtime = require("react/jsx-runtime");
    var Button2 = (props) => {
      const { variant = "default", children, ...rest } = props;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: `fluentliteui ${variant}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
          ...rest,
          children
        })
      });
    };
  }
});

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Pagenav: () => Pagenav
});
module.exports = __toCommonJS(src_exports);
init_cjs_shims();

// src/Pagenav.tsx
init_cjs_shims();
var import_react = require("react");
var import_button = __toESM(require_dist());
var import_jsx_runtime = require("react/jsx-runtime");
var Pagenav = (props) => {
  const { max, active, activeStyle, unactiveStyle, onPageChange, ...rest } = props;
  const showPageNumber = 10;
  const [btns, setBtns] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    const arr = [];
    arr.push({
      title: `1<`,
      page: 1,
      active: false
    });
    let from = active - showPageNumber / 2;
    let to = active + showPageNumber / 2;
    let numbers = [];
    for (let index = from; index <= to; index++) {
      numbers.push(index);
    }
    const start = numbers.filter((i) => i > 0)[0];
    const end = Math.min(start + showPageNumber - 1, max);
    for (let index = start; index <= end; index++) {
      arr.push({
        title: index,
        page: index,
        active: active === index ? true : false
      });
    }
    arr.push({
      title: `>${max}`,
      page: max,
      active: false
    });
    setBtns(arr);
  }, [max, active]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "fluentliteui pagenav",
    ...rest,
    children: btns.map((btn) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_button.Button, {
        style: btn.active ? activeStyle : unactiveStyle,
        variant: `page ${btn.active ? "primary" : "default"}`,
        onClick: () => {
          onPageChange(btn.page);
        },
        children: btn.title
      });
    })
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Pagenav
});
