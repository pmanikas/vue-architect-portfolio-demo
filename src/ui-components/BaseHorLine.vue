<template lang="pug">
  .hor-line(:style="{height: height, width: widthy, left: left, right: right, top: top, bottom: bottom}")
</template>

<script>
export default {
  name: 'BaseHorLine',
  props: {
    height: {
      type: String,
      default: '6px'
    },
    widthy: {
      type: String,
      default: '100px'
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
.hor-line
  position: absolute
  background-image: url(~@assets/img/horizontal-line.png)
  background-size: cover
  background-repeat: repeat-y
</style>