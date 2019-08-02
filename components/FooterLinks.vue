<template>
  <v-container>
    <v-layout class="footer__links-container">
      <v-flex class="footer__copyright">{{ copyRight }}</v-flex>
      <v-flex>
        <v-list>
          <v-list-item-group color="primary" class="footer__links">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon color="white">mdi-email</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'info@s4n.co', link: 'www.google.co.ve' },
        { title: 'www.linkedin.com/s4n', link: 'www.google.co.ve' },
        { title: 'www.facebook.com/s4n', link: 'www.google.co.ve' },
        { title: 'www.twitter/s4n', link: 'www.google.co.ve' }
      ],
      copyRight: `© Copyright ${new Date().getFullYear()} S4N`
    }
  }
}
</script>
