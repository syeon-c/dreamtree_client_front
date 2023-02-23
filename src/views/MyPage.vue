<template>
  <DefaultLayout>

    <StudentMyPageComponent
      v-if="role === 'student'"
      @onClickMoveInfo="movePage('StudentInfoPage', id)"
      @onClickMoveProgramListPage="movePage('MyProgramListPage', id)"
      @onClickMoveLessonListPage="movePage('MyLessonListPage', id)"
      @onClickMoveAttendancePage="movePage('MyAttendancePage', id)"
    />

    <ParentMyPageComponent
      v-if="role === 'parent'"
      @onClickMoveProgressList="movePage('ProgressListPage', id)"
      @onClickMoveAttendanceList="movePage('MyAttendancePage', id)"
      @onClickMoveInfo="movePage('ParentInfoPage', id)"
    />

  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { useRouter } from "vue-router";
import ParentMyPageComponent from "@/components/parents/ParentMyPageComponent.vue";
import StudentMyPageComponent from "@/components/student/StudentMyPageComponent.vue";
import useMemberInfo from "@/store/useMemberInfo";
import {ref} from "vue";

const router = useRouter()
const memberInfo = ref(useMemberInfo().getMemberInfo())
const role = memberInfo.value.role
const id = memberInfo.value.id

/** 페이지 이동 **/
const movePage = (page, value) => {

  router.push({name: page, params: {id: value} })

}

</script>

<style scoped>

</style>
