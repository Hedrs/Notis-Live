import { jsx, Fragment } from "react/jsx-runtime";
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import { renderToString } from "react-dom/server";
/*! src/App.tsx [vike:pluginModuleBanner] */
function App({ children }) {
  return /* @__PURE__ */ jsx(Fragment, { children });
}
/*! src/pages/_default.page.server.tsx [vike:pluginModuleBanner] */
function prerender() {
  return [
    {
      url: "/"
    }
  ];
}
async function onRenderHtml(pageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = renderToString(
    /* @__PURE__ */ jsx(App, { children: /* @__PURE__ */ jsx(Page, { ...pageProps }) })
  );
  const documentHtml = escapeInject`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Notis Live</title>
        </head>
        <body>
          <div id="react-root" >${dangerouslySkipEscape(pageHtml)}</div>
        </body>
      </html>
    `;
  return { documentHtml, pageContext: {} };
}
export {
  onRenderHtml,
  prerender
};
