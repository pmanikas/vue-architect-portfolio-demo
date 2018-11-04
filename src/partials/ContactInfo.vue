<template lang="pug">
.contactInfo
  h2 Contact Info
  hr.chalkyHr
  p(v-html="`Address: ${owner.address}`")
  p Email: 
    a(:href="`mailto:${owner.email}`") {{ owner.email }}
  p Skype: 
    a(:href="`skype:${owner.skype}?call`") {{ owner.skype }}
  p Tel: 
    a(:href="`tel:${owner.phone}`") {{ owner.phone }}
</template>

<script>
import { owner } from '@data/data'

export default {
  name: 'ContactInfo',
  data() {
    return {
      owner: owner
    }
  }
}
</script>