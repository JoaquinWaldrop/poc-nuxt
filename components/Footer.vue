<template>
  <div id="footer" class="footer">
    <!-- <v-container class="footer__cities">
      <v-layout v-show="!$vuetify.breakpoint.xs">
        <v-flex v-for="(address, i) in addresses" :key="i">
          <h1>{{ address.city }}, {{ address.country_code }}</h1>
          <div class="footer__cities-divider" />
          <p>{{ address.address_1 }}</p>
          <p>{{ address.address_2 }}</p>
          <p>Telf: {{ address.phones }}</p>
        </v-flex>
      </v-layout>
      <v-layout v-show="$vuetify.breakpoint.xs">
        <v-flex>
          <v-expansion-panels accordion>
            <v-expansion-panel v-for="(address, i) in addresses" :key="i">
              <v-expansion-panel-header>
                {{ address.city }},
                {{ address.country_code }}
              </v-expansion-panel-header>
              <p>{{ address.address_1 }}</p>
              <v-expansion-panel-content>
                <p>{{ address.address_2 }}</p>
                <p>{{ address.phones }}</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-flex>
      </v-layout>
    </v-container>-->
    <FooterAddresses :addresses="addresses" />
    <div class="footer__divider" />
    <FooterLinks />
  </div>
</template>

<script>
import FooterLinks from '~/components/FooterLinks.vue'
import FooterAddresses from '~/components/FooterAddresses.vue'

export default {
  components: {
    FooterLinks,
    FooterAddresses
  },
  data() {
    return {
      addresses: [
        {
          city: 'BOGOTÁ',
          country_code: 'COL',
          address_1: 'Cra 18 # 84 - 84',
          address_2: 'Bldg. Calle 85 - Floor 4,5,6',
          phones: '(+571) 749 8821 - 703 5882'
        },
        {
          city: 'SEATTLE',
          country_code: 'USA',
          address_1: '107 Spring St.',
          address_2: 'Seattle, WA 98104',
          phones: '(650) 695 - 1 289'
        },
        {
          city: 'MEDELLÍN',
          country_code: 'COL',
          address_1: 'Cra 29c # 10C - 125 ',
          address_2: 'Select Business Tower - Office 802',
          phones: '(+574) 3668113'
        }
      ]
    }
  }
}
</script>
