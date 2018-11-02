<template>
    <div class="layout-loginUser">
      <Icon type="ios-notifications-outline" size="22"/>
      <Icon type="ios-person" size="24"/> admin
      <Dropdown>
        <Icon type="ios-arrow-down"></Icon>
        <DropdownMenu slot="list">
          <DropdownItem>
            <Icon type="ios-settings-outline" />
            设置
          </DropdownItem>
          <DropdownItem>
            <Icon type="md-log-out" />
            注销
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
</template>

<script>
export default {
  name: 'LoginUser'
}
</script>

<style>
  .layout-loginUser {
    line-height: 50px;
    margin-right: 25px;
  }
  .loginuser {
    vertical-align: middle;
  }
</style>
