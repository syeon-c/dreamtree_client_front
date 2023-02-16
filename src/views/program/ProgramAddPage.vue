<template>
  <DefaultLayout>
    <div class="form-container">
      <div>
        <form>
          <div style="display: flex">
            <MainCategoryComponent @mainCategoryChange="mainCategoryChange"></MainCategoryComponent>
            <SubCategoryComponent
              :subCategoryList="subCategoryList"
              @updateSubCategory="onUpdateSubCategory"
            ></SubCategoryComponent>
          </div>
          <v-text-field
            class="mr-0 ml-0 mt-3 form-item"
            v-model="programForm.title"
            label="제목"

          ></v-text-field>

          <v-textarea
            class="mr-0 ml-0 form-item"
            v-model="programForm.content"
          ></v-textarea>

          <v-text-field
            class="mr-0 ml-0"
            v-model="programForm.fee"
            label="가격"
          ></v-text-field>

        </form>

        <div>
          회차별 수업 정보
          <v-btn
            icon="fa-solid fa-plus"
            @click="generateCurriculum"
          >
          </v-btn>
        </div>

        <div
          v-for="(dayCurriculum, index) in mainCurriculum"
          :key="index"
        >
          <ProgramCurriculumDayComponent
            :key="count"
            :dayCurriculum="dayCurriculum"
            @pushCurriculum="(curriculum) => updateCurriculum(curriculum, index)"
            @deleteDayCurriculum="() => deleteDayCurriculum(index)"
          ></ProgramCurriculumDayComponent>

        </div>

        <v-btn
          append-icon="fa-solid fa-floppy-disk"
          @click="saveProgramForm"
        >
          프로그램 생성
        </v-btn>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import {ref} from "vue";
import ProgramCurriculumDayComponent from "@/components/program/ProgramCurriculumDayComponent.vue";
import {postProgramForm} from "@/apis/api";
import MainCategoryComponent from "@/components/program/MainCategoryComponent.vue";
import SubCategoryComponent from "@/components/program/SubCategoryComponent.vue";

const programForm = ref({})
const count = ref(0)
const mainCurriculum = ref([])
const subCategoryList = ref({})

//부 카테고리 변경 시 programForm에 subCategoryId 추가
const onUpdateSubCategory = (subCategoryId) => {
  programForm.value.subCategoryId = subCategoryId
  console.log(programForm.value)
}

//주 카테고리 변경시 categoryList 반환
const mainCategoryChange = (categoryList) => {
  subCategoryList.value = categoryList
}

//회차 업데이트
const updateCurriculum = (curriculum, index) => {
  console.log(index)
  mainCurriculum.value[index] = curriculum
}

//회차 삭제
const deleteDayCurriculum = (index) => {
  console.log(mainCurriculum.value[index])
  mainCurriculum.value = mainCurriculum.value.filter(e => e !== mainCurriculum.value[index])
  count.value++
}


//회차 추가
const generateCurriculum = () => {
  mainCurriculum.value.push([])
  programForm.value.times = mainCurriculum.value.length
}

//프로그램 생성
const saveProgramForm = async () => {
  //maincurriculum, studentId, ProgramForm(subCategoryId, title, content, times, fee)
  programForm.value.times = mainCurriculum.value.length
  console.log(JSON.stringify(mainCurriculum.value))
  const studentId = 1
  await postProgramForm(studentId, mainCurriculum.value, programForm.value)
}
</script>

<style scoped>
.form-container{
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.form-item{
  width: 90vw;
}
</style>
