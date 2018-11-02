<template lang="pug">
  .grass
    BaseVerLine(:height="'400vh'" :top="'40vh'" :left="'0'")
</template>

<script>
export default {
  name: 'Grass',
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.grass
  position: absolute
  right: 0
  top: 60vh
  height: 530vh
  width: calc(100% - #{$base-spacing})
  background: url(~@assets/img/grass.png)
  background-size: 100% 100%
</style>