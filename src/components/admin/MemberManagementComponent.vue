<template>

  <v-list lines="one">
    <v-list-item
      v-for="student in students"
      :key="student.email"
    >
      <div>
      {{student.nickname}} <br>
      {{student.email}}
        <span style="margin: 30px">{{student.authState}}</span>
        <span style="float: right" @click="() => emits('moveStudentInfo', student.studentId)">상세</span>
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
import {getStudentLists} from "@/apis/adminAPIS";

const props = defineProps(['searchKeyword', 'pSize', 'pNum'])

const emits = defineEmits(['movePageNum', 'moveStudentInfo'])

const pageNum = ref(1)

const totalPageSize = ref()

const students = ref([])

const fetchGetList = async () => {

  pageNum.value = parseInt(props.pNum)

  const data = await getStudentLists(props.searchKeyword, pageNum.value, props.pSize);

  console.log(data)

  students.value = data.dtoList

  totalPageSize.value = data.end
}

onMounted(() => {
  fetchGetList()
})
</script>

<style scoped>

</style>
