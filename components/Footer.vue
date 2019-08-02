<template>
  <v-footer>
    <v-container>
      <v-layout v-show="!$vuetify.breakpoint.xs" class="layout-desktop">
        <v-flex v-for="(address, i) in addresses" :key="i">
          <div>
            <h1>{{ address.city }}</h1>
            <p>{{ address.street1 }}</p>
            <p>{{ address.street2 }}</p>
            <p>{{ address.telephone }}</p>
          </div>
        </v-flex>
      </v-layout>
      <v-layout v-show="$vuetify.breakpoint.xs" class="layout-mobile">
        <v-flex>
          <v-expansion-panels accordion>
            <v-expansion-panel v-for="(address, i) in addresses" :key="i">
              <v-expansion-panel-header>
                {{ address.city }}
              </v-expansion-panel-header>
              <p>{{ address.street1 }}</p>
              <v-expansion-panel-content>
                <p>{{ address.street2 }}</p>
                <p>{{ address.telephone }}</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-flex>
      </v-layout>
    </v-container>
    <v-divider></v-divider>
    <FooterLinks />
  </v-footer>
</template>

<script>
import FooterLinks from '~/components/FooterLinks.vue'

export default {
  components: {
    FooterLinks
  },
  data() {
    return {
      addresses: [
        {
          city: 'Bogota',
          street1: 'Cra 18 # 84 - 84',
          street2: 'Bldg. Calle 85 - Floor 4,5,6',
          telephone: '(+571) 749 8821 - 703 5882'
        },
        {
          city: 'Seattle',
          street1: '107 Spring St.',
          street2: 'Seattle, WA 98104',
          telephone: '(650) 695 - 1 289'
        },
        {
          city: 'MEDELLÍN',
          street1: 'Cra 29c # 10C - 125 ',
          street2: 'Select Business Tower - Office 802',
          telephone: '(+574) 3668113'
        }
      ],
      showAddress: null
    }
  },
  methods: {
    showFullAddress(addressIndex) {
      this.showAddress = addressIndex
    }
  }
}
</script>
