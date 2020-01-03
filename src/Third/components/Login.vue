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
  <p v-if="error">{{$t('error')}}</p>
</div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    loginSuccess () {
      this.error = false
      this.$router.push('/')
      this.$i18n.locale = 'es'
    },
    loginError () {
      this.error = true
    },
    handleLogin (e) {
      e.preventDefault()
      const user = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('auth/login', user)
        .then(this.loginSuccess)
        .catch(this.loginError)
    }
  },
  data () {
    return {
      username: '',
      password: '',
      error: false
    }
  }
}
</script>
