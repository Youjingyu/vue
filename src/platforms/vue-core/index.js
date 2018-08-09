import Vue from 'core/index'

// for platforms
// import config from 'core/config'
import { mountComponent } from 'core/instance/lifecycle'

import { noop } from 'shared/util'

// install platform patch function
Vue.prototype.__patch__ = noop

// public mount method
Vue.prototype._mountComponent = mountComponent

export default Vue
