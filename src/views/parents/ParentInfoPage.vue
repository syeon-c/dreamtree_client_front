<template>
  <DefaultLayout>

    <ParentInfoComponent
      :id="id"
      @onClickMoveInfoModifyPage="moveInfoModifyPage"
    />

  </DefaultLayout>
</template>

<script setup>

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import ParentInfoComponent from "@/components/parents/ParentInfoComponent.vue";
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import useMemberInfo from "@/store/useMemberInfo";

const route = useRoute()
const router = useRouter()

const memberInfo = ref(useMemberInfo().getMemberInfo())
const id = memberInfo.value.id

const moveInfoModifyPage = () => {

  router.push({ name: 'InfoModifyPage' , params: {id: id} })

}

</script>

<style scoped>

</style>
