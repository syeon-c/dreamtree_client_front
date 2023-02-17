<template>

  <v-list lines="one">
    <v-list-item
      v-for="certificate in certificates"
      :key="certificate.certificateId"
    >
      <div>
        자격증명: {{certificate.name}}   인증상태: {{certificate.authState}}
      </div>
    </v-list-item>
  </v-list>

  <v-btn @click="add = !add">신청</v-btn>

  <div v-if="add == true">
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent>
        <v-text-field
          v-model="addCertificateInfo.name"
          label="수상/취득 내용"
        ></v-text-field>

        <v-text-field
          v-model="addCertificateInfo.aquireDate"
          label="수상/취득 년월"
        ></v-text-field>

        <v-text-field
          v-model="addCertificateInfo.url"
          label="첨부파일"
        ></v-text-field>

        <v-btn @click="addClickCertificate">추가</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<script setup>

import {addCertificate, getCertificateList} from "@/apis/adminAPIS";
import {onMounted, ref} from "vue";

const emits = defineEmits(['addSuccess'])

const certificates = ref([])

const addCertificateInfo = ref({})

const add = ref(false)

const addClickCertificate = async () => {

  const certificate = {
    studentId: 104,
    name: addCertificateInfo.value.name,
    aquireData: addCertificateInfo.value.aquireDate,
    url: addCertificateInfo.value.url
  }

  await addCertificate(certificate)

  emits('addSuccess')
  add.value = !add.value
}

const fetchGetList = async () => {

  certificates.value = await getCertificateList(104)

}

onMounted(() => {
  fetchGetList()
})

</script>

<style scoped>

</style>
