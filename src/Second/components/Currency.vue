<template>
<div>
  <div>Currency filter</div>
  <div>{{ price | currency }}</div>
</div>
</template>

<script>
export default {
  name: 'Currency',
  props: {
    price: {
      type: Number,
      default: 500
    }
  },
  methods: {
    
  }
}
</script>
