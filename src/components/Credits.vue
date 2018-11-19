<template lang="pug">
  .credits.text-center
    .designer
      p
        | Designed by 
        router-link(:to="{ name: 'skills' }")
          | Lefteris Kapsalas
    
    .developer
      hr.chalkyHr
      p
        | Crafted by 
        a(:href='owner.developerWebsite', target='_blank' rel="noopener")
          | {{ owner.developer }}

</template>

<script>
import { owner } from '@data/data'

export default {
  name: 'Credits',
  data() {
    return {
      owner: owner
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'

.credits
  position: relative
  top: $base-spacing * 3
  width: 330px
  margin: 0 auto $base-spacing
  text-align: center
  p
    padding: 0
    margin: 0
    font-size: 1.4rem
    font-weight: bold
    line-height: 2
    color: transparentize($main-font-color, 0.3)
  .designer, .developer
    position: relative
  
@media(min-width: $desktop)
  .credits
    float: right
    margin: 0 0 $base-spacing
</style>