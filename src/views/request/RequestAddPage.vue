<template>
  <DefaultLayout>

    <RequestAddComponent />

  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import RequestAddComponent from "@/components/request/RequestAddComponent.vue";

export default {
  name: "RequestAddPage",
  components: {RequestAddComponent, DefaultLayout}
}
</script>

<style scoped>

</style>
