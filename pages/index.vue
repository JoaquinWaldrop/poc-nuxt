<template>
  <div>
    <div>
      <h1 class="testing">{{ $t('welcome') }}</h1>
      <ul>
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          >{{ locale.name }}</nuxt-link
        >
      </ul>
    </div>
    <div class="box">
      <div class="barra"></div>
      <Footer />
    </div>
  </div>
</template>

<script>
import client from '~/plugins/contentful'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
    currentLocale() {
      return this.$store.state.i18n.locale
    }
  },
  asyncData({ store }) {
    const locale = store.state.i18n.locale === 'en' ? 'en-US' : 'es-419'
    return client
      .getEntries({
        content_type: 'project',
        locale: locale
      })
      .then((entries) => {
        return { projects: entries.items }
      })
  }
}
</script>
