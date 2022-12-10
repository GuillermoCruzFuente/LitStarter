import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { getProducts, Product } from "../utils/fetchters/getProducts";
import "./ProductCard";

@customElement("card-layout")
export class CardLayout extends LitElement {
	static styles = css`
		section {
			display: grid;
			grid-auto-rows: auto;
			grid-template-columns: repeat(
				auto-fill,
				minmax(min(100%, 250px), 1fr)
			);
			gap: 2rem;
			margin: 0;
			margin-block: 3rem;
			width: 75%;
			margin-inline: auto;
		}
	`;

	@property({ type: Array })
	products?: Product[] = [];

	async firstUpdated() {
		const data = await getProducts();
		this.products = data?.products;
	}

	render() {
		return html`
			<section>
				${this.products?.map(
					(product) =>
						html`<product-card
							productTitle="${product.name}"
							productDescription="${product.description}"
							.productTags="${product.tags}"
							productImage="${product.image}"
						></product-card>`,
				)}
			</section>
		`;
	}
}
