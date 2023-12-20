import { defineStore } from 'pinia';
import { useAuthStore } from '~/stores/auth';
import { useRequest } from '~/composables/useRequest';
import type { Shop, Product, Order } from '~/types';

const useShopStore = defineStore('shop', () => {
	const { post, get, patch, remove } = useRequest();
	const authStore = useAuthStore();

	const shop = ref<Shop>();

	const getShopName = computed(() => shop.value?.name ?? '');
	const getShopDescription = computed(() => shop.value?.description ?? '');

	async function createShop(shop: Shop): Promise<Shop> {
		const { data } = await post('/shops', shop, { authorization: authStore.accessToken });
		return data.value as Shop;
	}

	async function getShop(id: string): Promise<Shop> {
		const { data } = await get(`/shops/${id}`);
		return data.value as Shop;
	}

	async function indexShops(): Promise<Shop[]> {
		const { data } = await get('/shops');
		
		const fetchedShops = data.value as Shop[];
    
		if(fetchedShops.length > 0){
			shop.value = (data.value as Shop[])[0];
		}
    
		return fetchedShops;
	}

	async function updateShop(id:string, patchedShop: Partial<Shop>): Promise<Shop> {
		const { data } = await patch(`/shops/${id}`, patchedShop, { authorization: authStore.accessToken });
		return data.value as Shop;
	}

	async function deleteShop(id:string): Promise<Shop> {
		const { data } = await remove(`/shops/${id}`);
		return data.value as Shop;
	}

	return {
		shop,
		getShopName,
		getShopDescription,
		createShop,
		getShop,
		indexShops,
		updateShop,
		deleteShop
	};
});

const useProductStore = defineStore('product', () => {
	const { post, get, patch, remove } = useRequest();
	const authStore = useAuthStore();

	const products = ref<Product[]>([]);

	async function createProduct(product:Product): Promise<Product> {
		const { data } = await post('/products', product, { authorization: authStore.accessToken });
		return data.value as Product;
	}

	async function getProduct(id: string): Promise<Product> {
		const { data } = await get(`/products/${id}`);
		return data.value as Product;
	}

	async function indexProducts(): Promise<Product[]> {
		const { data } = await get('/products');
		products.value = data.value as Product[];
    
		return products.value;
	}

	async function updateProduct(id:string, patchedProduct: Partial<Product>): Promise<Product> {
		const { data } = await patch(`/products/${id}`, patchedProduct, { authorization: authStore.accessToken });
		return data.value as Product;
	}

	async function deleteProduct(id:string): Promise<Product> {
		const { data } = await remove(`/products/${id}`);
		return data.value as Product;
	}

	return {
		products,
		createProduct,
		getProduct,
		indexProducts,
		updateProduct,
		deleteProduct
	};
});

const useOrderStore = defineStore('order', () => {
	const { post, get, patch, remove } = useRequest();
	const authStore = useAuthStore();

	const orders = ref<Order[]>([]);

	async function createOrder(order:Order): Promise<Order> {
		const { data } = await post('/orders', order);
		return data.value as Order;
	}

	async function getOrder(id: string): Promise<Order> {
		const { data } = await get(`/orders/${id}`);
		return data.value as Order;
	}

	async function indexOrders(): Promise<Order[]> {
		const { data } = await get('/orders');
		orders.value = data.value as Order[];
    
		return orders.value;
	}

	async function updateOrder(id:string, patchedOrder: Partial<Order>): Promise<Order> {
		const { data } = await patch(`/orders/${id}`, patchedOrder, { authorization: authStore.accessToken });
		return data.value as Order;
	}

	async function deleteOrder(id:string): Promise<Order> {
		const { data } = await remove(`/orders/${id}`);
		return data.value as Order;
	}

	return {
		orders,
		createOrder,
		getOrder,
		indexOrders,
		updateOrder,
		deleteOrder
	};
});

export { useShopStore, useProductStore, useOrderStore };