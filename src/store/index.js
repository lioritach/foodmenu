import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: 'store',
    state: () => ({
        isAdmin: true,
        cards: [
            { id: 1, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcumrkfqHUn4SPlaGwnNepboVlJxBU82CROA&s', text: 'מרק' },
            { id: 2, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qAz1TZ0hw54IFS_Jz61HRvfm7UkMOyxT_w&s', text: 'בשר' },
            { id: 3, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5z-9F51ODwmVpE0Xxu2bA_o1DTHUfR897A&s', text: 'בשר' },
            { id: 4, src: 'https://veg.co.il/wp-content/uploads/vegan-burger-for-bbq.jpg.850x810@2x.webp?v=3', text: 'המבורגר' },
            { id: 5, src: 'https://img.mako.co.il/2012/06/18/shutterstock_51423853_c.jpg', text: 'שניצל' },
            { id: 6, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStnhqidV9MlKgebdZ7cY9jox066q3b_0TLeQ&s', text: 'פחממה' },
            { id: 7, src: 'https://chef-lavan.co.il/wp-content/uploads/old-storage/uploads/f_5851a79b1e0f4_1481746331.jpg', text: 'דג' },
            { id: 8, src: 'https://lazydad.co.il/wp-content/uploads/2024/01/%D7%A7%D7%99%D7%A0%D7%95%D7%97-%D7%91-5-%D7%93%D7%A7%D7%95%D7%AA-%D7%9E%D7%AA%D7%9B%D7%95%D7%9F-%D7%9E%D7%95%D7%A9%D7%9C%D7%9D.webp', text: 'קינוח' },
        ]
    }),

    getters: {
        cardsText(state) {
            return state.cards.map(card => card.text);
        }
    },
})