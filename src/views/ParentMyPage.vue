<template>
    <DefaultLayout>

      <ParentMyPageComponent
        @onClickMoveInfo="moveParentInfoPage"
      />

    </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import ParentMyPageComponent from "@/components/ParentMyPageComponent.vue";

import {useRouter} from "vue-router";

const router = useRouter()

const moveParentInfoPage = (id) => {

  console.log("Move to Parent MyPage...")

  router.push( { name: 'ParentInfoPage', params: {id: id} })

}

</script>

<style scoped>

</style>
