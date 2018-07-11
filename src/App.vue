<template>
  <div>
    <h2>{{ title }}</h2>
    <input type="text" v-model="title">
  </div>
</template>

<script>

  export default {
    data(){
      return {
        title:'hello vue'
      }
    }
  }
</script>

<style>
  h2{
    color: red
  }
</style>
