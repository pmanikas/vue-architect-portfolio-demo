<template lang="pug">
  .mainMenu(:class="[`${$route.name}MainMenu`, {rest: rest}]")
    .headerButton(@click="toggleMenu()")
      .headerButtonInner
        img(src="@assets/img/home-button.png")
    transition(name="slide-right")
      .mainMenuDisplay(v-if="active")
        ul.mainMenuList
          li(v-for="(menuItem, index) in menu" :key="index" @click="closeMenu()")
            router-link(:to="{name:menuItem.link}") {{ menuItem.title }}
</template>

<script>
export default {
  name: 'MainMenu',
  data() {
    return {
      active: false,
      rest: false,
      menu: [
        {
          title: 'Home',
          link: 'homepage'
        },
        {
          title: 'About',
          link: 'about'
        },
        {
          title: 'Skills',
          link: 'skills'
        },
        {
          title: 'Contact',
          link: 'contact'
        }
      ]
    }
  },
  created() {
    setTimeout(() => {
      this.rest = true
    }, 2000);
  },
  methods: {
    toggleMenu() {
      this.active = !this.active
    },
    closeMenu() {
      this.active = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~@assets/style/essentials'


.headerButton
  position: relative
  z-index: 40
  display: inline-block
  cursor: pointer
  transition: transform 1s ease-in-out
  transform: translateX(calc(100vw - 100px)) translateY(15px)

.homepageMainMenu
  .headerButton
    position: absolute
    transform: translateX(calc(50vw - 50%)) translateY(calc(50vh - 50%))
  &.rest
    .headerButton
      transform: translateX(calc(100vw - 100px)) translateY(15px)

.mainMenuDisplay
  position: absolute
  top: 0
  left: 0
  z-index: 30
  width: 50vw
  max-width: 50%
  height: 100vh
  background: transparentize(#222, 0.1)
  .mainMenuList
    padding: 0
    @include center

    li
      font-weight: bold
      line-height: 5rem
      list-style: none

@media(min-width: $desktop)
  .headerButton
    transform: translateX(calc(84vw - 130px)) translateY(10vh)
  .homepageMainMenu.rest
    .headerButton
      transform: translateX(84vw) translateY(10vh)
  .mainMenuDisplay
    width: 23vw
</style>
