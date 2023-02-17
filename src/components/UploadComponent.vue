<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
    >
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

          <v-btn @click="clickDialogUpload">upload</v-btn>
          <div style="display: flex; justify-content: center">
            <v-card-actions>
              <v-btn color="primary" block>확인</v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-btn color="primary" block>취소</v-btn>
            </v-card-actions>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>

</template>

<script setup>

import {ref} from "vue";

const emits = defineEmits(['addImages', 'clickDialog'])

const files = ref([])



const clickDialogUpload = async () => {

  const formData = new FormData()

  console.log(files.value)

  for(let file of files.value){
    formData.append("files", file, file.name)
  }

}

</script>

<style scoped>

</style>
