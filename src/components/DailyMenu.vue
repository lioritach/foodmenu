<template>
    <div>
        <v-container>
            <Table :backToDailyMenu="$t('backToDailyMenu')" :title="$t('title')" :cards="store.cards" :days="days" :isAdmin="store.isAdmin" />
        </v-container>
    </div>



</template>
<script setup>
import Table from '@/components/Table.vue'
import { useStore } from '@/store/index'

const store = useStore();
// const cards = [
//     { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcumrkfqHUn4SPlaGwnNepboVlJxBU82CROA&s', text: 'מרק' },
//     { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qAz1TZ0hw54IFS_Jz61HRvfm7UkMOyxT_w&s', text: 'בשר' },
//     { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5z-9F51ODwmVpE0Xxu2bA_o1DTHUfR897A&s', text: 'בשר' },
//     { src: 'https://veg.co.il/wp-content/uploads/vegan-burger-for-bbq.jpg.850x810@2x.webp?v=3', text: 'המבורגר' },
//     { src: 'https://eliaabayof.com/wp-content/uploads/2023/07/%D7%A9%D7%A0%D7%99%D7%A6%D7%9C-1.jpg', text: 'שניצל' },
//     { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStnhqidV9MlKgebdZ7cY9jox066q3b_0TLeQ&s', text: 'פחממה' },
//     { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStnhqidV9MlKgebdZ7cY9jox066q3b_0TLeQ&s', text: 'פחממה' },
//     { src: 'https://chef-lavan.co.il/wp-content/uploads/old-storage/uploads/f_5851a79b1e0f4_1481746331.jpg', text: 'דג' },
//     { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStnhqidV9MlKgebdZ7cY9jox066q3b_0TLeQ&s', text: 'Text for card 9' },
//     { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStnhqidV9MlKgebdZ7cY9jox066q3b_0TLeQ&s', text: 'Text for card 10' },
//     { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStnhqidV9MlKgebdZ7cY9jox066q3b_0TLeQ&s', text: 'Text for card 11' }
//     // Repeat or dynamically generate more card data as needed
// ]

const days = [
    { name: 'חמישי - 05/07/2024' },
    { name: 'רביעי - 04/07/2024' },
    { name: 'שלישי - 03/07/2024' },
    { name: 'שני - 02/07/2024' },
    { name: 'ראשון - 01/07/2024' },
]

</script>

<style>
.trh2 {
    background-color: rgb(167, 223, 255);
}

.trh3 {
    display: flex;
    justify-content: center;
    border-radius: 5px;
    background-image: linear-gradient(to bottom, #d5d6d5, #c2c4c3, #b0b2b0, #9ea19e, #8d908d);
}

.trh3_text {
    color: #FFFFFF;
}

.h3 {
    background-image: linear-gradient(to bottom, #5ff887, #4ff572, #3ef25b, #2bef40, #12eb12);
    display: flex;
    justify-content: end;
    padding-right: 9px;
    border-radius: 9px;
}


.card {
    background-color: rgb(228, 182, 83);
}


.d1 {
    background-color: red;
    width: 20%;
}

.name_img {
    display: flex;
    justify-content: center;
    align-items: center;
}


td,
th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 5px;

}

.custom {
    justify-content: space-between;

}


.v-table th {
    background-color: #f5f5f5;
    position: sticky;
    top: 0;
    /* Make the header sticky */
    z-index: 1;
    /* Ensure the header is above the content */
}

.text {
    font-size: 1.1rem;
    width: 2rem;
    text-align: right;
    font-family: 'Arial';
    font-weight: bold;
    background: #0e8dbc;
    color: white;
    text-shadow: 0 0.3px 0 #FFFFFF;
}

.card-img {
    transition: 0.5s all ease-in-out;
}

.card-img:hover {
    transform: scale(1.06);
}
</style>