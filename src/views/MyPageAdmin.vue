<template>

  <DefaultLayout>
    <MyPageAdminComponent @movePage="movePage" />
  </DefaultLayout>

</template>

<script setup>

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import MyPageAdminComponent from "@/components/MyPageAdminComponent.vue";
import {useRouter} from "vue-router";

const router = useRouter()

const movePage = (page) => {

  router.push({name: page})
}

</script>

<style scoped>

</style>
