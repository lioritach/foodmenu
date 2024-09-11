<template>
    <div class="pa-4 text-center">
      <v-dialog v-model="internalDialog" max-width="600">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            class="text-none font-weight-regular"
            prepend-icon="mdi-account"
            text="Add Row"
            variant="tonal"
            v-bind="activatorProps"
          ></v-btn>
        </template>
  
        <v-card title="Add New Row">
          <v-card-text>
            <v-row dense>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="newRowData.text"
                  label="Text*"
                  required
                ></v-text-field>
              </v-col>
  
              <v-col cols="12" sm="6">
                <v-select
                  v-model="newRowData.foodType"
                  :items="cardsText"
                  label="Food Type*"
                  required
                ></v-select>
              </v-col>
  
              <v-col cols="12" sm="6">
                <v-select
                  v-model="newRowData.day"
                  :items="dayNames"
                  label="Day*"
                  required
                ></v-select>
              </v-col>
            </v-row>
  
            <small class="text-caption text-medium-emphasis">*indicates required field</small>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="Close" variant="plain" @click="internalDialog = false"></v-btn>
            <v-btn color="primary" text="Save" variant="tonal" @click="saveNewRow"></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    dialog: Boolean,
  });
  
  const emit = defineEmits(['saveNewRow']);
  
  const internalDialog = ref(props.dialog);
  const newRowData = ref({
    text: '',
    foodType: '',
    day: ''
  });
  
  // Sample data, should be dynamically provided
  const cardsText = ['בשר', 'דג'];
  const dayNames = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי'];
  
  watch(
    () => props.dialog,
    (newVal) => {
      internalDialog.value = newVal;
    }
  );
  
  const saveNewRow = () => {
    emit('saveNewRow', newRowData.value);
    internalDialog.value = false;
  };
  </script>
  