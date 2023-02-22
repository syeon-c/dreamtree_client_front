<template>
  <v-btn
    type="submit"
    color="success"
    class="me-2"
    @click="emits('onClickSave')"
  >
    저장
  </v-btn>
  <v-btn
    color="success"
    class="me-4"
    @click="emits('onClickCancel')"
  >
    취소
  </v-btn>
</template>

<script setup>
const emits = defineEmits(['onClickSave', 'onClickCancel'])
</script>

<style scoped>

</style>
