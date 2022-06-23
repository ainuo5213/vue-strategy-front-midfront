<template>
  <img
    class="h-4 cursor-pointer mr-2"
    src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
    alt=""
    @click="onLogoClick"
  />
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
function onLogoClick() {
  router.push({
    name: 'main'
  })
}
</script>
<style></style>
