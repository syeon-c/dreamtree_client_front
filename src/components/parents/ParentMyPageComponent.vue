<template>
  <v-list lines="two">

    <v-list-subheader>Parent MyPage</v-list-subheader>

    <v-list-item
      prepend-icon="fa-solid fa-caret-right"
      title="수강 프로그램 조회"
      @click="() => emits(`onClickMoveProgressList`, id)"
    ></v-list-item>

    <v-divider/>

    <v-list-item
      prepend-icon="fa-solid fa-caret-right"
      title="출석 현황 조회"
    ></v-list-item>

    <v-divider/>

    <v-list-item
      prepend-icon="fa-solid fa-caret-right"
      title="회원정보 관리"
      @click="() => emits(`onClickMoveInfo`, id)"
    ></v-list-item>

  </v-list>
</template>

<script setup>

const emits = defineEmits(['onClickMoveInfo', 'onClickMoveProgressList'])
const id = 13

</script>

<style scoped>

</style>
