<template lang="pug">
  .ver-line(:style="{height: height, width: width, left: left, right: right, top: top, bottom: bottom}")
</template>

<script>
export default {
  name: 'BaseVerLine',
  props: {
    height: {
      type: String,
      default: '100vh'
    },
    width: {
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
.ver-line
  position: absolute
  background-image: url(~@assets/img/vertical-line.png)
  background-size: cover
  background-repeat: repeat-y
</style>