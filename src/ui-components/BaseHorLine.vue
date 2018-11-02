<template lang="pug">
  .horLine(:style="{height: height, width: widthy, left: left, right: right, top: top, bottom: bottom}")
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
  .horLine
    position: absolute
    z-index: 10
    background-image: url(~@assets/img/horizontal-line.png)
    background-repeat: repeat-y
    background-size: cover    
</style>