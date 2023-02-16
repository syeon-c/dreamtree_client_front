<template>

  <default-layout>
    <StudentInfoComponent
      @moveModify="moveModify"
      @moveMemberManagement="moveMemberManagement"
      :id="studentId"
    />
  </default-layout>

</template>

<script setup>

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import StudentInfoComponent from "@/components/admin/StudentInfoComponent.vue";
import {useRoute, useRouter} from "vue-router";

const router = useRouter()

const route = useRoute()

const studentId = route.query.id

const moveModify = () => {

  const id = studentId

  router.push({name: 'StudentModifyPage', query: {id}})
}

const moveMemberManagement = () => {

  router.push({name: 'MemberManagementPage'})
}

</script>

<style scoped>

</style>
