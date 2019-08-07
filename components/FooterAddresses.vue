<template>
  <div class="footer__addresses row">
    <div
      v-for="(address, i) in addresses"
      :key="i"
      class="footer__address"
      @click="showFullAddress(i)"
    >
      <div>
        <h1>{{ address.city }}, {{ address.country_code }}</h1>
        <div class="footer__addresses-divider"></div>
        <p>{{ address.address_1 }}</p>
        <div v-if="showAddress === i || !isMobile">
          <p>{{ address.address_2 }}</p>
          <p>Telf: {{ address.phones }}</p>
        </div>
      </div>
      <div class="footer__dropdown-icon">
        <img
          v-show="showAddress === i && isMobile"
          src="~/assets/images/ic-expand-more.svg"
        />
        <img
          v-show="showAddress != i && isMobile"
          src="~/assets/images/ic-expand-more.svg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addresses: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      showAddress: null,
      isMobile: false
    }
  },
  beforeMount() {
    window.innerWidth < 768 ? (this.isMobile = true) : (this.isMobile = false)
  },
  methods: {
    showFullAddress(addressIndex) {
      if (this.showAddress == addressIndex) {
        this.showAddress = null
      } else {
        this.showAddress = addressIndex
      }
    }
  }
}
</script>
