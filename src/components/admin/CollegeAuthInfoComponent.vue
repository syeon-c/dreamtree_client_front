<template>

  이미지: {{college.authUrl}} <br>
  대학: {{college.college}} <br>
  전공: {{college.major}} <br>
  인증파일: {{college.url}} <br>

  <v-btn @click="() => clickAccept(id, 'yes')">수락</v-btn>
  <v-btn @click="() => clickAccept(id, 'no')">거절</v-btn>

</template>

<script setup>

import {onMounted, ref} from "vue";
import {getCollegeAuthInfo, modifyCollegeAuthState} from "@/apis/adminAPIS";

const props = defineProps(['id'])

const emits = defineEmits(['moveAuthManagement'])

const college = ref({})

const clickAccept = async (id, authState) => {

  await modifyCollegeAuthState(id, authState)

  emits('moveAuthManagement')
}

const fetchGetInfo = async () => {

  console.log(props.id)

  college.value = await getCollegeAuthInfo(props.id);

  console.log("College: ", college.value)

}

onMounted(() => {
  fetchGetInfo()
})

</script>

<style scoped>

</style>
