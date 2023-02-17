<template>

  <v-list lines="two">

    <v-list-subheader>Parent Info</v-list-subheader>

    <!--회원 프로필 이미지 & 닉네임-->
    <v-list-item>
      <div class="d-flex flex-no-wrap justify-center" >
        <v-avatar
          style="margin-left: 20px"
          class="ma-1"
          size="250"
          rounded="10"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
          ></v-img>
        </v-avatar>

        <v-card-title
        >
          {{ info.nickname }}
        </v-card-title>

        <v-btn
          flat
          color="grey"
          size="small"
          icon="fa-solid fa-pen"
          @click="() => emits(`onClickMoveInfoModifyPage`, id)"
        ></v-btn>
      </div>
    </v-list-item>

    <v-divider/>

    <!--회원 이메일-->
    <v-list-item>
      <div
        class="d-flex flex-no-wrap justify-md-space-between"
        style="margin-right: 50px"
      >
        <v-card-subtitle>EMAIL</v-card-subtitle>
        <v-text>{{ info.email }}</v-text>
      </div>
    </v-list-item>

    <v-divider/>

    <!--회원 생년월일-->
    <v-list-item>
      <div
        class="d-flex flex-no-wrap justify-md-space-between"
        style="margin-right: 50px"
      >
        <v-card-subtitle>BIRTH</v-card-subtitle>
        <v-text>{{ info.birth }}</v-text>
      </div>
    </v-list-item>

  </v-list>

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
