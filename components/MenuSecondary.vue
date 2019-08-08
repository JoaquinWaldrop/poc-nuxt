<template>
  <div class="row">
    <div class="col-md-3 prueba2">
      <div class="prueba"></div>
    </div>
    <div class="col-md-9">
      <ul class="prueba3">
        <li v-for="(link, i) in links" :key="i">
          <nuxt-link :to="link.url">{{ link.text }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { url: '/home', text: 'home' },
        { url: '/services', text: 'services' },
        { url: '/work', text: 'work' },
        { url: '/about-us', text: 'about us' },
        { url: '/careers', text: 'careers' },
        { url: '/contact-us', text: 'contact us' }
      ]
    }
  }
}
</script>
