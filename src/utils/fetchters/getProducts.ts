import products from "../../data/ai-products.json?url";

export interface Product {
	name: string;
	description: string;
	tags: string[];
	image: string;
}

export interface ProductsData {
	products: Product[];
}

export const getProducts = async (): Promise<ProductsData | undefined> => {
	try {
		const res = await fetch(products);
		const data = (await res.json()) as ProductsData;
		return data;
	} catch (error) {
		console.error(error);
		return undefined;
	}
};
