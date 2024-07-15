import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

export const i18n = createI18n({   
    locale: 'heb',  // Set the default locale
    messages: {
        heb: {      
            backToDailyMenu: "חזרה לתפריט היומי",
            title: 'חדר אוכל',
            typeOfFood: 'סוג מנה'    
        }
    }
})