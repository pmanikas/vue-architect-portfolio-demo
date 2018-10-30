<template lang="pug">
  .home-page
    Top
    About
</template>

<script>
import Top from '@partials/Top';
import About from '@partials/About';
export default {
  name: 'HomePage',
  components: {
    Top,
    About
  }
}
</script>
