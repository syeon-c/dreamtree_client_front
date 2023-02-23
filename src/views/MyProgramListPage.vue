<template>

  <default-layout>
    <MyProgramListComponent />
  </default-layout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import MyProgramListComponent from "@/components/common/MyProgramListComponent.vue";

export default {
  name: "MyProgramList",
  components: {MyProgramListComponent, DefaultLayout}
}
</script>

<style scoped>

</style>
