import { jsxs, jsx } from "react/jsx-runtime";
import { Page as Page$1 } from "./src_pages_404_index-page.mjs";
/*! src/pages/_error.page.tsx [vike:pluginModuleBanner] */
function Page({ is404 }) {
  return /* @__PURE__ */ jsxs("div", { className: "p-8 text-center", children: [
    /* @__PURE__ */ jsx("h1", { children: is404 ? /* @__PURE__ */ jsx(Page$1, {}) : "Error" }),
    /* @__PURE__ */ jsx("p", { children: "Please, checked URL or try again later" })
  ] });
}
export {
  Page
};
