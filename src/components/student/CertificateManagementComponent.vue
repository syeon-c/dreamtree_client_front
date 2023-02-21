<template>

  <v-table>
    <thead>
    <tr>
      <th>자격증명</th>
      <th>취득일자</th>
      <th>인증상태</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="certificate in certificates">
      <td>{{ certificate.name }}</td>
      <td>{{ certificate.aquireDate }}</td>
      <td>{{ certificate.authState == 'pending' ? '요청 중' : certificate.authState == 'yes' ? '인증' : '거절' }}</td>
    </tr>
    </tbody>
  </v-table>

  <v-btn @click="dialog = !dialog">인증 요청</v-btn>

  <!-- post dialog -->
  <v-dialog v-model="dialog">

    <v-card>
      <v-card-text style="text-align: center">
        <div class="v-container">
          <v-sheet width="300" class="mx-auto">
            <v-form fast-fail @submit.prevent>
              <v-text-field
                v-model="addCertificateInfo.name"
                label="수상/취득 내용"
              ></v-text-field>

              <v-text-field
                v-model="addCertificateInfo.aquireDate"
                label="수상/취득 년월"
              ></v-text-field>

              <div>
                인증파일
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
            </v-form>
          </v-sheet>
        </div>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="grey" @click="addClickCertificate"> 전송</v-btn>
        <v-btn color="grey" @click="dialog = false"> 취소</v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>

</template>

<script setup>

import {addCertificate, getCertificateList} from "@/apis/adminAPIS";
import {onMounted, ref} from "vue";
import UploadComponent from "@/components/image/UploadComponent.vue";

const props = defineProps(['id'])

const emits = defineEmits(['addSuccess'])

const certificates = ref([])

const addCertificateInfo = ref({})

const add = ref(false)

const imageNameList = ref([])

const imageListKey = ref(0)

const uploadDialog = ref(false)

const dialog = ref(false)

const onClickUploadButton = () => {
  uploadDialog.value = true
}


const addImages = (imageNames) => {
  console.log(imageNames)
  imageNameList.value.push(...imageNames)
  imageListKey.value++
}

// Dialog에서 전송 클릭 시
const addClickCertificate = async () => {

  const certificate = {
    studentId: props.id,
    name: addCertificateInfo.value.name,
    aquireDate: addCertificateInfo.value.aquireDate,
    url: imageNameList.value[0]
  }

  await addCertificate(certificate)

  emits('addSuccess')
  add.value = !add.value
}

const fetchGetList = async () => {

  certificates.value = await getCertificateList(props.id)

}

onMounted(() => {
  fetchGetList()
})

</script>

<style scoped>

</style>
