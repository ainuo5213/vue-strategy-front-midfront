import { App } from 'vue'
import SvgIcon from './svg-icon/svg-icon.vue'

export default class LibPlugin {
  static install(app: App) {
    app.component('svg-icon', SvgIcon)
  }
}
