import {createApp} from 'vue'
import App from './App.vue'
import {store} from './store'
import {setContextMenuDirective} from './directive/ContextMenu'

const app=createApp(App)
setContextMenuDirective(app)
app.use(store)
app.mount('#app')
