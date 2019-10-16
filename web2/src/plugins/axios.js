import Vue from 'vue'
import axios from 'axios'

const _axios = axios.create({
  baseURL: 'http://localhost:8000/api'
})

Plugin.install = function (Vue, options) {
  Vue.axios = _axios
  window.axios = _axios

  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return _axios
      }
    },
    $axios: {
      get () {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

export default _axios
