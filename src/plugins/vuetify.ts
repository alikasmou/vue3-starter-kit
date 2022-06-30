// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure your project is capable of handling css files

// Vuetify
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        dark: true,
        colors: {
          primary: '#1e1e2d',
          "primary-dark": "#009ef7",
          "primary-light": "#7bc6ff",
          "bg-light": '#f1f4f7'
        }
      }
    }
  }
})
