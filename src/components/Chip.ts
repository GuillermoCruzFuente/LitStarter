import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("chip-element")
export class Chip extends LitElement {
	static styles = css`
		div {
			background-color: #444;
			border-radius: 3rem;
			padding: 0.25rem 0.5rem 0.15rem 0.5rem;
			color: #999;
			user-select: none;
			border: dashed 2px transparent;
			font-weight: 900;
			font-size: 0.5rem;
			line-height: 1;
			transition: transform 200ms, border 200ms, box-shadow 200ms,
				color 200ms;
			transition-timing-function: ease;
			text-transform: uppercase;
		}

		div:hover {
			transform: scale(1.1);
			border: dashed 2px #999;
			box-shadow: 0px 0px 30px 10px #ffffff12;
			color: #fff;
		}
	`;

	@property({ type: String })
	text?: string = "chip";

	render() {
		return html` <div>${this.text}</div> `;
	}
}
