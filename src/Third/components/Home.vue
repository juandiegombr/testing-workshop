<template>
<div>
  <h1>{{$t('welcome')}}</h1>
  <div>{{user.username}}</div>
  <div>{{user.password}}</div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState('auth', ['user'])
  }
}
</script>
