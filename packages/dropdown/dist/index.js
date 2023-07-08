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
  Dropdown: () => Dropdown
});
module.exports = __toCommonJS(src_exports);

// src/Dropdown.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var Dropdown = (props) => {
  const { titleWidth = 120, optionWidth = 320, title, value, options, onOptionChange, ...rest } = props;
  const inputElement = (0, import_react.useRef)();
  const [show, setShow] = (0, import_react.useState)(false);
  const optionsDom = (0, import_react.useRef)();
  const totalHeight = window.innerHeight || document.documentElement.clientHeight;
  const totalWidth = window.innerWidth || document.documentElement.clientWidth;
  (0, import_react.useEffect)(() => {
    var _a, _b, _c;
    if (show) {
      inputElement.current.focus();
      if (optionsDom.current) {
        const { top, right, bottom, left } = (_c = (_b = (_a = optionsDom.current) == null ? void 0 : _a.getBoundingClientRect) == null ? void 0 : _b.call(_a)) != null ? _c : {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };
        if (totalHeight < bottom) {
          optionsDom.current.style.height = `${totalHeight - top - 20}px`;
          optionsDom.current.style.overflowY = "scroll";
        }
      }
    }
  }, [show]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "wapper",
    ...rest,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "label",
        style: { width: `${titleWidth}px` },
        children: [
          title,
          " : "
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        tabIndex: 0,
        ref: inputElement,
        onBlur: () => {
          setShow(false);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "value",
            style: { width: `${optionWidth}px` },
            onClick: () => {
              setShow(!show);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "text",
                style: { width: `${optionWidth}px` },
                children: value
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: show ? "icon_rotate" : "icon"
              })
            ]
          }),
          show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            ref: optionsDom,
            className: "options",
            style: { width: `${optionWidth + 2}px` },
            children: options.map((item) => {
              return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                title: item.title,
                className: item.value === value ? "option select" : "option",
                onClick: () => {
                  onOptionChange(item.value);
                  setShow(false);
                },
                children: item.title
              }, item.key);
            })
          })
        ]
      })
    ]
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Dropdown
});
