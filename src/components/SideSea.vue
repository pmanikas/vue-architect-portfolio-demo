<template lang="pug">
  .sideSea(:class="check")
    a.check(v-for="(project, index) in projects" :class="{ active: index === check }" v-scroll-to="'#project' + (index + 1)" :key="index")
</template>

<script>
export default {
  name: 'SideSea',
  props: {
    check: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      projects: ['project1', 'project2', 'project3', 'project4'],
    }
  },
}
</script>

<style lang="sass" scoped>
.sideSea
  width: 100%
  height: 100vh
  background: url(~@assets/img/sea.png) no-repeat
  background-position: center
  background-size: 100% 100vh
  .check
    position: absolute
    left: 11%
    width: 74px
    height: 23px
    cursor: pointer
    background-position: center center
    background-size: 100% 100%
    opacity: 0
    transition: opacity .3s ease-in-out

    &:hover, &.active
      opacity: 1

  .check:nth-of-type(1)
    top: 17vh
    background: url(~@assets/img/checkbox/red-checkbox.png) no-repeat
  .check:nth-of-type(2)
    top: 36vh
    background: url(~@assets/img/checkbox/blue-checkbox.png) no-repeat
  .check:nth-of-type(3)
    top: 55vh
    background: url(~@assets/img/checkbox/orange-checkbox.png) no-repeat
  .check:nth-of-type(4)
    top: 74vh
    background: url(~@assets/img/checkbox/green-checkbox.png) no-repeat
</style>
