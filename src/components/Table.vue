<template>
    <v-row justify="center">
        <v-col cols="auto">
            <div class="d-flex custom">
                <div>
                    <v-btn rounded="xl" class="text-none text-subtitle-1" color="#5865f2" size="small" variant="flat">
                        {{ backToDailyMenu }}
                    </v-btn>
                </div>
                <div>
                    <v-btn class="text-none text-subtitle-1" width="250px" color="#5865f2" size="small" variant="flat">
                        {{ title }}
                    </v-btn>
                </div>
            </div>
            <table class="v-table table">
                <thead>
                    <tr>
                        <th></th>
                        <th v-for="day in days" :key="day.name">
                            {{ day.name }}
                        </th>
                        <th></th>
                        <th v-if="isAdmin">{{ $t('typeOfFood') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in localCards" :key="index">
                        <td v-if="isAdmin" @click="iconClick(index)">
                            <font-awesome-icon class="deleteIcon" :icon="['fas', 'trash']" />
                        </td>
                        <td v-for="day in 5" :key="day"></td>
                        <td>
                            <v-card class="card d-flex flex-row" width="300px">
                                <v-img class="card-img" :src="item.src" height="100px" width="50%" cover></v-img>
                                <v-card-text class="pa-3 text">{{ item.text }}</v-card-text>
                            </v-card>
                        </td>
                        <td v-if="isAdmin" width="130px">
                            <div>
                                <v-select 
                                  :items="cardsText" 
                                  density="compact" 
                                  label="בחר" 
                                  v-model="selectedTexts[item.id]" 
                                  @update:modelValue="selectedItem => onItemSelect(item.id, selectedItem)"
                                />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </v-col>
    </v-row>
</template>
<script setup>
import { useStore } from '@/store/index'
import { computed, reactive, ref, toRefs } from 'vue';

const store = useStore();
console.log("first", store.cards)
defineProps({
    backToDailyMenu: String,
    title: String,
    days: Array,
    cards: Array,
    isAdmin: Boolean
});

const { cards } = toRefs(store.state);

const cardsText = computed(() => store.cardsText);

const localCards = ref(store.cards.map(card => ({ ...card })));

const selectedTexts = reactive({});
store.cards.forEach(card => {
    selectedTexts[card.id] = card.text;
});

const onItemSelect = (cardId, selectedText) => {
    const cardIndex = localCards.value.findIndex(card => card.id === cardId);
    if (cardIndex !== -1) {
        const selectedCard = store.cards.find(card => card.text === selectedText);
        if (selectedCard) {
            localCards.value[cardIndex].src = selectedCard.src;
            localCards.value[cardIndex].text = selectedCard.text;
        }
    }
}

const iconClick = (index) => {
    localCards.value.splice(index,1)
}
</script>

<style>
    .deleteIcon {
        cursor: pointer;
    }
</style>