function useSeoSetup(config?: { title?: string, description?: string, image?: string}) {
	const defaultSeo = {
		title: config?.title || 'Template Frontend',
		description: config?.description || 'A nuxt frontend template for your next project',
		image: config?.image || 'https://picsum.photos/seed/picsum/200/300'
	};

	useSeoMeta({
		title: defaultSeo.title,
		description: defaultSeo.description,
		ogTitle: defaultSeo.title,
		ogDescription: defaultSeo.description,
		ogImage: defaultSeo.image,
		twitterTitle: defaultSeo.title,
		twitterDescription: defaultSeo.description,
		twitterImage: defaultSeo.image
	});

	useHead({
		title: defaultSeo.title,
		meta: [
			{
				name: 'description',
				content: defaultSeo.description
			},
			{
				property: 'og:title',
				content: defaultSeo.title
			},
			{
				property: 'og:description',
				content: defaultSeo.description
			},
			{
				property: 'og:image',
				content: defaultSeo.image
			},
			{
				property: 'twitter:title',
				content: defaultSeo.title
			},
			{
				property: 'twitter:description',
				content: defaultSeo.description
			},
			{
				property: 'twitter:image',
				content: defaultSeo.image
			}
		]
	});
}

export { useSeoSetup };
