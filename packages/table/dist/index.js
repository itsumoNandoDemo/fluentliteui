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
  Table: () => Table
});
module.exports = __toCommonJS(src_exports);

// src/Table.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Table = (props) => {
  const { columns, dataSource, ...rest } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
    className: "fluentliteui",
    ...rest,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
          children: columns.map((column) => {
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
              className: `td_${column.key}`,
              children: column.title
            });
          })
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
        children: dataSource.map((item) => {
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
            children: columns.map((column) => {
              return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
                children: item[column.key]
              });
            })
          });
        })
      })
    ]
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Table
});
