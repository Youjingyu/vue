# vue-core
[Vue](https://cn.vuejs.org/) platform-independent core code, build from ```vue/src/core```. Easy to use vue's responsive features.

## Usage
installation  
```bash
npm i vue-core --save
```  
bind ```__patch__``` and ```$mount```
```javascript
// runtime.js
import Vue from 'vue-core'

Vue.prototype.$mount = function () {
  // do some thing before mount
  // and then mount vue
  Vue.prototype._mountComponent(this)
}
Vue.prototype.__patch__ = function (prevVnode, vnode) {
  // update view as you want when data changed
}
```
and then use vue as normal
```javascript
import Vue from 'runtime.js'

const app = new Vue(vueOptions)
app.$mount()
```