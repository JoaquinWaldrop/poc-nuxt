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
          <img
            src="~/assets/images/linked-in.svg"
            :alt="item.url"
            class="footer__icon"
            @click="copyEmailToClipboard(item.url)"
          />
          <span class="footer__text" @click="copyEmailToClipboard(item.url)">
            {{ item.url }}
          </span>
        </div>
      </li>
    </ul>
    <div v-show="textCopied" class="footer__tooltip">
      <span class="footer__tooltip-text">Copy to clipboard</span>
    </div>
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
      copyRight: `© Copyright ${new Date().getFullYear()} S4N`,
      textCopied: false
    }
  },
  methods: {
    copyEmailToClipboard(email) {
      /* Creating HTML element for use document.execCommand() which has more browser support */
      let inputField = document.createElement('input')
      inputField.value = email
      inputField.setAttribute('readonly', '')
      inputField.style = { display: 'none' }
      document.body.appendChild(inputField)
      inputField.select()

      /* Use of document.execCommand() */
      document.execCommand('copy')
      document.body.removeChild(inputField)

      /* Show the tooltip */
      this.textCopied = true

      /* Hide the tooltip */
      setTimeout(
        () => {
          this.textCopied = false
        },
        1500,
        this
      )
    }
  }
}
</script>
