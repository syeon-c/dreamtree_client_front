<template>

  <v-list-subheader style="margin-left: 20px">
    {{ memberInfo.nickname}} 님이 진행 중인 레슨 목록
  </v-list-subheader>

  <v-expansion-panels>
    <v-expansion-panel
      v-for="program in lessons"
      :key="program.programId"
    >
      <v-expansion-panel-title>
        <v-row justify="space-around">
          <v-col>
            프로그램: {{ program.title }}
          </v-col>
        </v-row>
      </v-expansion-panel-title>
      <v-expansion-panel-text>

        <v-expansion-panels>
          <v-expansion-panel
            v-for="lesson in program.lessonProgressDTO"
            :key="lesson.lessonId"
          >
            <v-expansion-panel-title>
              <v-row justify="space-around">
                <v-col>
                  {{ lesson.startDate }} ~ {{ lesson.endDate }} 장소: {{ lesson.place }}
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              레슨 기간 : {{ lesson.startDate }} ~ {{ lesson.endDate }} <br>
              장소: {{ lesson.place }} <br>
              모집 기간: {{ lesson.expireStartDate }} ~ {{ lesson.expireEndDate }} <br>
              모집 인원: {{ lesson.personnel }}명 <br>
              주 {{ lesson.day }} 회 {{ lesson.lessonLength }}시간<br>
              총 {{ lesson.lessonTime }}시간 <br>
              금액: {{ lesson.fee.toLocaleString() }}원 <br>
              <hr>
              수강생 정보 <br>
              <div>
                <ul style="list-style: none">
                  <li v-for="progress in lesson.progressList" :key="progress.progressId">
                    상태: {{ progress.state }}
                    수강생 이름: {{ progress.childName }}
                  </li>
                </ul>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-expansion-panel-text>
      <v-divider></v-divider>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>

import {onMounted, ref} from "vue";
import {myLessonList, myProgramList} from "@/apis/StudentAPIS";
import useMemberInfo from "@/store/useMemberInfo";

const memberInfo = useMemberInfo().getMemberInfo()
// const id = memberInfo.id
const id = 1
const lessons = ref([])

const fetchGetList = async () => {

  lessons.value = await myLessonList(id)
  console.log(lessons.value)

}

onMounted(() => {
  fetchGetList()
})

</script>

<style scoped>

</style>
