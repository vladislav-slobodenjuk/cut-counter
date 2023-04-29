import { PRODUCTS } from "./products.js";
// console.log(PRODUCTS);

const refs = {
  productForm: document.querySelector(".product-form"),
  // productSelect: document.querySelector(".product"),
  output: document.querySelector(".output"),
};

function countProductCut(product, BoxQuantity) {
  if (!(BoxQuantity >= 1)) return "";
  const { top, bottom, atBox, onPallet } = product;
  const CutQuantity = BoxQuantity * atBox;

  const countCut = (quantity, cutType) =>
    `${Math.floor(quantity / cutType)} пачек и ${quantity % cutType} штук`;

  const countPallets = () =>
    `${Math.floor(BoxQuantity / onPallet)} полных и ${
      BoxQuantity % onPallet
    } штук`;

  if (bottom > 0) {
    return `<p>Верх (${top}): ${countCut(CutQuantity, top)}<br>
            Низ (${bottom}): ${countCut(CutQuantity, bottom)}<br>
            На выходе: ${countPallets()}</p>`;
  }
  return `<p>Верх (${top}): ${countCut(CutQuantity, top)}<br>
  На выходе: ${countPallets()}</p>`;
}

// function createMarkup(product, amount) {
//   return countProductCut(PRODUCTS[product], amount);
// }

// console.log(countProductCut(PRODUCTS.hartBlue, 87));

refs.productForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const {
    amount: { value: amountValue },
    product: { value: productValue },
  } = e.target.elements;

  const markUp = countProductCut(PRODUCTS[productValue], amountValue);
  refs.output.innerHTML = markUp;
}
