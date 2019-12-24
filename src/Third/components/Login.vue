<template>
<div>
  <h1>Login</h1>
  <h1>{{$t('welcome')}}</h1>
  <form @submit="handleLogin">
    <label for="username">Username</label>
    <input v-model="username" id="username" type="text">
    <label for="password">Password</label>
    <input v-model="password" id="password" type="text">
    <button type="submit">Submit</button>
  </form>
</div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    handleLogin () {
      this.$i18n.locale = 'es'
      localStorage.setItem('token', 'abcde')
      this.$store.commit('auth/SET_USER', {
        username: this.username,
        password: this.password
      })
      this.$router.push('/')
    }
  },
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>
