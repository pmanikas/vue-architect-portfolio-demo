<template lang="pug">
  .home-page
    Header
    About
</template>

<script>
import Header from '@partials/Header';
import About from '@partials/About';
export default {
  name: 'HomePage',
  components: {
    Header,
    About
  }
}
</script>
