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
    right: 0
    bottom: 0
    width: 550px
    height: 720px
    background: url(~@/assets/img/smudge.png) no-repeat
    background-position: center
    background-size: contain
    transform: translateY(50%)
    opacity: 0.3
</style>