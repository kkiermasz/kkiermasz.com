// plugins/vuetify.js
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon) 
    library.add(fas)

    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        icons: {
            defaultSet: 'fa',
            aliases,
            sets: {
                fa
            },
        },
    })

    nuxtApp.vueApp.use(vuetify)
})
