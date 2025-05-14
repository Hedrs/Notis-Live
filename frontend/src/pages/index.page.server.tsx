import { escapeInject, dangerouslySkipEscape } from 'vike/server';
import type { PageContextServer } from 'vike/types';
import { App } from '../App';
import { renderToString } from 'react-dom/server';

export function prerender() {
  return [
    {
      url: '/',
    },
  ];
}

type MyPageContext = PageContextServer & {
  Page: React.FC;
  pageProps: Record<string, unknown>;
};

export async function render(pageContext: MyPageContext) {
  const { Page, pageProps } = pageContext;

  const pageHtml = renderToString(
    <App>
      <Page {...pageProps} />
    </App>
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

  return { documentHtml };
}
