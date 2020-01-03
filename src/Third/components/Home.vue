<template>
<div>
  <h1>{{$t('welcome')}}</h1>
  <div>{{user.fullname}}</div>
  <div>{{user.email}}</div>
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
