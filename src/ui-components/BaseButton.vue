<template lang="pug">
  .baseButton
    button(:style="{width: widthy}") {{ text }}
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      default: 'Button Title'
    },
    widthy: {
      type: String,
      default: 'auto'
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.baseButton
  position: relative
  display: inline-block
  max-width: 100%
  font-weight: bold
  color: white
  text-align: center

  button
    box-sizing: border-box
    max-width: 100%
    padding: $base-spacing $base-spacing * 2
    margin-bottom: $base-spacing
    color: #ccc
    letter-spacing: 5px
    cursor: pointer
    background: transparent
    border: 5px solid transparent
    border-image: url(~@assets/img/border.png) 10 round
    transition: background .3s ease-in-out
  &:hover
    button
      background: transparentize(white, 0.9)
</style>
