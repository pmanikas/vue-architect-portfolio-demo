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
  top: 60vh
  right: 0
  width: calc(100% - #{$base-spacing})
  height: 530vh
  background: url(~@assets/img/grass.png)
  background-size: 100% 100%
</style>