<template>

  <default-layout>
    <CertificateManagementComponent
      @addSuccess="addSuccess"
     :key="componentKey"
    />
  </default-layout>

</template>

<script setup>

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import CertificateManagementComponent from "@/components/student/CertificateManagementComponent.vue";
import {ref} from "vue";

const componentKey = ref(0)

const addSuccess = () => {

  alert("요청완료")

  componentKey.value++
}

</script>

<style scoped>

</style>
