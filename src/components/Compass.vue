<template lang="pug">
  .compass(@click="toTop")
    img(src="@assets/img/compass.png")
</template>

<script>
export default {
  name: 'Compass',
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="sass" scoped>
.compass
  display: inline-block
  cursor: pointer
  transition: transform 1s ease-in-out
  img
    width: 100px
  &:hover
    transform: rotate(360deg)
</style>
