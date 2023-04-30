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

  console.log(productValue);

  // instance = M.FormSelect.getInstance(refs.productSelect);
  console.log(instance.getSelectedValues()[0]);

  const markUp = countProductCut(PRODUCTS[productValue], amountValue);
  refs.output.innerHTML = markUp;
}

function create(params) {}
