<template>
  <DefaultLayout>

    <ParentInfoComponent :id="id"/>

  </DefaultLayout>
</template>

<script setup>

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import ParentInfoComponent from "@/components/ParentInfoComponent.vue";
import {useRoute} from "vue-router";

const route = useRoute()
const id = route.params.id

</script>

<style scoped>

</style>
