<template lang="pug">
  .sideSea(:class="check")
    a.check(v-for="(project, index) in projects" :class="{ active: index === check }" v-scroll-to="'#project' + (index + 1)")
</template>

<script>
import { projects } from '@data/data'

export default {
  name: 'SideSea',
  props: {
    check: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      projects: projects
    }
  }
}
</script>

<style lang="sass" scoped>
  .sideSea
    height: 100vh
    width: 100%
    background: url(~@assets/img/sea.png) no-repeat
    background-size: 100% 100vh
    background-position: center
    .check
      position: absolute
      left: 11% 
      width: 74px
      height: 23px
      background-position: center center
      background-size: 100% 100%
      opacity: 0
      transition: opacity .3s ease-in-out
      cursor: pointer
      &:hover, &.active
        opacity: 1

    .check:nth-of-type(1)
      background: url(~@assets/img/checkbox/red-checkbox.png) no-repeat
      top: 17vh
    .check:nth-of-type(2)
      background: url(~@assets/img/checkbox/blue-checkbox.png) no-repeat
      top: 36vh
    .check:nth-of-type(3)
      background: url(~@assets/img/checkbox/orange-checkbox.png) no-repeat
      top: 55vh
    .check:nth-of-type(4)
      background: url(~@assets/img/checkbox/green-checkbox.png) no-repeat
      top: 74vh    
</style>