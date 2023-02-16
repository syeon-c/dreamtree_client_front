<template>

  <DefaultLayout>

    <InfoModifyComponent @moveInfoPage="moveInfoPage"/>

  </DefaultLayout>

</template>

<script setup>

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import InfoModifyComponent from "@/components/InfoModifyComponent.vue";
import {useRouter} from "vue-router";

const router = useRouter()

const moveInfoPage = (id) => {

  router.push( { name: 'ParentInfoPage', params: {id: id} })

}

</script>

<style scoped>

</style>
