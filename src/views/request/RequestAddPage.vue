<template>
  <DefaultLayout>

    <RequestAddComponent
      @moveListPage="moveListPage"
    />

  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import RequestAddComponent from "@/components/request/RequestAddComponent.vue";
import {useRouter} from "vue-router";

const router = useRouter()
const moveListPage = () => {

  router.push({ name: 'RequestListPage' })

}
</script>

<style scoped>

</style>
