/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_ENV: 'dev' | 'test'
  readonly VITE_USER_CENTER_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
