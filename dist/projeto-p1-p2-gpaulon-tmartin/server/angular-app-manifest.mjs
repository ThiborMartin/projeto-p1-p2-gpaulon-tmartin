
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/projeto-p1-p2-gpaulon-tmartin/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/projeto-p1-p2-gpaulon-tmartin"
  },
  {
    "renderMode": 2,
    "route": "/projeto-p1-p2-gpaulon-tmartin/busca"
  },
  {
    "renderMode": 2,
    "route": "/projeto-p1-p2-gpaulon-tmartin/cadastro"
  },
  {
    "renderMode": 2,
    "route": "/projeto-p1-p2-gpaulon-tmartin/cesta"
  },
  {
    "renderMode": 2,
    "route": "/projeto-p1-p2-gpaulon-tmartin/detalhe"
  },
  {
    "renderMode": 2,
    "route": "/projeto-p1-p2-gpaulon-tmartin/login"
  },
  {
    "renderMode": 2,
    "route": "/projeto-p1-p2-gpaulon-tmartin/vitrine"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 953, hash: 'd64065a8a7f703b2aeb8c2d57002b035f5c5cb947ed71717fd57319a81e946e8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1466, hash: '0214acba0a6f624cfbf4d7c25798dd5d6eef5dff8cd7037b72c9b53f5c12c0f5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'busca/index.html': {size: 14253, hash: '6916a07899ccb3a3d0e292df606be45ca4bafe7407e8460fe6ca98a68037a4ba', text: () => import('./assets-chunks/busca_index_html.mjs').then(m => m.default)},
    'index.html': {size: 20087, hash: '02510a75df4b4c90ed152ffe0f2d9636f6e96e328225140fc9bb9904c29b9703', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'detalhe/index.html': {size: 3329, hash: '5409c7e54bb1a133e23635191f7c1e1b5c5ba7159484c569abbae32e8584dfc7', text: () => import('./assets-chunks/detalhe_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 4461, hash: 'bd6a2d06553d033fead97c6b03f16f15773359d78c47d876d764e6427e2d110f', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'vitrine/index.html': {size: 20087, hash: '02510a75df4b4c90ed152ffe0f2d9636f6e96e328225140fc9bb9904c29b9703', text: () => import('./assets-chunks/vitrine_index_html.mjs').then(m => m.default)},
    'cadastro/index.html': {size: 5238, hash: 'c3ed3e56059fe2983ffd843739bf45d47c6e8dcf54bf37545ef1ca7885ddbb86', text: () => import('./assets-chunks/cadastro_index_html.mjs').then(m => m.default)},
    'cesta/index.html': {size: 3773, hash: 'a47a9b30c0e01ba4bed9f713319044ac3597025ed37a60ac181b46255dd70cc4', text: () => import('./assets-chunks/cesta_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
