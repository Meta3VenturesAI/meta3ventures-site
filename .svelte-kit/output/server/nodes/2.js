

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Dy6HkWNH.js","_app/immutable/chunks/scheduler.B7z6WnsH.js","_app/immutable/chunks/index.DWLdUkvE.js"];
export const stylesheets = [];
export const fonts = [];
