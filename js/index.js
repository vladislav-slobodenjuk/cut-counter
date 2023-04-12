const PRODUCTS = {
  hartBlue: {
    top: 440,
    bottom: 220,
    atBox: 18,
    onPallet: 64,
  },
  bars: {
    top: 150,
    bottom: 0,
    atBox: 12,
    onPallet: 64,
  },
  guliver_20: {
    top: 240,
    bottom: 20,
    atBox: 20,
    onPallet: 120,
  },
  nightMix: {
    top: 300,
    bottom: 300,
    correx: 450,
    atBox: 9,
    onPallet: 50,
  },
};

function countProductCut(product, BoxQuantity) {
  const { top, bottom, atBox, onPallet } = product;
  const CutQuantity = BoxQuantity * atBox;

  const countCut = (quantity, cutType) =>
    `${Math.floor(quantity / cutType)} пачек и ${quantity % cutType} штук`;

  const countPallets = () =>
    `${Math.floor(BoxQuantity / onPallet)} полных и ${
      BoxQuantity % onPallet
    } штук`;

  if (bottom > 0) {
    return `Верх: ${countCut(CutQuantity, top)}\nНиз: ${countCut(
      CutQuantity,
      bottom
    )}\nНа выходе: ${countPallets()}`;
  }
  return `Верх: ${countCut(CutQuantity, top)}\nНа выходе: ${countPallets()}`;
}

console.log(countProductCut(PRODUCTS.hartBlue, 87));
