<template>

  <v-card>
    <v-card-text style="text-align: center">
      <v-file-input
        v-model="files"
        placeholder="Upload your documents"
        label="File input"
        multiple
        show-size
        prepend-icon="mdi-paperclip"
      >

        <template v-slot:selection="{ fileNames }">
          <template v-for="fileName in fileNames" :key="fileName">
            <v-chip
              size="small"
              label
              color="primary"
              class="me-2"
            >
              {{ fileName }}
            </v-chip>
          </template>
        </template>
      </v-file-input>

        <div style="display: flex; justify-content: center">
          <v-card-actions>
            <v-btn
              color="primary"
              @click="onClickUpload"
              block
            >확인</v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-btn
              color="primary"
              block
              @click="onClickCancel"
            >취소</v-btn>
          </v-card-actions>
        </div>
    </v-card-text>
  </v-card>

</template>

<script setup>

import {ref} from "vue";
import {postUpload} from "@/apis/api";

const emits = defineEmits(['addImages', 'offDialog'])

const files = ref([])

const onClickUpload = async () => {

  const formData = new FormData()

  //파일을 보냈을때만 실행
  if(files.value.length){
    for(let file of files.value){
      formData.append("files", file, file.name)
    }

    const fileNames = await postUpload(formData)

    emits('addImages', fileNames)
  }
  emits('offDialog')
}

const onClickCancel = async () => {
  files.value = []
  emits('offDialog')
}

</script>

<style scoped>

</style>
