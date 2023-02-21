<template>
  <DefaultLayout>
    <v-container>
      <!--대학생 정보-->
      <LessonStudentInfoComponent
        :programDetailInfo="programDetailInfo"
      ></LessonStudentInfoComponent>

      <!--레슨정보 없을시 디폴트-->
      <v-row
        v-if="!programDetailInfo.lessonLists || programDetailInfo.lessonLists.length == 0"
      >
        <v-col>
          <v-card
            color='grey-lighten-1'
            class="ma-4 justify-center align-center"
            height="200"
            width="200"
          >
            <div>
              현재 등록된 레슨이 없습니다
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!--레슨 정보-->
      <LessonInfoComponent
        :programDetailInfo="programDetailInfo"
        @onClickLesson="onClickLesson"
      ></LessonInfoComponent>


      <!--레슨 상세 정보 모달-->
      <div class="text-center">
        <v-dialog
          v-model="lessonDialog"
        >
          <LessonDetailComponent
            v-if="lessonIndex != undefined"
            @offDialog="lessonDialog = false"
            :programTitle="programDetailInfo.title"
            :lessonInfo="programDetailInfo.lessonLists[lessonIndex]"
            :key="lessonDetailComponentKey"
          />
        </v-dialog>
      </div>

      <!--프로그램 정보-->
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>
              {{programDetailInfo.title}}
            </v-card-title>

            <v-card-item>
              커리큘럼
              <v-row
                v-for="(dayCurriculum, index) in programDetailInfo.curriculumJson"
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
            </v-card-item>

            <v-card-text>
              {{ programDetailInfo.content }}
            </v-card-text>

            <v-card-item>
              <v-row>
                <v-col
                  v-for="url in programDetailInfo.fileUrls"
                  :key="url"
                >
                  <v-img
                    :src="`${consts.IMG_DOMAIN}/${url}`"
                    width="200"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import {onMounted, ref} from "vue";
import ProgramCurriculumDayComponent from "@/components/program/ProgramCurriculumDayComponent.vue";
import {getProgramDetailInfo} from "@/apis/api";
import {useRoute} from "vue-router";
import consts from "@/consts/const";
import LessonStudentInfoComponent from "@/components/lesson/LessonStudentInfoComponent.vue";
import LessonInfoComponent from "@/components/lesson/LessonInfoComponent.vue";
import LessonDetailComponent from "@/components/lesson/LessonDetailComponent.vue";
import useMemberInfo from "@/store/useMemberInfo";


const programDetailInfo = ref({})
const lessonDialog = ref(false)
const lessonIndex = ref()
const lessonDetailComponentKey = ref(0)

const route = useRoute()

const onClickLesson = (index) => {
  if(index == undefined) return
  lessonDialog.value = true
  lessonIndex.value = index
  lessonDetailComponentKey.value++
}

const fetchProgramDetailInfo = async () => {
  const data = await getProgramDetailInfo(parseInt(route.params.id))

  data.curriculumJson = JSON.parse(data.curriculumJson)

  programDetailInfo.value = data

}

const { getMemberInfo } = useMemberInfo()
const studentId = getMemberInfo().id

console.log(studentId)

onMounted(() => {
  fetchProgramDetailInfo()
})
</script>

<style scoped>

</style>
