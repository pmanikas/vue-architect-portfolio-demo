<template lang="pug">
  .baseArrowBack(@click="$router.go(-1)" :style="{height: height, width: widthy, left: left, right: right, top: top, bottom: bottom, position: position}")
</template>

<script>
export default {
  name: 'BaseArrowBack',
  props: {
    position: {
      type: String,
      default: 'static',
    },
    height: {
      type: String,
      default: '40px',
    },
    widthy: {
      type: String,
      default: '70px',
    },
    left: {
      type: String,
      default: 'unset',
    },
    right: {
      type: String,
      default: 'unset',
    },
    top: {
      type: String,
      default: 'unset',
    },
    bottom: {
      type: String,
      default: 'unset',
    },
  },
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.baseArrowBack
  position: absolute
  display: inline-block
  margin-right: $base-spacing
  margin-bottom: $base-spacing * 2
  vertical-align: middle
  cursor: pointer
  background-image: url(~@assets/img/arrow-back.png)
  background-repeat: no-repeat
  background-size: contain
</style>
