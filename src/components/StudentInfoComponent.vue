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

</template>

<script setup>

import {getStudentInfo} from "@/apis/api";
import {onMounted, ref} from "vue";

const props = defineProps(['id'])

const student = ref()

const fetchGetInfo = async () => {

  student.value = await getStudentInfo(props.id);

}

onMounted(() => {
  fetchGetInfo()
})

</script>

<style scoped>

</style>
