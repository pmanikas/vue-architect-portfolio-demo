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
    opacity: 0.7
    background: url(~@assets/img/bottom-left-smudge.png) no-repeat
    background-size: contain
    background-position: bottom
</style>