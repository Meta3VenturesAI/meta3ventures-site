

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D7l-Y_TJ.js","_app/immutable/chunks/scheduler.B7z6WnsH.js","_app/immutable/chunks/index.DWLdUkvE.js"];
export const stylesheets = [];
export const fonts = [];
