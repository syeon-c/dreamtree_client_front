<template>
  <v-row dense class="border">
    <v-col
      cols="3"
      class="border"
    >
      <v-img
        v-if="programDetailInfo.profileImgUrl"
        :src="`${consts.IMG_DOMAIN}/${programDetailInfo.profileImgUrl}` || 'https://cdn.vuetifyjs.com/images/lists/3.jpg'"
      >
        <template v-slot:placeholder>
          <div class="d-flex align-center justify-center fill-height">
            <v-progress-circular
              color="grey-lighten-4"
              indeterminate
            ></v-progress-circular>
          </div>
        </template>
      </v-img>
    </v-col>
    <v-col class="ma-1 bg-grey-lighten-3">
      <v-sheet>
        <v-card flat class="bg-grey-lighten-3">
          <v-row justify="space-around">
            <v-col>
              <v-card-title>
                {{programDetailInfo.title}}
              </v-card-title>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
              <v-card-text>
                {{ programDetailInfo.email }}
              </v-card-text>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-card-text>
            <v-icon icon="fa-solid fa-graduation-cap" /> 학력: {{ programDetailInfo.college }} | {{ programDetailInfo.major }}
          </v-card-text>
          <v-card-text>
            <v-icon icon="fa-solid fa-stamp" /> 자격증:
            <v-chip
              v-for="certificateName in programDetailInfo.certificateNames"
              :key="certificateName"
              class="ma-0"
            >
              {{certificateName}}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script setup>
import consts from "@/consts/const";
import {ref} from "vue";



const props = defineProps(['programDetailInfo'])

const model = ref()

</script>

<style scoped>

</style>
