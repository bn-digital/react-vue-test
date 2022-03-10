<template>
  <div>
    <h4>{{ msg }}</h4>
    <button @click="clickMe()">{{ this.clicky ? "Click" : "Clack" }}</button>
  </div>
</template>
<script>
  export default {
    name: 'testing',
    props: {
      msg: String
    },
    methods: {
      clickMe() {
        this.clicky = !this.clicky
      }
    },
    data() {
      return {
        clicky: true
      }
    }
  }
</script>