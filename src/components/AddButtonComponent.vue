<template>
  <v-btn
    color="primary"
    size="large"
    icon="fa-solid fa-plus"
    @click="emits('onClickMoveProgramAddPage')"
  >
  </v-btn>
</template>

<script setup>
const emits = defineEmits(['onClickMoveProgramAddPage'])


</script>

<style scoped>

</style>
