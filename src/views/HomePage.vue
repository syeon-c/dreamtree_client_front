<template>
<DefaultLayout>
  <vue-word-cloud
    style="
    height: 480px;
    width: 640px;
  "
    :words="[['romance', 19], ['horror', 3], ['fantasy', 7], ['adventure', 3]]"
    :color="([, weight]) => weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'"
    font-family="Roboto"
  />
</DefaultLayout>
</template>

<script setup>

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import {useRouter} from "vue-router";
const router = useRouter()


</script>

<style scoped>

</style>
