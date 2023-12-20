<script setup lang="ts">

type Feature = { title: string, description: string, image?: {src: string, alt: string}}
const features = computed<Feature[]>(() => [
	{
		title: 'Low Waste Footprint',
		description: 'Using recycled materials means less consumption of new materials. This also means less energy is used to produce new materials and less waste in landfills.',
		image: {
			src: getRandomImage(),
			alt: 'Random image'
		}
	},
	{
		title: 'High Quality Chairs',
		description: 'Our recycled chairs are made from the highest quality materials. We take pride in our products and we know you will too.',
		image: {
			src: getRandomImage(),
			alt: 'Random image'
		}
	},
	{
		title: 'Competitive Pricing',
		description: 'We offer the most competitive pricing on the market. We know you will be satisfied with our prices.',
		image: {
			src: getRandomImage(),
			alt: 'Random image'
		}
	},
	{
		title: 'Free Shipping',
		description: 'We offer free shipping on all orders over $100. We know you will be satisfied with our prices.',
		image: {
			src: getRandomImage(),
			alt: 'Random image'
		}
	},
	{
		title: 'Free Returns',
		description: 'We offer free returns on all orders. We know you will be satisfied with our prices.',
		image: {
			src: getRandomImage(),
			alt: 'Random image'
		}
	}
]);

function getRandomImage(): string {
	const seed = Math.floor(Math.random() * 1000);
	return `https://picsum.photos/seed/${seed}/800/600`;
}

</script>

<template>
  <base-card
    id="landing-features"
    color="transparent"
  >
    <v-row>
      <v-col
        id="landing-features-title"
        cols="12"
        md="4"
      >
        <h2 class="text-primary">
          Why Choose Us?
        </h2>
      </v-col>
      
      <v-col
        v-for="feature in features"
        :key="feature.title"
        cols="12"
        md="4"
      >
        <v-img
          :src="feature.image?.src"
          :alt="feature.image?.alt"
          lazy-src="/android-chrome-512x512.png"
          class="mb-2"
        />
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </v-col>
    </v-row>
  </base-card>
</template>

<style scoped>
/* landing feature title should be centered vertically and horizontally in col */
#landing-features-title {
  display: flex;
  align-items: center;
  justify-content: center;
}

#landing-features-title h2 {
  font-size: 3rem;
}
</style>