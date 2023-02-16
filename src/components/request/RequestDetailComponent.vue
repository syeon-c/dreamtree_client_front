<template>
  <div style="margin-left: 30px; margin-right: 30px">
    <v-card-text>{{ info.subCategoryName ? info.subCategoryName : "etc" }}</v-card-text>
    <p class="text-h4 text--primary">
      {{ info.title }}
    </p>
    <br/>
    <p> {{ info.description }}</p>
    <br/>
    <div clas="text--primary">

      {{ info.content }}

    </div>

    <br/>
    <v-divider />
    <div class="d-flex flex-nowrap justify-center">
      <div style="margin-right: 100px">
        <v-card-text>자녀의 학년</v-card-text>
        <v-alert flat variant="outlined"> {{ info.studentGrade }}</v-alert>
      </div>

      <div style="margin-left: 100px">
        <v-card-text>자녀의 성별</v-card-text>
        <v-alert flat variant="outlined"> {{ info.studentGender }}</v-alert>
      </div>

    </div>
  </div>

</template>

<script setup>

import {onMounted, ref} from "vue";
import {getRequestDetail} from "@/apis/RequestAPIS";

const props = defineProps(['id'])
const info = ref({})

const fetchGetRequestInfo = async () => {

  const res = await getRequestDetail(props.id)

  console.log(res)

  info.value = res

}
onMounted(() => {
  fetchGetRequestInfo()
})

</script>

<style scoped>

</style>
