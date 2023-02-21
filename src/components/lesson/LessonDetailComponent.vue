<template>
  <v-container class="bg-white">
    <v-row>
      <v-col class="h1">
        <h1>
          {{programTitle}}
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        레슨 기간: {{lessonInfo.startDate}} ~ {{lessonInfo.endDate}}
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        레슨 진행일:
        <v-chip
          v-for="tag in bitToDayParser(lessonInfo.day)" :key="tag"
        >
          {{ tag }}
        </v-chip>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        레슨 시간: {{lessonInfo.lessonTime}}시 ~ {{lessonInfo.lessonTime + lessonInfo.lessonLength}}시
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        모집 인원: 총 {{lessonInfo.personnel}}명
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        가격: {{lessonInfo.fee}}원
      </v-col>
    </v-row>
    <v-row
      v-if="lessonInfo.place"
    >
      <v-col>
        장소: {{lessonInfo.place}}
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        모집 기간: {{lessonInfo.expireStartDate}} ~ {{lessonInfo.expireEndDate}}
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
import {bitToDayParser} from "@/util/dayBitParser";

const props = defineProps(['lessonInfo', 'programTitle']);
</script>

<style scoped>

</style>
