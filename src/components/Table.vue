<template>
    <div>
        <v-row justify="center">
            <v-col cols="auto">
                <div class="d-flex custom">
                    <div v-if="!isAdmin" class="backtodaily">
                        <font-awesome-icon class="left_icon" :icon="['fas', 'angle-left']" />
                        <v-btn rounded="xl" class="text-none text-subtitle-1" color="#5865f2" width="180px"
                            variant="flat">
                            {{ backToDailyMenu }}
                        </v-btn>
                    </div>
                    <div v-if="!isAdmin">
                        <v-btn class="text-none text-subtitle-1" width="250px" color="#5865f2" size="small"
                            variant="flat">
                            {{ title }}
                        </v-btn>
                    </div>
                    <div v-if="isAdmin" class="d-flex align-end flex-column">
                        <div class="mb-3 d-flex justify-right">
                            <v-tabs v-model="tab" align-tabs="center" color="#5865f2">
                                <v-tab class="font-weight-bold" :value="1">{{ regular }}</v-tab>
                                <v-tab class="font-weight-bold" :value="2">{{ health }}</v-tab>
                                <v-tab class="font-weight-bold" :value="3">{{ dairy }}</v-tab>
                            </v-tabs>

                        </div>
                        <div class="adminBtns">
                            <div>
                                <v-btn class="text-none text-subtitle-1" width="120px" color="#5865f2" size="small"
                                    variant="flat" @click="addNewRow">
                                    {{ addRow }}
                                </v-btn>
                            </div>
                            <div>
                                <v-btn class="text-none text-subtitle-1" width="120px" color="#5865f2" size="small"
                                    variant="flat" @click="saveNewRows">
                                    {{ save }}
                                </v-btn>
                            </div>
                            <div>
                                <v-btn class="text-none text-subtitle-1" width="180px" color="#5865f2" size="small"
                                    variant="flat">
                                    {{ copyMenuForNextWeek }}
                                </v-btn>
                            </div>
                            <div>
                                <v-btn class="text-none text-subtitle-1" width="180px" color="#5865f2" size="small"
                                    variant="flat">
                                    {{ copyMenuForCurrWeek }}
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <table class="v-table table">
                        <thead>
                            <tr>
                                <th v-if="isAdmin"></th>
                                <th v-for="day in uniqueDayNames" :key="day">
                                    {{ day }}
                                </th>
                                <th></th>
                                <th v-if="isAdmin">{{ $t('typeOfFood') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="tab === 1">
                                <tr v-for="(item, index) in localCards" :key="index">
                                    <td v-if="isAdmin" @click="iconClick(index)">
                                        <font-awesome-icon class="deleteIcon" :icon="['fas', 'trash']" />
                                    </td>
                                    <th v-for="day in uniqueDayNames" :key="day">
                                        <ul class="ul__foodType">
                                            <li v-for="(text, index) in getDayText(item.days, day)" :key="index">{{ text }}</li>
                                            <!-- <input v-model="editableTexts[index]"
                                                @input="updateText(index, $event.target.value)" /> -->
                                        </ul>
                                    </th>
                                    <td>
                                        <v-card class="card d-flex flex-row" width="300px">
                                            <v-img class="card-img" :src="item.src" height="100px" width="50%"
                                                cover></v-img>
                                            <v-card-text class="pa-3 text">{{ item.foodType }}</v-card-text>
                                        </v-card>
                                    </td>
                                    <td v-if="isAdmin" width="130px">
                                        <div>
                                            <v-select :items="cardsText" density="compact" label="בחר"
                                                v-model="selectedTexts[item.id]"
                                                @update:modelValue="selectedItem => onItemSelect(item.id, selectedItem)" />
                                        </div>
                                    </td>
                                </tr>
                                <tr v-for="(row, index) in newRows" :key="'new-' + index">
                                    <td v-if="isAdmin"></td>
                                    <td v-for="day in uniqueDayNames" :key="day">
                                        <span v-if="row.dayName === day">{{ row.dayText }}</span>
                                    </td>
                                    <td>
                                        <v-card class="card d-flex flex-row" width="300px">
                                            <v-img class="card-img" :src="''" height="100px" width="50%" cover></v-img>
                                            <v-card-text class="pa-3 text">{{ row.foodType }}</v-card-text>
                                        </v-card>
                                    </td>
                                    <td v-if="isAdmin" width="130px">
                                        <div>
                                            <v-select :items="cardsText" density="compact" label="בחר"
                                                v-model="row.foodType" />
                                            <v-select :items="uniqueDayNames" density="compact" label="בחר יום"
                                                v-model="row.dayName" />
                                            <v-text-field label="הכנס טקסט" v-model="row.dayText" />
                                        </div>
                                    </td>
                                </tr>
                            </template>
                            <template v-if="tab === 2">
                                <tr v-for="(item, index) in localCards" :key="index">
                                    <td v-if="isAdmin" @click="iconClick(index)">
                                        <font-awesome-icon class="deleteIcon" :icon="['fas', 'trash']" />
                                    </td>
                                    <td v-for="day in 5" :key="day">

                                    </td>
                                    <td>
                                        <v-card class="card d-flex flex-row" width="300px">
                                            <v-img class="card-img" :src="item.src" height="100px" width="50%"
                                                cover></v-img>
                                            <v-card-text class="pa-3 text">{{ item.text }}</v-card-text>
                                        </v-card>
                                    </td>
                                    <td v-if="isAdmin" width="130px">
                                        <div>
                                            <v-select :items="cardsText" density="compact" label="בחר"
                                                v-model="selectedTexts[item.id]"
                                                @update:modelValue="selectedItem => onItemSelect(item.id, selectedItem)" />
                                        </div>
                                    </td>
                                </tr>
                            </template>
                            <template v-if="tab === 3">
                                <tr v-for="(item, index) in localCards" :key="index">
                                    <td v-if="isAdmin" @click="iconClick(index)">
                                        <font-awesome-icon class="deleteIcon" :icon="['fas', 'trash']" />
                                    </td>
                                    <td v-for="day in 5" :key="day"></td>
                                    <td>
                                        <v-card class="card d-flex flex-row" width="300px">
                                            <v-img class="card-img" :src="item.src" height="100px" width="50%"
                                                cover></v-img>
                                            <v-card-text class="pa-3 text">{{ item.text }}</v-card-text>
                                        </v-card>
                                    </td>
                                    <td v-if="isAdmin" width="130px">
                                        <div>
                                            <v-select :items="cardsText" density="compact" label="בחר"
                                                v-model="selectedTexts[item.id]"
                                                @update:modelValue="selectedItem => onItemSelect(item.id, selectedItem)" />
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </v-col>
        </v-row>
    </div>
</template>
<script setup>
import { useStore } from '@/store/index'
import { computed, ref } from 'vue';

const store = useStore();
const tab = ref(1);
const selectedTexts = ref({});
const editableTexts = ref([]);
const localCards = ref(store.cards.map(card => ({ ...card })));
const cardsText = computed(() => store.cardsText);

defineProps({
    backToDailyMenu: String,
    title: String,
    days: Array,
    cards: Array,
    isAdmin: Boolean,
    addRow: String,
    save: String,
    copyMenuForNextWeek: String,
    copyMenuForCurrWeek: String,
    regular: String,
    health: String,
    dairy: String
});

const newRow = ref({
    foodType: '',
    dayName: '',
    dayText: ''
});

const initializeEditableTexts = (texts) => {
  editableTexts.value = [...texts];
};

const newRows = ref([]);
const updateText = (index, newValue) => {
  editableTexts.value[index] = newValue;
};
store.cards.forEach(card => {
    selectedTexts[card.id] = card.foodType;
});

// Extract unique day names from all cards
const uniqueDayNames = computed(() => {
    const dayNames = [];
    store.cards.forEach(card => {
        card.days.forEach(day => {
            if (!dayNames.includes(day.name)) {
                dayNames.push(day.name);
            }
        });
    });
    return dayNames;
});

// Function to get the text for a specific day in a card
const getDayText = (days, dayName) => {
    const matchingDays = days.filter(day => day.name === dayName);
    return matchingDays.map(day => day.text);
};

const onItemSelect = (cardId, selectedText) => {
    const cardIndex = localCards.value.findIndex(card => card.id === cardId);
    if (cardIndex !== -1) {
        const selectedCard = store.cards.find(card => card.foodType === selectedText);
        if (selectedCard) {
            localCards.value[cardIndex].src = selectedCard.src;
            localCards.value[cardIndex].foodType = selectedCard.foodType;
        }
    }
}

const iconClick = (index) => {
    localCards.value.splice(index, 1)
}

const addNewRow = () => {
    newRows.value.push({ ...newRow.value });
    newRow.value = { foodType: '', dayName: '', dayText: '' };
}

// Save new rows to localCards and clear newRows
const saveNewRows = () => {
    newRows.value.forEach(newRow => {
        // Find the card with the same foodType or create a new one
        let existingCard = localCards.value.find(card => card.foodType === newRow.foodType);
        if (!existingCard) {
            existingCard = {
                id: localCards.value.length + 1, // Generate a new id
                foodType: newRow.foodType,
                src: '', // Set a default or empty src
                days: []
            };
            localCards.value.push(existingCard);
        }

        // Add the new day information to the card
        existingCard.days.push({
            name: newRow.dayName,
            text: newRow.dayText
        });
    });

    // Clear the new rows
    newRows.value = [];
}

</script>

<style>
.deleteIcon {
    cursor: pointer;
}

.backtodaily {
    position: relative;

}

.left_icon {
    position: absolute;
    z-index: 1;
    left: 0.8rem;
    top: 0.7rem;
    color: white;
}

.adminBtns {
    display: flex;
    flex-direction: row;
    gap: 25px;
}

.ul__foodType {
    list-style-position: inside;
    /* Markers inside the list item */
    direction: rtl;
    /* Set text direction to right-to-left */
    text-align: right;
}

.ul__foodType li {
    font-weight: 300;
}
</style>