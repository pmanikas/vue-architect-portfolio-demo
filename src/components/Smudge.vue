<template lang="pug">
  .smudge
</template>

<script>
export default {
  name: 'Smudge',
}
</script>

<style lang="sass" scoped>
.smudge
  position: absolute
  top: 0
  right: 0
  width: 550px
  height: 720px
  background: url(~@/assets/img/smudge.png) no-repeat
  background-position: center
  background-size: contain
  opacity: 0.3
  transform: translateY(-50%)
</style>
