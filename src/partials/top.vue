<template lang="pug">
  .top.base-section
    .top-button
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
</style>