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
      >
      </v-btn>
    </div>


</template>

<script setup>

import {ref} from "vue";

const emits = defineEmits(['onClickInsideAddButton'])
const curriculumForm = ref()

const onClickInsideAddButton = () => {
  emits('onClickInsideAddButton', curriculumForm.value)
}

</script>

<style scoped>

</style>
