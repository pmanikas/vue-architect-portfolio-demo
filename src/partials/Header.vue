<template lang="pug">
  .header(:class="[`${$route.name}Header`, {rest: rest}]")
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      rest: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.rest = true
    }, 2000)
  },
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.header
  &.homepageHeader
    position: fixed
    top: 0
    left: 0
    z-index: 20
    width: 100%
    height: 100vh
    background: url(~@assets/img/blackbord-bg.jpg)
    transition: all 1s ease-in-out
    &.rest
      opacity: 0
      transform: translateY(-100%)
</style>
