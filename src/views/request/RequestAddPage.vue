<template>
  <DefaultLayout>

    <RequestFormComponent
      @moveListPage="moveListPage"
      @moveDetailPage="moveDetailPage"
    />

  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import {useRouter} from "vue-router";
import RequestFormComponent from "@/components/request/RequestFormComponent.vue";

const router = useRouter()
const moveListPage = () => {

  router.push({ name: 'RequestListPage' })

}

const moveDetailPage = (id) => {

  router.push({ name: 'RequestDetailPage', params: {id: id}})

}
</script>

<style scoped>

</style>
