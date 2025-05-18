import { setGlobalContext_buildEntry } from "vike/__internal";
/*! src/pages/404/index.page.tsx?extractExportNames&lang.tsx [vike:pluginModuleBanner] */
const exportNames$5 = ["Page"];
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$5
}, Symbol.toStringTag, { value: "Module" }));
/*! src/pages/_default.page.ts?extractExportNames&lang.ts [vike:pluginModuleBanner] */
const exportNames$4 = ["default"];
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$4
}, Symbol.toStringTag, { value: "Module" }));
/*! src/pages/_error.page.tsx?extractExportNames&lang.tsx [vike:pluginModuleBanner] */
const exportNames$3 = ["Page"];
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$3
}, Symbol.toStringTag, { value: "Module" }));
/*! src/pages/index.page.tsx?extractExportNames&lang.tsx [vike:pluginModuleBanner] */
const exportNames$2 = ["documentProps", "default"];
const __vite_glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$2
}, Symbol.toStringTag, { value: "Module" }));
/*! src/pages/_default.page.server.tsx?extractExportNames&lang.tsx [vike:pluginModuleBanner] */
const exportNames$1 = ["prerender", "onRenderHtml"];
const __vite_glob_3_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames: exportNames$1
}, Symbol.toStringTag, { value: "Module" }));
/*! src/pages/404/index.page.route.ts [vike:pluginModuleBanner] */
const route = "/404";
const __vite_glob_4_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  route
}, Symbol.toStringTag, { value: "Module" }));
/*! src/pages/index.page.route.ts [vike:pluginModuleBanner] */
const prerender = true;
const index_page_route = "/";
const __vite_glob_4_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index_page_route,
  prerender
}, Symbol.toStringTag, { value: "Module" }));
/*! src/pages/_default.page.client.tsx?extractExportNames&lang.tsx [vike:pluginModuleBanner] */
const exportNames = ["render", "default"];
const __vite_glob_5_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames
}, Symbol.toStringTag, { value: "Module" }));
/*! virtual:vike:importUserCode:server [vike:pluginModuleBanner] */
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {}
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({ "/src/pages/404/index.page.tsx": () => import("./entries/src_pages_404_index-page.mjs"), "/src/pages/_default.page.ts": () => import("./entries/src_pages_default-page.mjs"), "/src/pages/_error.page.tsx": () => import("./entries/src_pages_error-page.mjs"), "/src/pages/index.page.tsx": () => import("./entries/src_pages_index-page.mjs") });
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({ "/src/pages/404/index.page.tsx": __vite_glob_1_0, "/src/pages/_default.page.ts": __vite_glob_1_1, "/src/pages/_error.page.tsx": __vite_glob_1_2, "/src/pages/index.page.tsx": __vite_glob_1_3 });
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({ "/src/pages/_default.page.server.tsx": () => import("./entries/src_pages_default-page-server.mjs") });
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({ "/src/pages/_default.page.server.tsx": __vite_glob_3_0 });
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({ "/src/pages/404/index.page.route.ts": __vite_glob_4_0, "/src/pages/index.page.route.ts": __vite_glob_4_1 });
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({ "/src/pages/_default.page.client.tsx": __vite_glob_5_0 });
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const virtualFileExports = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
/*! virtual:@brillout/vite-plugin-server-entry:serverEntry [vike:pluginModuleBanner] */
{
  const assetsManifest = {
  "../node_modules/.pnpm/vike@0.4.229_vite@6.3.5_@ty_a233dcd4b8011110f2b733f05b0df51a/node_modules/vike/dist/esm/client/client-routing-runtime/entry.js": {
    "file": "assets/entries/entry-client-routing.Byyr8yJk.js",
    "name": "entries/entry-client-routing",
    "src": "../node_modules/.pnpm/vike@0.4.229_vite@6.3.5_@ty_a233dcd4b8011110f2b733f05b0df51a/node_modules/vike/dist/esm/client/client-routing-runtime/entry.js",
    "isEntry": true,
    "imports": [
      "_chunk-Dn869Tl2.js"
    ],
    "dynamicImports": [
      "src/pages/404/index.page.tsx",
      "src/pages/_default.page.ts",
      "src/pages/_error.page.tsx",
      "src/pages/index.page.tsx",
      "src/pages/_default.page.client.tsx",
      "src/pages/_default.page.server.tsx?extractAssets&lang.tsx"
    ]
  },
  "../node_modules/.pnpm/vike@0.4.229_vite@6.3.5_@ty_a233dcd4b8011110f2b733f05b0df51a/node_modules/vike/dist/esm/client/server-routing-runtime/entry.js": {
    "file": "assets/entries/entry-server-routing.B_AWvcpx.js",
    "name": "entries/entry-server-routing",
    "src": "../node_modules/.pnpm/vike@0.4.229_vite@6.3.5_@ty_a233dcd4b8011110f2b733f05b0df51a/node_modules/vike/dist/esm/client/server-routing-runtime/entry.js",
    "isEntry": true,
    "imports": [
      "_chunk-Dn869Tl2.js"
    ],
    "dynamicImports": [
      "src/pages/404/index.page.tsx",
      "src/pages/_default.page.ts",
      "src/pages/_error.page.tsx",
      "src/pages/index.page.tsx",
      "src/pages/_default.page.client.tsx",
      "src/pages/_default.page.server.tsx?extractAssets&lang.tsx"
    ]
  },
  "_chunk-6otl1p8d.js": {
    "file": "assets/chunks/chunk-6otl1p8d.js",
    "name": "index"
  },
  "_chunk-D_zvdyIk.js": {
    "file": "assets/chunks/chunk-D_zvdyIk.js",
    "name": "jsx-runtime"
  },
  "_chunk-Dn869Tl2.js": {
    "file": "assets/chunks/chunk-Dn869Tl2.js",
    "name": "getCurrentUrl"
  },
  "_src_index-b3c78705.DhXZg4F_.css": {
    "file": "assets/static/src_index-b3c78705.DhXZg4F_.css",
    "src": "_src_index-b3c78705.DhXZg4F_.css"
  },
  "src/pages/404/index.page.tsx": {
    "file": "assets/entries/src_pages_404_index.page.C35DBC29.js",
    "name": "entries/src/pages/404/index.page",
    "src": "src/pages/404/index.page.tsx",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-D_zvdyIk.js"
    ]
  },
  "src/pages/_default.page.client.tsx": {
    "file": "assets/entries/src_pages_default.page.client.DKHMkXuG.js",
    "name": "entries/src/pages/_default.page.client",
    "src": "src/pages/_default.page.client.tsx",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-D_zvdyIk.js",
      "_chunk-6otl1p8d.js"
    ],
    "css": [
      "assets/static/src_index-b3c78705.DhXZg4F_.css"
    ]
  },
  "src/pages/_default.page.server.tsx?extractAssets&lang.tsx": {
    "file": "assets/entries/src_pages_default.page.server.extractAssets.l0sNRNKZ.js",
    "name": "entries/src/pages/_default.page.server.tsx_extractAssets_lang",
    "src": "src/pages/_default.page.server.tsx?extractAssets&lang.tsx",
    "isEntry": true,
    "isDynamicEntry": true
  },
  "src/pages/_default.page.ts": {
    "file": "assets/entries/src_pages_default.page.BVHM8tuV.js",
    "name": "entries/src/pages/_default.page",
    "src": "src/pages/_default.page.ts",
    "isEntry": true,
    "isDynamicEntry": true
  },
  "src/pages/_error.page.tsx": {
    "file": "assets/entries/src_pages_error.page.BcGWiFBk.js",
    "name": "entries/src/pages/_error.page",
    "src": "src/pages/_error.page.tsx",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-D_zvdyIk.js",
      "src/pages/404/index.page.tsx"
    ]
  },
  "src/pages/index.page.tsx": {
    "file": "assets/entries/src_pages_index.page.ugvbOaTS.js",
    "name": "entries/src/pages/index.page",
    "src": "src/pages/index.page.tsx",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-D_zvdyIk.js",
      "_chunk-6otl1p8d.js"
    ],
    "css": [
      "assets/static/index.CJ75bbPH.css"
    ]
  }
};
  const buildInfo = {
    "versionAtBuildTime": "0.4.229",
    "usesClientRouter": false,
    "viteConfigRuntime": {
      "root": "C:/Development/New-Era/my-obsidian-web/frontend",
      "build": {
        "outDir": "C:/Development/New-Era/my-obsidian-web/frontend/dist/"
      },
      "_baseViteOriginal": "/__UNSET__",
      "vitePluginServerEntry": {}
    }
  };
  setGlobalContext_buildEntry({
    virtualFileExports,
    assetsManifest,
    buildInfo
  });
}
