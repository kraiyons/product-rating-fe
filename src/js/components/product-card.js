class ProductCard extends HTMLElement {
  constructor() {
    super();

    this.productName = '';
    this.averageReviewScore = '';
  }

  connectedCallback() {
    this.productName = this.getAttribute('productName');
    this.averageReviewScore = this.getAttribute('averageReviewScore');

    this.render();
  }

  render() {
    this.innerHTML = `
        <div style="text-align: center; font-family: sans-serif">
          <h1>${this.productName}</h1>
          <p>${this.averageReviewScore}</p>
        </div>
        `;
  }
}

export default ProductCard;
