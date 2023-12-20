<script setup lang="ts">
import { useShopStore } from '~/stores/shop';
import { useDisplay } from 'vuetify';

const { smAndDown } = useDisplay();
const shopStore = useShopStore();

const title = computed<string>(() => {
	return shopStore.getShopName;
});

const description = computed<string>(() => {
	return shopStore.getShopDescription;
});

const image = computed<{src: string, alt: string}>(() => {
	const seed = Math.floor(Math.random() * 1000);
	return {
		src: `https://picsum.photos/seed/${seed}/800/600`,
		alt: `Random image ${seed}`
	};
});

</script>

<template>
  <v-row
    id="landing-hero"
    justify="center"
    justify-md="space-between"
    align-md="center"
    :no-gutters="smAndDown"
  >
    <v-col
      cols="12"
      md="auto"
    >
      <h1 class="text-primary">
        {{ title }}
      </h1>
      <h2 class="text-primary">
        {{ description }}
      </h2>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <v-img
        :src="image.src"
        :alt="image.alt"
        :cover="smAndDown"
        :height="smAndDown ? '100%' : undefined"
        lazy-src="/android-chrome-512x512.png"
        aspect-ratio="1"
      />
    </v-col>
  </v-row>
</template>

<style scoped>
#landing-hero h1 {
  font-size: 3rem;
}

#landing-hero h2 {
  font-size: 1.5rem;
}
</style>