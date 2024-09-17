/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />
/// <reference types="vue/macros-global" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly ENV_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
