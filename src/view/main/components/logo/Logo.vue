<template>
    <div class="layout-logo">
      <img class="img-logo" :src="logo" key="logo">
    </div>
</template>

<script>
import logo from '@/assets/logo.png'
export default {
  name: 'Logo',
  data () {
    return {
      logo
    }
  }
}
</script>

<style>
.layout-logo {
  line-height: 50px;
}
.img-logo {
  margin-left: 5px;
  vertical-align: middle;
}
</style>
