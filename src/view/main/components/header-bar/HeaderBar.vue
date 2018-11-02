<template>
  <Row id="header-bar">
    <i-col span="4">
      <Logo/>
    </i-col>
    <i-col span="18">
      <NavMenu/>
    </i-col>
    <i-col span="2" >
      <LoginUser/>
    </i-col>
  </Row>
</template>

<script>
import Logo from '@/view/main/components/logo/Logo'
import NavMenu from '@/view/main/components/nav-menu/NavMenu'
import LoginUser from '@/view/main/components/user/LoginUser'
export default {
  name: 'HeaderBar',
  components: {LoginUser, NavMenu, Logo}
}
</script>

<style>
#header-bar {
  background-color: #4f4750;
  position: relative;
  margin-left: 0;
  margin-right: 0;
  height: 50px;
  zoom: 1;
  display: block;
}
.ivu-menu {
  display: block;
  margin: 0;
  padding: 0;
  outline: 0;
  list-style: none;
  color: #515a6e;
  font-size: 12px;
  position: relative;
  z-index: 900;
}
.ivu-menu-item {
  font-size: 12px;
  display: block;
  outline: 0;
  list-style: none;
  /*font-size: 14px;*/
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: all .2s ease-in-out;
}
</style>
