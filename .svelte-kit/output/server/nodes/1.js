

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BlU5wBXt.js","_app/immutable/chunks/scheduler.B7z6WnsH.js","_app/immutable/chunks/index.DWLdUkvE.js","_app/immutable/chunks/singletons.DxshLeUe.js"];
export const stylesheets = [];
export const fonts = [];
