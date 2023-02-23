<template>
  <v-btn @click="dialog = !dialog">신고하기</v-btn>

  <!-- post dialog -->
  <v-dialog v-model="dialog">

    <v-card>
      <v-card-text style="text-align: center">
        <div class="v-container">
          <v-form>
            <v-container style="margin: 10px" >
              <v-text-field
                v-model="addReport.title"
                label="제목 입력"
                variant="outlined"
              ></v-text-field>

              <v-text-field
                v-model="addReport.content"
                label="내용 입력"
                variant="outlined"
              ></v-text-field>
            </v-container>
          </v-form>
        </div>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="grey" @click="accept"> 전송</v-btn>
        <v-btn color="grey" @click="dialog = false"> 취소</v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</template>

<script setup>

import {ref} from "vue";

const emits = defineEmits(['postMail'])

const addReport = ref({
  reporterEmail: 'reportEmail1',
  title: '',
  content: ''
})

const dialog = ref(false)

const accept = () => {

  emits('postReport', addReport.value)

  dialog.value = !dialog.value

  addReport.value = {
    reporterEmail: 'reportEmail1',
    title: '',
    content: ''
  }
}

</script>

<style scoped>

</style>
