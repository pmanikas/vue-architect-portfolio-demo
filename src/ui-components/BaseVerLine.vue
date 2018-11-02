<template lang="pug">
  .verLine(:style="{height: height, width: widthy, left: left, right: right, top: top, bottom: bottom}")
</template>

<script>
export default {
  name: 'BaseVerLine',
  props: {
    height: {
      type: String,
      default: '100vh'
    },
    widthy: {
      type: String,
      default: '6px'
    },
    left: {
      type: String,
      default: 'unset'
    },
    right: {
      type: String,
      default: 'unset'
    },
    top: {
      type: String,
      default: 'unset'
    },
    bottom: {
      type: String,
      default: 'unset'
    }
  }
}
</script>

<style lang="sass" scoped>
.verLine
  position: absolute
  z-index: 10
  background-image: url(~@assets/img/vertical-line.png)
  background-repeat: repeat-y
  background-size: 100%
</style>