// function getPrice(originalPrice, typePromotion = "default") {
//   if (typePromotion === "preOrder") {
//     return getPreOrderPrice(originalPrice);
//   }

//   if (typePromotion === "promotion") {
//     return getPromotionPrice(originalPrice);
//   }

//   if (typePromotion === "default") {
//     return getDefaultPrice(originalPrice);
//   }
// }

function getPromotionPrice(originalPrice) {
  return originalPrice <= 200 ? originalPrice * 0.1 : originalPrice - 30;
}

function getPreOrderPrice(originalPrice) {
  return originalPrice * 0.2;
}

function getDefaultPrice(originalPrice) {
  return originalPrice;
}

const getPrice = {
  promotion: getPromotionPrice,
  order: getPreOrderPrice,
  default: getDefaultPrice,
};

console.log("-->>>", getPrice["order"](150));
