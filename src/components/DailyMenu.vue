<template>
    <div>
        <v-container>
            <div v-if="isAdmin">
                <Table :backToDailyMenu="$t('backToDailyMenu')" :title="$t('title')" :cards="store.cards" :days="days" :isAdmin="false" />
            </div>
            <div v-else>
                <Table :backToDailyMenu="$t('backToDailyMenu')" :addRow="$t('addRow')" :save="$t('save')" :copyMenuForNextWeek="$t('copyMenuForNextWeek')" :copyMenuForCurrWeek="$t('copyMenuForCurrWeek')" :health="$t('health')" :regular="$t('regular')" :dairy="$t('dairy')" :cards="store.cards" :days="days" :isAdmin="true" />
            </div>
        </v-container>
    </div>



</template>
<script setup>
import Table from '@/components/Table.vue'
import { useStore } from '@/store/index'

const store = useStore();

const days = [
    { name: 'חמישי - 05/07/2024',},
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
    justify-content: end;

}


.v-table th {
    background-color: #f5f5f5;
    position: sticky;
    top: 0;
    z-index: 1;
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