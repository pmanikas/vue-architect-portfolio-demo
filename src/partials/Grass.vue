<template lang="pug">
  .grass
    BaseVerLine(:height="'400vh'" :top="'40vh'" :left="'0'")
    .tree
    .doubleBush
    .bush
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
  .tree
    position: absolute
    top: 100vh
    right: 0
    z-index: 10
    width: 240px
    height: 537px
    background: url(~@assets/img/tree.png) no-repeat
    background-size: cover
  .doubleBush
    position: absolute
    top: 250vh
    right: 0
    z-index: 10
    width: 150px
    height: 600px
    background: url(~@assets/img/double-bush.png) no-repeat
    background-size: 100% 100%
    opacity: 0.8
  .bush
    position: absolute
    top: 350vh
    right: 0
    z-index: 10
    width: 140px
    height: 352px
    background: url(~@assets/img/bush.png) no-repeat
    background-size: 100% 100%
    opacity: 0.8
</style>
