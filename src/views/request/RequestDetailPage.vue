<template>
  <DefaultLayout>

    <RequestDetailComponent
      :id="id"
    />

    <ModifyButtonComponent />
  </DefaultLayout>

</template>

<script setup>

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import RequestDetailComponent from "@/components/request/RequestDetailComponent.vue";
import {useRoute} from "vue-router";
import ModifyButtonComponent from "@/components/common/ModifyButtonComponent.vue";

const route = useRoute()
const id = route.params.id

</script>

<style scoped>

</style>
