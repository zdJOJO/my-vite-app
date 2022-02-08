/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_ENV: 'dev' | 'test'

  // 接口地址
  readonly VITE_DIPATCH_RELAY_RULE: string
  readonly VITE_PUBTRANS_BASE_URL: string
  readonly VITE_DIPATCH_CACHE_URL: string
  readonly VITE_UAA_SDK_DOMAIN: string
  readonly VITE_UAA_SDK_URL: string
  readonly VITE_USERCENTER_URL: string
  readonly VITE_IBS_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
