"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Loading: () => Loading
});
module.exports = __toCommonJS(src_exports);

// src/Loading.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Loading = (props) => {
  const { loading, size = 30, children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "fluentliteui loading",
    ...rest,
    style: children === void 0 ? { width: `${size}px`, height: `${size}px` } : {},
    children: [
      children,
      loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: children ? "loadingwapper" : "",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "loadingIcon",
          style: { width: `${size}px`, height: `${size}px` }
        })
      })
    ]
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Loading
});
