declare module 'astro/runtime/server' {
  export function renderToString(component: any, props?: any): Promise<string>;
}
