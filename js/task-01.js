import { PRODUCTS } from "./products.js";

const refs = {
  productForm: document.querySelector(".product-form"),
  productSelect: document.querySelector(".product"),
  output: document.querySelector(".output"),
};

let instance;

document.addEventListener("DOMContentLoaded", function () {
  instance = M.FormSelect.init(refs.productSelect);
  // console.log(instance);
  // instance = M.FormSelect.getInstance(refs.productSelect);
});

refs.productForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const {
    amount: { value: amountValue },
    product: { value: productValue },
  } = e.target.elements;
  console.log(productValue);

  const selectedProduct = PRODUCTS.find((item) => item.name === productValue);
  // const markUp = countProductCut(selectedProduct, amountValue);

  const markUp = createMarkup(selectedProduct, amountValue);
  refs.output.innerHTML = markUp;
  e.target.reset();
}

function createMarkup(product, boxQuantity) {
  const { textName, parts, atBox, onPallet } = product;
  const overalQuantity = boxQuantity * atBox;

  const partsMarkup = createPartsMarkup(parts, overalQuantity);
  const palletsMarkup = createPalletsMarkup(boxQuantity, onPallet);
  return createCardMarkup({ textName, partsMarkup, palletsMarkup });
}

function createCardMarkup({ textName, partsMarkup, palletsMarkup }) {
  return `<div class="row">
              <div class="col s12">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">${textName}</span>
                      ${partsMarkup}
                      ${palletsMarkup}
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
}

function createPalletsMarkup(boxQuantity, { boxes, atRow }) {
  return `<p>
            На выходе:
            ${Math.floor(boxQuantity / boxes)} полных,
            ${boxQuantity % boxes} штук
          </p>
          <p>
            (${Math.floor((boxQuantity % boxes) / atRow)} ряда
            ${Math.floor((boxQuantity % boxes) % atRow)} штук)
          </p>`;
}

function createPartsMarkup(items, overalQuantity) {
  return items
    .map(({ textName, quantity }) => {
      return `<p>
                ${textName} (${quantity}): 
                ${Math.floor(overalQuantity / quantity)} пачек и 
                ${overalQuantity % quantity} штук
              </p>`;
    })
    .join("");
}

function countProductCut(product, boxQuantity) {
  if (!(boxQuantity >= 1)) return "";
  const { top, bottom, atBox, onPallet } = product;
  const CutQuantity = boxQuantity * atBox;

  const countCut = (quantity, cutType) =>
    `${Math.floor(quantity / cutType)} пачек и ${quantity % cutType} штук`;

  const countPallets = () =>
    `${Math.floor(boxQuantity / onPallet)} полных и ${
      boxQuantity % onPallet
    } штук`;

  if (bottom > 0) {
    return `<div class="row">
              <div class="col s12">
                <div class="card blue-grey darken-1">
                  <div class="card-content white-text">
                    <span class="card-title">Card Title</span>
                    <p>Верх (${top}): ${countCut(CutQuantity, top)}<br>
                      Низ (${bottom}): ${countCut(CutQuantity, bottom)}<br>
                      На выходе: ${countPallets()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
  }
  return `<p>Верх (${top}): ${countCut(CutQuantity, top)}<br>
  На выходе: ${countPallets()}</p>`;
}
