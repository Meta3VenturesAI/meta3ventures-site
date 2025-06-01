import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["_redirects","about.txt","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon.ico","favicon.png","robots.txt","site.webmanifest","sitemap.xml"]),
	mimeTypes: {".txt":"text/plain",".png":"image/png",".webmanifest":"application/manifest+json",".xml":"application/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.DjxeH2IA.js","app":"_app/immutable/entry/app.Bet8d0bP.js","imports":["_app/immutable/entry/start.DjxeH2IA.js","_app/immutable/chunks/scheduler.B7z6WnsH.js","_app/immutable/chunks/singletons.DxshLeUe.js","_app/immutable/entry/app.Bet8d0bP.js","_app/immutable/chunks/scheduler.B7z6WnsH.js","_app/immutable/chunks/index.DWLdUkvE.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
