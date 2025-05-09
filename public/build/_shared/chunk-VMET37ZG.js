import {
  createHotContext
} from "/build/_shared/chunk-PB4VM4ND.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/maintenance.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/maintenance.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/maintenance.tsx"
  );
  import.meta.hot.lastModified = "1746782637920.3584";
}
function meta({}) {
  return [{
    title: "Maintenance - Krish Arora"
  }, {
    name: "description",
    content: "Portfolio under maintenance"
  }];
}
function Maintenance() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(45deg, #1a202c, #2d3748)",
    color: "white",
    padding: "2rem",
    textAlign: "center",
    fontFamily: "system-ui, -apple-system, sans-serif"
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    maxWidth: "600px",
    padding: "3rem",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "1rem",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { style: {
      fontSize: "2.5rem",
      marginBottom: "1.5rem",
      background: "linear-gradient(45deg, #ff3e3e, #ff9f1c)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "bold"
    }, children: "\u{1F6E0}\uFE0F Under Maintenance" }, void 0, false, {
      fileName: "app/routes/maintenance.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
      fontSize: "1.2rem",
      lineHeight: "1.6",
      marginBottom: "2rem",
      color: "rgba(255, 255, 255, 0.9)"
    }, children: "I'm currently updating my portfolio to bring you an even better experience. Please check back shortly!" }, void 0, false, {
      fileName: "app/routes/maintenance.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      display: "flex",
      gap: "1rem",
      justifyContent: "center"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://www.linkedin.com/in/krish--arora/", target: "_blank", rel: "noopener noreferrer", style: {
        padding: "0.75rem 1.5rem",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "0.5rem",
        color: "white",
        textDecoration: "none",
        transition: "all 0.3s ease",
        border: "1px solid rgba(255, 255, 255, 0.2)"
      }, onMouseOver: (e) => {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }, onMouseOut: (e) => {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
        e.currentTarget.style.transform = "translateY(0)";
      }, children: "Connect on LinkedIn" }, void 0, false, {
        fileName: "app/routes/maintenance.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://github.com/krish-arora-88", target: "_blank", rel: "noopener noreferrer", style: {
        padding: "0.75rem 1.5rem",
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "0.5rem",
        color: "white",
        textDecoration: "none",
        transition: "all 0.3s ease",
        border: "1px solid rgba(255, 255, 255, 0.2)"
      }, onMouseOver: (e) => {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }, onMouseOut: (e) => {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
        e.currentTarget.style.transform = "translateY(0)";
      }, children: "Visit GitHub" }, void 0, false, {
        fileName: "app/routes/maintenance.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/maintenance.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/maintenance.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/maintenance.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c = Maintenance;
var _c;
$RefreshReg$(_c, "Maintenance");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  meta,
  Maintenance
};
//# sourceMappingURL=/build/_shared/chunk-VMET37ZG.js.map
