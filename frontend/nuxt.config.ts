// `@nuxt/types`는 Nuxt.js 프로젝트에서 TypeScript를 사용할 때 필요한 타입 정의를 제공하는 모듈이야. 
// 이 모듈은 Nuxt.js의 설정(config), 플러그인(plugin), 스토어(store), 컨텍스트(context) 등과 같은 Nuxt.js의 다양한 부분에 대한 TypeScript 인터페이스와 타입을 포함하고 있어. 
// 이를 통해 Nuxt.js 프로젝트에서 TypeScript의 강력한 타입 시스템을 최대한 활용할 수 있게 해줘.
// 예를 들어, `nuxt.config.ts` 파일에서 Nuxt.js의 설정 객체에 대한 타입 안정성을 보장하고, 
// 오타나 타입 불일치로 인한 버그를 사전에 방지할 수 있게 해줘. 
// 이런 방식으로 `@nuxt/types` 모듈은 개발자가 더 안전하고 정확하게 Nuxt.js 프로젝트를 개발할 수 있도록 도와줘.
import type { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {

  // devtools: { enabled: true }

  modules: [
    'nuxt-quasar-ui',
  ],

  quasar: {
    plugins: []
  },

  nitro: {
    routeRules: {
        "/min/api/**": {
            proxy: "http://localhost:8080/min/api/**",
        },
    },
  },
}

export default config;