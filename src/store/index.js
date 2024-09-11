import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: 'store',
    state: () => ({
        isAdmin: true,
        cards: [{
            foodType: 'בשר',
            id: 1,
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qAz1TZ0hw54IFS_Jz61HRvfm7UkMOyxT_w&s',
            days: [{
                name: 'חמישי - 05/07/2024',
                text: 'חזה עוף'
            }, {
                name: 'רביעי - 04/07/2024',
                text: 'קדרת בשר'
            }, {
                name: 'רביעי - 04/07/2024',
                text: 'כרעיים עוף'
            }, {
                name: 'רביעי - 04/07/2024',
                text: 'כדורי עוף ברוטב עגבניות'
            }, {
                name: 'רביעי - 04/07/2024',
                text: 'שניצל'
            }, {
                name: 'שלישי - 03/07/2024',
                text: 'שניצל'
            }, {
                name: 'שני - 02/07/2024',
                text: 'קדרת בשר'
            }, {
                name: 'ראשון - 01/07/2024',
                text: 'חזה עוף'
            }]
        }, {
            foodType: 'דג',
            id: 2,
            src: 'https://chef-lavan.co.il/wp-content/uploads/old-storage/uploads/f_5851a79b1e0f4_1481746331.jpg',
            days: [{
                name: 'חמישי - 05/07/2024',
                text: 'פילה לברק'
            }, {
                name: 'רביעי - 04/07/2024',
                text: 'פילה לברק'
            }, {
                name: 'שלישי - 03/07/2024',
                text: 'פילה לברק'
            }, {
                name: 'שני - 02/07/2024',
                text: 'פילה לברק'
            }, {
                name: 'ראשון - 01/07/2024',
                text: 'מושט'
            }]
        }, {
            foodType: 'מרק',
            id: 3,
            src: 'https://img.mako.co.il/2017/11/21/marak_yerakot1_i.jpg',
            days: [{
                name: 'שני - 02/07/2024',
                text: 'מרק אפונה'
            }, {
                name: 'ראשון - 01/07/2024',
                text: 'מרק גזר'
            }]
        }, {
            foodType: 'פחממה',
            id: 3,
            src: 'https://res.cloudinary.com/midrag/image/upload/c_scale,w_1206/c_scale,g_south_east,l_logo_on_img_2,w_80,x_10,y_40/Cms/r6k6ed66uvmhfesbctvg.jpg',
            days: [{
                name: 'שני - 02/07/2024',
                text: 'פתיתים'
            }, {
                name: 'ראשון - 01/07/2024',
                text: 'לחם'
            }]
        }]
    }),

    getters: {
        cardsText(state) {
            return state.cards.map(card => card.foodType);
        }
    },
})