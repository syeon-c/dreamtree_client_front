<template>

  <v-list-subheader style="margin-left: 20px">{{ memberInfo.nickname }} 님이 등록한 프로그램 목록</v-list-subheader>
  <v-expansion-panels

  >
    <v-expansion-panel
      v-for="program in programs"
      :key="program"
    >
      <v-expansion-panel-title>
        <v-row justify="space-around">
          <v-col>
            프로그램: {{program.title}}
          </v-col>
        </v-row>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        제목: {{program.title}} <br>
        내용: {{program.content}} <br>
        커리큘럼 <br>
        <v-row
          v-for="(dayCurriculum, index) in JSON.parse(program.curriculumJson)"
          :key="index"
        >
          <v-col>
            <ProgramCurriculumDayComponent
              :key="index"
              :dayCurriculum="dayCurriculum"
              :readMode="true"
              :times="index"
            ></ProgramCurriculumDayComponent>
          </v-col>
        </v-row>
        총 회차: {{program.times}} <br>
        <ul style="list-style: none">
          <li v-for="file in program.fileList" :key="file.fileId">
            첨부파일(이미지url): {{file.url}}
          </li>
        </ul>
        <v-btn>레슨 조회</v-btn>
      </v-expansion-panel-text>
      <v-divider></v-divider>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>

import {myProgramList} from "@/apis/StudentAPIS";
import {onMounted, ref} from "vue";
import ProgramCurriculumDayComponent from "@/components/program/ProgramCurriculumDayComponent.vue";
import useMemberInfo from "@/store/useMemberInfo";

const programs = ref([])
const memberInfo = useMemberInfo().getMemberInfo()
const id = memberInfo.id


const fetchGetList = async () => {

  programs.value = await myProgramList(id)

  console.log(programs.value)

}
onMounted(() => {
  fetchGetList()
})


</script>

<style scoped>

</style>
