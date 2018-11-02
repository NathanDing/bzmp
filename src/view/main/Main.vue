<template>
  <div id="main">
    <HeaderBar/>
    <HomePage/>
  </div>
</template>

<script>
import HeaderBar from '@/view/main/components/header-bar/HeaderBar'
import HomePage from '@/view/home/HomePage'
export default {
  name: 'Main',
  components: {HomePage, HeaderBar}
}
</script>

<style>
#main {

}
</style>
