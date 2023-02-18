<template>
  <DefaultLayout>
    <v-container>
      <v-row>
        <v-col>
          <v-select
            label="내 프로그램 리스트"
            :items="programList"
            @update:modelValue="onUpdateProgramSelect"
            return-object
          >
          </v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-container>
          <v-row>
            <v-col>
              레슨기간 설정
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <VueDatePicker v-model="date" range multi-calendars/>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              레슨 진행일
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-chip-group
                mandatory
                selected-class="text-primary"
                multiple
                v-model="lessonForm.day"
              >
                <v-chip
                  v-for="tag in ['월', '화', '수', '목', '금', '토', '일']" :key="tag"
                >
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="lessonForm.startDate"
                label="시작시간"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="lessonForm.endDate"
                label="레슨시간"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="lessonForm.personnel"
                label="모집 인원"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="lessonForm.fee"
                label="가격"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="lessonForm.place"
                label="레슨 장소"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              모집기간 설정
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <VueDatePicker v-model="date" range multi-calendars/>
            </v-col>
          </v-row>

        </v-container>

      </v-row>

    </v-container>
    <v-btn
      @click="temp"
    >
      temp
    </v-btn>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import {onMounted, ref} from "vue";
import {getStudentProgramLists} from "@/apis/api";

const studentId = 1
const date = ref()
const programList = ref([])
const lessonForm = ref({})

const temp = () => {
  console.log(lessonForm.value)
}

const onUpdateProgramSelect = async (obj) => {
  lessonForm.value.programId = obj.programId
}

const fetchProgramLists = async () => {
  const data = await getStudentProgramLists(studentId)
  programList.value = data
}

onMounted(() => {
  fetchProgramLists()
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
})

</script>

<style scoped>
.lesson-form-wrapper{
  max-width: 100%;
  border: #212529;
  border-style: solid;
  border-radius: 10px;
}
</style>
