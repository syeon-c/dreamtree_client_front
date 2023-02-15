<template>

  <default-layout>
    <StudentInfoComponent
      :id="studentId"
    />
  </default-layout>

</template>

<script setup>

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import StudentInfoComponent from "@/components/StudentInfoComponent.vue";
import {useRoute} from "vue-router";

const route = useRoute()

const studentId = route.query.id

</script>

<style scoped>

</style>
