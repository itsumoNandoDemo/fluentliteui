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
  const { disabled = false, label, value, options, onOptionChange, ...rest } = props;
  const dropdown = (0, import_react.useRef)();
  const optionsDom = (0, import_react.useRef)();
  const [showOptions, setShowOptions] = (0, import_react.useState)(false);
  const totalHeight = window.innerHeight || document.documentElement.clientHeight;
  const totalWidth = window.innerWidth || document.documentElement.clientWidth;
  (0, import_react.useEffect)(() => {
    var _a, _b, _c;
    if (showOptions) {
      dropdown.current.focus();
      if (optionsDom.current) {
        const { top, bottom } = (_c = (_b = (_a = optionsDom.current) == null ? void 0 : _a.getBoundingClientRect) == null ? void 0 : _b.call(_a)) != null ? _c : {
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
  }, [showOptions]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ...rest,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "fluentliteui dropdown-wapper",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "label",
          children: label
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "dropdown",
          tabIndex: 0,
          ref: dropdown,
          onBlur: () => {
            setShowOptions(false);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              ...{ disabled },
              className: "value",
              onClick: () => {
                if (!disabled) {
                  setShowOptions(!showOptions);
                }
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "text",
                  children: value
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: showOptions ? "icon_rotate" : "icon"
                }),
                disabled && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "mask"
                })
              ]
            }),
            showOptions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              ref: optionsDom,
              className: "options",
              children: options.map((item) => {
                return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  title: item.title,
                  className: item.value === value ? "option select" : "option",
                  onClick: () => {
                    onOptionChange(item.value);
                    setShowOptions(false);
                  },
                  children: item.title
                }, item.key);
              })
            })
          ]
        })
      ]
    })
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Dropdown
});
