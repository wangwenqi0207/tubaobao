import Vue from 'vue'
import '@styles/global.less'
import {
    Tabs,
    TabPane,
    Image,
    Button,
    Radio,
    RadioGroup,
    RadioButton,
    Pagination,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'
import App from './App.vue'

Vue.use(Tabs)
    .use(TabPane)
    .use(Image)
    .use(Button)
    .use(Radio)
    .use(RadioGroup)
    .use(RadioButton)
    .use(Pagination)

Vue.config.productionTip = false

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
