<template>
  <DefaultLayout>
    <v-container>
      <v-row dense class="border">
        <v-col
          cols="3"
          class="border"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/lists/3.jpg"
          ></v-img>
        </v-col>

        <v-col>
          <v-card
            class="mx-auto"
            variant="tonal"
          >
            <v-row justify="space-around">
              <v-col>
                <v-card-title>
                  대학생 닉네임
                </v-card-title>
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <v-card-text>
                  대학생 이메일
                </v-card-text>
              </v-col>
            </v-row>

            <v-card-text>
              학력: 고려대학교 무슨학과 무슨학번
            </v-card-text>
            <v-card-text>
              자격증:
              <v-chip
                v-for="i in 3"
                :key="i"
                class="ma-0"
              >
                자격증
              </v-chip>
            </v-card-text>
          </v-card>

        </v-col>
      </v-row>

    </v-container>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import {ref} from "vue";

const show = ref()
</script>

<style scoped>

</style>
