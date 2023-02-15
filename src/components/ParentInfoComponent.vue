<template>
  <v-list lines="two">

    <v-list-subheader>Parent Info</v-list-subheader>

    <!--회원 프로필 이미지 & 닉네임-->
    <v-list-item>
      <div style="display: flex">
        <v-img
          src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
          style="align-self: flex-start"
        ></v-img>

        <v-text>{{ info.nickname }}</v-text>

        <v-btn
          flat
          icon="fa-solid fa-pen"
        ></v-btn>
      </div>
    </v-list-item>

    <v-divider/>

    <!--회원 이메일-->
    <v-list-item
      style="display: flex"
      title="EMAIL"
    >
      <v-text>{{ info.email }}</v-text>

    </v-list-item>

    <v-divider/>

    <!--회원 생년월일-->
    <v-list-item
      style="display: flex"
      title="BIRTH"
    >
      <v-text>{{ info.birth }}</v-text>
    </v-list-item>

  </v-list>
</template>

<script setup>

import {onMounted, ref} from "vue";
import {getParentInfo} from "@/apis/ParentAPIS";

const props = defineProps(['id'])

const info = ref({email: null, nickname: null, birth: null, profileImgUrl: null})
const getInfo = async () => {

  const res = await getParentInfo(props.id)
  info.value = res

}

onMounted(() => {
  getInfo()
})


</script>

<style scoped>

</style>
