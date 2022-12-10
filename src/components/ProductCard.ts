import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./Chip";

@customElement("product-card")
export class ProductCard extends LitElement {
	static styles = css`
		article {
			width: 100%;
			height: 100%;
			overflow: hidden;
			border-radius: 10px;
			transition: box-shadow 300ms;
			display: flex;
			flex-flow: column nowrap;
		}

		article:hover {
			box-shadow: 0px 0px 50px 10px #000;
		}

		article:hover > figure > img {
			transform: scale(1.2);
		}

		figure,
		h1,
		p {
			padding: 0;
			margin: 0;
		}

		figure {
			overflow: hidden;
			width: 100%;
			aspect-ratio: 16/9;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-grow: unset;
			flex-basis: auto;
		}

		img {
			width: 100%;
			min-height: 100%;
			object-fit: cover;
			transition: transform 300ms;
			transition-timing-function: ease;
		}

		h1 {
			color: #fff;
		}

		p {
			color: #ddd;
			font-size: 0.75rem;
		}

		div {
			display: flex;
			flex-flow: row wrap;
			align-items: center;
			justify-content: flex-start;
			gap: 1rem;
		}

		section {
			display: flex;
			flex-flow: column nowrap;
			gap: 1rem;
			background-color: #222;
			padding: 1rem;
			flex-grow: 1;
			flex-basis: auto;
		}

		button {
			background-color: #333;
			outline: none;
			border: dashed 2px transparent;
			margin-top: auto;
			color: #aaa;
			font-weight: 900;
			padding-block: 0.5rem;
			border-radius: 10px;
			text-transform: uppercase;
			font-family: inherit;
			transition: background-color 300ms, color 300ms, border 300ms;
		}

		button:hover {
			background-color: #444;
			color: #ddd;
		}

		button:focus {
			border: dashed 2px #999;
		}
	`;

	@property({ type: String })
	productTitle?: string = "title";

	@property({ type: String })
	productDescription?: string = "description";

	@property({ type: String })
	productImage?: string = "/vite.svg";

	@property({ type: Array })
	productTags?: string[] = ["white", "black", "gray"];

	render() {
		return html`
			<article>
				<figure>
					<img
						src="${this.productImage!}"
						title="${this.productTitle!}"
					/>
				</figure>
				<section>
					<h1>${this.productTitle}</h1>
					<div>
						${this.productTags!.map(
							(tag) =>
								html`
									<chip-element text="${tag}"></chip-element>
								`,
						)}
					</div>
					<p>${this.productDescription}</p>
					<button>check</button>
				</section>
			</article>
		`;
	}
}
