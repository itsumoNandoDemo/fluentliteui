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
  Space: () => Space
});
module.exports = __toCommonJS(src_exports);

// src/Space.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Space = (props) => {
  const { gap = 10, justify = "center", direction = "flex-row", children, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "fluentliteui",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      ...rest,
      style: { gap: `${gap ? gap : 0}px` },
      className: `space justify-${justify} ${direction === "column" ? "flex-column" : "flex-row"}`,
      children
    })
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Space
});
