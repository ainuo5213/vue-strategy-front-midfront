import { App, defineAsyncComponent } from 'vue'
import { dirname } from 'path-browserify'

const modules = import.meta.glob('./*/index.vue')

export default class LibPlugin {
  static install(app: App) {
    // vite下自动注册组件
    for (const [relativePath, importCompFn] of Object.entries(modules)) {
      const compName = dirname(relativePath).slice('./'.length)
      const Comp = defineAsyncComponent(importCompFn)
      app.component(compName, Comp)
    }
  }
}
