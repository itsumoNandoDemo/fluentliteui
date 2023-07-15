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
  Popover: () => Popover
});
module.exports = __toCommonJS(src_exports);

// src/Popover.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var Popover = (props) => {
  var _a, _b, _c, _d, _e, _f;
  const { content, children, pop: popHTMLElement, ...rest } = props;
  const [show, setShow] = (0, import_react.useState)(false);
  const [x, setX] = (0, import_react.useState)(0);
  const popwapper = (0, import_react.useRef)();
  const pop = (0, import_react.useRef)();
  const { top, right, bottom, left } = (_c = (_b = (_a = popwapper.current) == null ? void 0 : _a.getBoundingClientRect) == null ? void 0 : _b.call(_a)) != null ? _c : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  const { top: t, right: r, bottom: b, left: l } = (_f = (_e = (_d = pop.current) == null ? void 0 : _d.getBoundingClientRect) == null ? void 0 : _e.call(_d)) != null ? _f : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ...rest,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "fluentliteui popover",
      ref: popwapper,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "popover-hover",
          onMouseOver: ({ clientX, clientY }) => {
            setX(clientX);
          },
          children
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "popover-pop",
          ref: pop,
          style: { left: `${left + (right - left) / 2 - (r - l) / 2}px`, top: `${top - (b - t)}px` },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "popover-content",
              children: popHTMLElement
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "popover-arrow"
            })
          ]
        })
      ]
    })
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Popover
});
