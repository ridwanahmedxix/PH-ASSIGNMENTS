function calculateAiCost(tokenUsed) {
  if (typeof tokenUsed !== "number" || tokenUsed < 0) {
    return "Invalid";
  }

  if (tokenUsed <= 500) {
    return 0;
  }

  let extraTokens = tokenUsed - 500;
  let extraHundreds = Math.floor(extraTokens / 100);
  let totalCost = extraHundreds * 5;

  return totalCost;
}

console.log(calculateAiCost(740));
