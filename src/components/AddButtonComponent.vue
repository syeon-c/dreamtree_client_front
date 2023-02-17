<template>

  <v-btn-group class="button_group horizontal" >
    <v-btn
      size="large"
      icon="fa-solid fa-plus"
      @click="emits('onClickMoveProgramAddPage')"
    ></v-btn>
    <v-btn
      style="margin-left: 8px; margin-right: 8px"
      class="cube1"
      size="large"
      icon="fa-solid fa-plus"
    ></v-btn>
    <v-btn
      class="cube2"
      size="large"
      icon="fa-solid fa-plus"

    ></v-btn>

  </v-btn-group>

</template>

<script setup>
const emits = defineEmits(['onClickMoveProgramAddPage'])


</script>

<style scoped>

.button_group {
  display: flex;
  margin-top: 10px;
  background: transparent;
  justify-content:right;
}

.horizontal {
  background: #fff;
  border-radius: 4px;
  position: absolute;
  bottom: 1%;
  left: 90%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.cube1 {
  width: 60px;
  height: 60px;
  background: rgba(222, 199, 199, 0.77);
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
}

.cube2 {
  width: 60px;
  height: 60px;
  background: rgba(52, 25, 25, 0.77);
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
}

</style>
