<template>

</template>

<script setup>

if (window.Kakao.Auth.getAccessToken()) {
  window.Kakao.API.request({
    url: '/v1/user/unlink',
    success: async (res) => {
      console.log("unlink...", res)
    },
    fail: error => {
      console.log(error)
    }
  })
  window.Kakao.Auth.setAccessToken()
}

</script>

<style scoped>

</style>
