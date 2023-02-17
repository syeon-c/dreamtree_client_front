<template>
  <DefaultLayout>

    <RequestFormComponent
      @moveListPage="moveListPage"
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
</script>

<style scoped>

</style>
