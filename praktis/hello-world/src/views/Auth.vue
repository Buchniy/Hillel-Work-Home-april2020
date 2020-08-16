<template>
  <div class="auth">
    <div class="auth__login">
      <app-login></app-login>
    </div>
  </div>
</template>

<script>
import Login from "../components/Login";
export default {
  name: 'Auth',
  components: {
    appLogin: Login
  }
}
</script>


<style lang="scss">
  .auth {
    display: flex;
    justify-content: center;
  }
</style>