<template lang="pug">
  .bottomSmudge
</template>

<script>
export default {
  name: 'BottomSmudge',
}
</script>

<style lang="sass" scoped>
.bottomSmudge
  position: absolute
  bottom: 0
  left: 0
  width: 250px
  background: url(~@assets/img/bottom-left-smudge.png) no-repeat
  background-position: bottom
  background-size: contain
  opacity: 0.7
</style>
