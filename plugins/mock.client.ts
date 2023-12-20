import { useShopStore, useProductStore } from '~/stores/shop';
import type { Shop, Product } from '~/types';

//const user: User = {
//	_id: 'u1',
//	username: 'oliver',
//	password: 'chairs4sitting',
//};

const products: Product[] = [
	{
		_id: 'p1',
		shop: 's1',
		name: 'Plastic Chair',
		description: 'A plastic chair',
		price: 10,
		quantity: 5,
		images: [
			{
				_id: 'i1',
				url: 'https://images.unsplash.com/photo-1560184897-ae8a57a1b8f8',
				alt: 'Plastic Chair',
			},
		],
	}
];

const shop: Shop = {
	_id: 's1',
	owner: 'u1',
	name: 'Recycled Chairs',
	description: 'We sell used chairs',
	products: products,
};


// add some mock data to a store
export default defineNuxtPlugin(() => {
	useShopStore().shop = shop;
	useProductStore().products = products;
});