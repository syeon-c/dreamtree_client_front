<template>
  <DefaultLayout>
    <div class="form-container">
      <div>
        <form>
          <div style="display: flex">
            <MainCategoryComponent></MainCategoryComponent>
            <SubCategoryComponent></SubCategoryComponent>
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
import {onMounted, ref} from "vue";
import ProgramCurriculumDayComponent from "@/components/program/ProgramCurriculumDayComponent.vue";
import {getHomeCategories, postProgramForm} from "@/apis/api";
import MainCategoryComponent from "@/components/program/MainCategoryComponent.vue";
import SubCategoryComponent from "@/components/program/SubCategoryComponent.vue";

const programForm = ref({})
const count = ref(0)
const mainCurriculum = ref([])

const categoryInfo = ref()
const mainCategoryList = ref([])
const subCategoryList = ref([])

const updateCurriculum = (curriculum, index) => {
  console.log(index)
  mainCurriculum.value[index] = curriculum
}

const deleteDayCurriculum = (index) => {
  console.log(mainCurriculum.value[index])
  mainCurriculum.value = mainCurriculum.value.filter(e => e !== mainCurriculum.value[index])
  count.value++
}

const generateCurriculum = () => {
  mainCurriculum.value.push([])
}

//프로그램 생성
const saveProgramForm = async () => {
  //maincurriculum, studentId, ProgramForm(subCategoryId, title, content, times, fee)
  programForm.value.times = mainCurriculum.value.length
  await postProgramForm(mainCurriculum.value, 1, programForm)
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
