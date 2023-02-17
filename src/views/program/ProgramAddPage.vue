<template>
  <DefaultLayout>
    <v-container class="form-container">
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
            :readMode="false"
            @pushCurriculum="(curriculum) => updateCurriculum(curriculum, index)"
            @deleteDayCurriculum="() => deleteDayCurriculum(index)"
          ></ProgramCurriculumDayComponent>

        </div>

        <!--이미지 업로드-->
        <div>
          <v-btn
            prepend-icon="fa-solid fa-floppy-disk"
            @click="onClickUploadButton"
          >
            Upload
          </v-btn>
        </div>

        <div class="text-center">
          <v-dialog
            v-model="uploadDialog"
          >
            <UploadComponent @addImages="addImages" @offDialog="uploadDialog = false"/>
          </v-dialog>
        </div>

        <ProgramImageListComponent
          :imageNameList="imageNameList"
          :key="imageListKey"
          @onImageDeleted="onImageDeleted"
        ></ProgramImageListComponent>

        <!--생성 버튼-->
        <div class="addCancel">
          <v-btn
            color="success"
            class="me-2"
            @click="saveProgramForm"
          >
            저장
          </v-btn>
          <v-btn
            color="success"
            class="me-4"
            @click="cancelProgramForm"
          >
            취소
          </v-btn>
        </div>
      </div>
    </v-container>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import {ref} from "vue";
import ProgramCurriculumDayComponent from "@/components/program/ProgramCurriculumDayComponent.vue";
import {deleteMinioImage, postProgramForm} from "@/apis/api";
import MainCategoryComponent from "@/components/category/MainCategoryComponent.vue";
import SubCategoryComponent from "@/components/category/SubCategoryComponent.vue";
import UploadComponent from "@/components/image/UploadComponent.vue";
import ProgramImageListComponent from "@/components/image/ImageListComponent.vue";
import {useRouter} from "vue-router";
import consts from "@/consts/const";

const router = useRouter()
//ref
const programForm = ref({})
const count = ref(0)
const mainCurriculum = ref([])
const subCategoryList = ref({})
const uploadDialog = ref(false)
const imageNameList = ref([])
const imageListKey = ref(0)

//첨부파일 dialog
const onClickUploadButton = () => {
  uploadDialog.value = true
}

//첨부파일 imageList에 추가, 추가시 ImageListComponent 리로딩
const addImages = (imageNames) => {
  imageNameList.value.push(...imageNames)
  imageListKey.value++
}

//이미지 컴포넌트에서 delete시 업데이트
const onImageDeleted = (imageList) => {
  imageNameList.value = imageList
}

/*
* 카테고리 select 컴포턴트 함수
*
* */
//부 카테고리 변경 시 programForm에 subCategoryId 추가
const onUpdateSubCategory = (subCategoryId) => {
  programForm.value.subCategoryId = subCategoryId
}

//주 카테고리 변경시 categoryList 반환
const mainCategoryChange = (categoryList) => {
  subCategoryList.value = categoryList
}



//회차 업데이트
const updateCurriculum = (curriculum, index) => {
  mainCurriculum.value[index] = curriculum
}

//회차 삭제
const deleteDayCurriculum = (index) => {
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

  const fileForms = []
  imageNameList.value.map(item => {
    fileForms.push(item)
  })
  programForm.value.fileForms = fileForms
  const studentId = 1
  console.log(studentId, mainCurriculum.value, programForm.value)
  const data = await postProgramForm(studentId, mainCurriculum.value, programForm.value)
  await router.push({
    name: consts.PROGRAM_DETAIL_PAGE,
    params: {
      id :data
    }
  })
}

const cancelProgramForm = async () => {
  await deleteMinioImage(imageNameList.value)

  imageNameList.value = []
  await router.push({
    name: consts.HOME_PAGE,
  })

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
