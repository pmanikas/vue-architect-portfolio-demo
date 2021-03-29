<template lang="pug">
  .steps
    span
    span
    span
</template>

<script>
export default {
  name: 'Steps',
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.steps
  position: absolute
  right: 0
  bottom: $base-spacing
  left: 0
  width: 40px
  height: 80px
  margin: 0 auto
  span
    position: absolute
    width: 12px
    height: 30px
    background-size: 100%
    animation: step 3s linear infinite
    &:nth-of-type(1)
      top: 0
      left: 0
      background-image: url(~@assets/img/steps/step1.png)
    &:nth-of-type(2)
      top: 50%
      right: 0
      background-image: url(~@assets/img/steps/step2.png)
      transform: translateY(-50%)
      animation-delay: .333s
    &:nth-of-type(3)
      bottom: 0
      left: 0
      background-image: url(~@assets/img/steps/step3.png)
      animation-delay: .666s
</style>
