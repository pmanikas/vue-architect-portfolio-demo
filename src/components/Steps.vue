<template lang="pug">
  .steps
    span
    span
    span
</template>

<script>
export default {
  name: 'Steps'
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.steps
  position: absolute
  left: 0
  right: 0
  bottom: $base-spacing
  width: 40px
  height: 80px
  margin: 0 auto
  span
    position: absolute
    background-size: 100%
    width: 12px
    height: 30px
    animation: step 3s linear infinite
    &:nth-of-type(1)
      background-image: url(~@assets/img/steps/step1.png)
      left: 0
      top: 0
    &:nth-of-type(2)
      background-image: url(~@assets/img/steps/step2.png)
      right: 0
      top: 50%
      transform: translateY(-50%)
      animation-delay: .333s
    &:nth-of-type(3)
      background-image: url(~@assets/img/steps/step3.png)
      left: 0
      bottom: 0
      animation-delay: .666s
</style>