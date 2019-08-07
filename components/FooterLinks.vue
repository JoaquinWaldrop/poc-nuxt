<template>
  <div class="footer__links-container row">
    <ul class="footer__links col-xs-12 col-md-6 center-xs start-md">
      <li v-for="(item, i) in items" :key="i" class="footer__link-item">
        <div v-if="i != 0">
          <a :href="item.url">
            <img
              src="~/assets/images/linked-in.svg"
              :alt="item.url"
              class="footer__icon"
            />
          </a>
        </div>
        <div v-else class="footer__email">
          <a :href="item.url">
            <img
              src="~/assets/images/linked-in.svg"
              :alt="item.url"
              class="footer__icon"
            />
          </a>
          <a :href="item.url" class="footer__text">{{ item.url }}</a>
        </div>
      </li>
    </ul>
    <div class="footer__copyright col-xs-12 col-md-6 center-xs end-md">
      {{ copyRight }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { url: 'info@s4n.co', icon: '~/assets/images/ic-mail.svg' },
        {
          url: 'www.linkedin.com/s4n',
          icon: '~/assets/icons/linked-in.svg'
        },
        { url: 'www.youtube.com', icon: '~/assets/images/youtube.svg' }
      ],
      copyRight: `© Copyright ${new Date().getFullYear()} S4N`
    }
  }
}
</script>
