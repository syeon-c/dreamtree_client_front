<template>
  <div class="curriculum-wrapper">

    <v-card class="button-day">
      <!-- 전체 삭제 버튼 -->
      <v-btn flat icon="fa-solid fa-x" style="float: right"
        @click="emits('deleteDayCurriculum', curriculum)"
        :disabled="readMode"
      ></v-btn>
    </v-card>

    <!-- 커리큘럼 -->
    <v-card class="curriculum-day ma-2" v-for="(content, index) in curriculum" :key="index">
      <div style="display: flex">
        <v-card-text>
          {{content}}
        </v-card-text>

        <!-- todo: 수정 -->
        <v-btn icon="fa-solid fa-pencil"
          :disabled="readMode"

        ></v-btn>

        <!-- 삭제 -->
        <v-btn icon="fa-solid fa-x"
          @click="() => removeCurriculum(content)"
          :disabled="readMode"
        ></v-btn>
      </div>
    </v-card>

    <!-- input -->
    <ProgramCurriculumComponent
      @onClickInsideAddButton="onClickInsideAddButton"
      :readMode="readMode"
    ></ProgramCurriculumComponent>
  </div>
</template>

<script setup>
import {computed, ref, toRefs, watch} from "vue";
import ProgramCurriculumComponent from "@/components/program/ProgramCurriculumComponent.vue";

const emits = defineEmits(['pushCurriculum', 'deleteDayCurriculum'])
const props = defineProps(['dayCurriculum', 'readMode'])
const readMode = ref(props.readMode)
const curriculum = ref(props.dayCurriculum)

//1줄 삭제
const removeCurriculum = (content) => {
  curriculum.value = curriculum.value.filter(e => e !== content)
}

//1줄 추가
const onClickInsideAddButton = (curriculumStr) => {
  curriculum.value.push(curriculumStr)
  emits('pushCurriculum', curriculum.value)
}

</script>

<style scoped>
.curriculum-wrapper{
  max-width: 100%;
  border: #212529;
  border-style: solid;
  border-radius: 10px;
}

.curriculum-day{
  max-width: 100%;
  border: #212529;
  border-style: solid;
  border-radius: 10px;
}

.button-day{
  max-width: 100%;
  background-color: black;
}

</style>
