<template>
    <div class="ma-0" style="min-width: 80%; display: flex;">
      <!--  input  -->
      <v-text-field
        v-model="curriculumForm"
        label="Search"
        single-line
        hide-detail
      ></v-text-field>
      <!--  추가버튼  -->
      <v-btn
        icon="fa-solid fa-plus"
        @click="onClickInsideAddButton"
        :disabled="readMode"
      >
      </v-btn>
    </div>


</template>

<script setup>

import {ref} from "vue";

const emits = defineEmits(['onClickInsideAddButton'])
const props = defineProps(['readMode'])
const curriculumForm = ref()
const readMode = ref(props.readMode)

const onClickInsideAddButton = () => {
  emits('onClickInsideAddButton', curriculumForm.value)
  curriculumForm.value = null
}

</script>

<style scoped>

</style>
