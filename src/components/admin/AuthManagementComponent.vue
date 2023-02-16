<template>
  <h3>대학 인증 요청</h3>
  <v-list lines="one">
    <v-list-item
      v-for="auth in collegeAuthRequests"
      :key="auth.email"
    >
      <div>
        {{auth.nickname}} <br>
        {{auth.email}}
        <span style="margin: 30px">{{auth.authRequest}}</span>
        <span style="float: right" @click="() => emits('moveCollegeAuthInfo', auth.id)">상세</span>
      </div>
    </v-list-item>
  </v-list>
<hr>
  <h3>자격/수상 인증 요청</h3>
  <v-list lines="one">
    <v-list-item
      v-for="certificate in certificateAuthRequests"
      :key="certificate.email"
    >
      <div>
        {{certificate.nickname}} <br>
        {{certificate.email}}
        <span style="margin: 30px">{{certificate.authRequest}}</span>
        <span style="float: right" @click="() => emits('moveCertificateAuthInfo', certificate.id)">상세</span>
      </div>
    </v-list-item>
  </v-list>

  <div>
    <v-pagination
      v-model="pageNum"
      :length="totalPageSize"
      rounded="circle"
      @click="() => emits('movePageNum', pageNum)"
    ></v-pagination>
  </div>

</template>

<script setup>

import {onMounted, ref} from "vue";
import {getStudentCertificateAuthLists, getStudentCollegeAuthLists} from "@/apis/adminAPIS";

const props = defineProps(['searchKeyword', 'pSize', 'pNum'])

const emits = defineEmits(['movePageNum', 'moveCollegeAuthInfo', 'moveCertificateAuthInfo'])

const pageNum = ref(1)

const totalPageSize = ref()

const collegeAuthRequests = ref([])

const certificateAuthRequests = ref([])

const fetchGetList = async () => {

  pageNum.value = parseInt(props.pNum)

  const collegeData = await getStudentCollegeAuthLists(props.searchKeyword, pageNum.value, props.pSize)

  const certificateData = await getStudentCertificateAuthLists(props.searchKeyword, pageNum.value, props.pSize)

  collegeAuthRequests.value = collegeData.dtoList

  certificateAuthRequests.value = certificateData.dtoList

  totalPageSize.value = collegeData.end
}

onMounted(() => {
  fetchGetList()
})
</script>

<style scoped>

</style>
