<template lang="pug">
  .background(:style="{ backgroundPosition: `center ${scrollPosition}px` }")
</template>

<script>
export default {
  name: 'Background',
  data() {
    return {
      scrollPosition: null,
      scrollRatio: 0.1
    }
  },
  created() {
    window.addEventListener('scroll', this.updateScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.updateScroll)
  },
  methods: {
    updateScroll() {
      this.scrollPosition = Math.floor(-window.scrollY*this.scrollRatio);
    }
  }
}
</script>

<style lang="sass" scoped>
  .background
    position: fixed
    width: 100%
    height: 100%
    background: url(~@assets/img/blackbord-bg.jpg)
    background-position: center top
    transition: all .3s ease-out
</style>