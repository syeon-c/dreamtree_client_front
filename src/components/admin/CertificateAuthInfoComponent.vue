<template>
  자격증명: {{certificate.name}} <br>
  취득일자: {{certificate.aquireDate}} <br>
  인증파일: {{certificate.url}} <br>

  <v-btn @click="() => clickAccept(id, 'yes')">수락</v-btn>
  <v-btn @click="() => clickAccept(id, 'no')">거절</v-btn>

</template>

<script setup>

import {onMounted, ref} from "vue";
import {getCertificateAuthInfo, modifyCertificateAuthState} from "@/apis/adminAPIS";

const props = defineProps(['id'])

const emits = defineEmits(['moveAuthManagement'])

const certificate = ref({})

const clickAccept = async (id, authState) => {

  await modifyCertificateAuthState(id, authState)

  emits('moveAuthManagement')
}

const fetchGetInfo = async () => {

  console.log(props.id)

  certificate.value = await getCertificateAuthInfo(props.id);

  console.log("Certificate: ", certificate.value)

}

onMounted(() => {
  fetchGetInfo()
})

</script>

<style scoped>

</style>
