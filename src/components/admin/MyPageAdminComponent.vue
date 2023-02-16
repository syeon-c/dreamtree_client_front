<template>
  <h2>MyPage</h2>
  <v-list
    density="compact"
    nav
  >
    <v-list-item v-for="page in pages" :key="page.title"
      prepend-icon="fa-solid fa-caret-right" @click="() => emits('movePage', page.value)"
    >{{page.title}}</v-list-item>

  </v-list>
</template>

<script setup>

const emits = defineEmits(['movePage'])

const pages = [
  {title: '프로그램 관리', value: ''},
  {title: '레슨 관리', value: ''},
  {title: '회원 관리', value: 'MemberManagementPage'},
  {title: '카테고리 관리', value: ''},
  {title: '신고 관리', value: ''},
]

</script>

<style scoped>

</style>
