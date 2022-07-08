import {createApp} from 'vue'
import App from './App.vue'
import {key, store} from './store'
import {setContextMenuDirective} from './directive/ContextMenu'

const app=createApp(App)
setContextMenuDirective(app)
app.use(store,key)
app.mount('#app')
