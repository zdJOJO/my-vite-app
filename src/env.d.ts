/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_ENV: 'dev' | 'test'
  readonly VITE_USER_CENTER_URL: string
  readonly VITE_COOKIE_KEY: string
  readonly VITE_COOKIE_VALUE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
