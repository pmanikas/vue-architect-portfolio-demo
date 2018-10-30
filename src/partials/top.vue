<template lang="pug">
  .top.base-section
    .top-button
      .top-button-inner
        img(src="@assets/img/home-button.png")
</template>

<script>
export default {
  name: 'top'
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.top
  .top-button
    @include center

    .top-button-inner
      @include animation(heartbeat, 1.5s, linear, forwards, 3, 1s)
      
</style>