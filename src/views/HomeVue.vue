<template>
    <div>
        <div class="cards_container">
            <v-card class="d-flex flex-wrap flex-col mx-auto" max-width="1000">
                <v-container fluid>
                    <v-row dense>
                        <v-col v-for="card in cards" :key="card.title">
                            <v-card :to="card.route">
                                <v-img :src="card.src" class="align-end"
                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover>
                                    <v-card-title class="text-white" v-text="card.title"></v-card-title>
                                </v-img>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </div>
    </div>

</template>
<script setup>
import { useStore } from '@/store/index'


const store = useStore();
console.log(store.isAdmin)

const cards = [
    { title: 'תפריט יומי', src: 'https://tevabari.co.il/images/article-new/1106702252.jpg', flex: 12, route: 'DailyMenu', },
    { title: 'תפריט שבועי', src: 'https://organiclife.co.il/wp-content/uploads/2024/05/24.jpg', flex: 2, route: 'MenuDisplay' },

]
</script>
