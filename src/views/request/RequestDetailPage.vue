<template>
  <DefaultLayout>

    <RequestDetailComponent
      :id="id"
      @moveModifyPage="moveModifyPage"
    />

  </DefaultLayout>

</template>

<script setup>

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import RequestDetailComponent from "@/components/request/RequestDetailComponent.vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
const id = route.params.id

const moveModifyPage = (id) => {

  router.push({ name: 'RequestModifyPage', params: {id: id}})

}

</script>

<style scoped>

</style>
