

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.B7GONB4o.js","_app/immutable/chunks/scheduler.DzV7pw1l.js","_app/immutable/chunks/index.OuQUVrRW.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/slider.svelte_svelte_type_style_lang.BCrG7bZt.js","_app/immutable/chunks/paths.CWSbX0dy.js","_app/immutable/chunks/routes.DHnXxdEj.js"];
export const stylesheets = ["_app/immutable/assets/2.DOkbBvrt.css","_app/immutable/assets/slider.BcBvyb-Y.css"];
export const fonts = [];