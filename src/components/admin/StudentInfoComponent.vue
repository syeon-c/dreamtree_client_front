<template>

  이미지: {{student.profileImgUrl}} <br>
  인증상태: {{student.authState}} <br>
  이메일: {{student.email}} <br>
  닉네임: {{student.nickname}} <br>
  생년월일: {{student.birth}} <br>
  성별: {{student.gender}} <br>
  대학: {{student.college}} <br>
  전공: {{student.major}} <br>
  자격증: <br>
  <br>
  <v-table>
    <thead>
      <tr>
        <th>자격증명</th>
        <th>취득일자</th>
        <th>인증상태</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="certificate in student.certificateList">
        <td>{{certificate.name}}</td>
        <td>{{certificate.aquireDate}}</td>
        <td>{{certificate.authState}}</td>
      </tr>
    </tbody>
  </v-table>

  <v-btn @click="() => emits('moveModify')">수정</v-btn>
  <v-btn @click="clickRemoveStudent">삭제</v-btn>
</template>

<script setup>

import {onMounted, ref} from "vue";
import {getStudentInfo, removeStudent} from "@/apis/adminAPIS";

const props = defineProps(['id'])

const emits = defineEmits(['moveModify', 'moveMemberManagement'])

const student = ref({})

const clickRemoveStudent = async () => {

  await removeStudent(props.id)

  emits('moveMemberManagement')
}

const fetchGetInfo = async () => {

  student.value = await getStudentInfo(props.id);

  console.log("Student: ", student.value)

}

onMounted(() => {
  fetchGetInfo()
})

</script>

<style scoped>

</style>
