<template>
  <DefaultLayout>

    <LoginPathComponent @sendLoginPathValue="sendLoginPathValue" />

  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import {useRouter} from "vue-router";
import LoginPathComponent from "@/components/LoginPathComponent.vue";

const router = useRouter()

/** KakaoLoginPage로 로그인 경로(회원/부모님) 전송 **/
const sendLoginPathValue = (value) => {

  router.push({ name: 'KakaoLoginPage', query: {path: value} })

}

</script>

<style scoped>

</style>
