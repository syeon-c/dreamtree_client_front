<template>

  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="modifyStudentInfo.profileImgUrl"
        label="이미지"
      ></v-text-field>

      <v-btn>비밀번호 변경</v-btn>

      <v-text-field
        v-model="modifyStudentInfo.nickname"
        label="닉네임"
      ></v-text-field>

      <v-text-field
        v-model="modifyStudentInfo.birth"
        label="생년월일"
      ></v-text-field>

      <v-text-field
        v-model="modifyStudentInfo.gender"
        label="성별"
      ></v-text-field>

      <v-btn @click="clickModifyStudent">저장</v-btn>
      <v-btn @click="() => emits('moveInfo')">취소</v-btn>
    </v-form>
  </v-sheet>

</template>

<script setup>

import {onMounted, ref} from "vue";
import {getStudentInfo, modifyStudent} from "@/apis/adminAPIS";

const props = defineProps(['id'])

const emits = defineEmits(['moveInfo'])

const student = ref({})

const modifyStudentInfo = ref({})

const clickModifyStudent = async () => {

  await modifyStudent(modifyStudentInfo.value)

  emits('moveInfo')
}


const fetchGetInfo = async () => {

  console.log(props.id)

  student.value = await getStudentInfo(props.id);

  modifyStudentInfo.value = {
    studentId: props.id,
    profileImgUrl: student.value.profileImgUrl,
    nickname: student.value.nickname,
    password: student.value.password,
    birth: student.value.birth,
    gender: student.value.gender
  }
}

onMounted(() => {
  fetchGetInfo()
})

</script>

<style scoped>

</style>
