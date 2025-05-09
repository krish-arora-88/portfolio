import {
  Maintenance
} from "/build/_shared/chunk-VMET37ZG.js";
import {
  createHotContext
} from "/build/_shared/chunk-PB4VM4ND.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/home.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/home.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/home.tsx"
  );
  import.meta.hot.lastModified = "1746784414357.6301";
}
function meta({}) {
  return [{
    title: "Krish Arora"
  }, {
    name: "description",
    content: "Welcome!"
  }];
}
function Home() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Maintenance, {}, void 0, false, {
    fileName: "app/routes/home.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c = Home;
var _c;
$RefreshReg$(_c, "Home");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Home as default,
  meta
};
//# sourceMappingURL=/build/routes/home-AF45WBME.js.map
