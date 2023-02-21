<template>

  <StudentInfoComponent
    @moveModify="moveModify"
    @moveMemberManagement="moveMemberManagement"
    :id="studentId"
  />

</template>

<script setup>

import {useRoute, useRouter} from "vue-router";
import StudentInfoComponent from "@/components/admin/AdminStudentInfoComponent.vue";

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
