function isElevatorSafe(weights) {
  if (!Array.isArray(weights)) {
    return "Invalid";
  }

  let totalWeights = 0;

  for (let i = 0; i < weights.length; i++) {
    totalWeights = totalWeights + weights[i];
  }

  if (totalWeights <= 400) {
    return true;
  } else {
    return false;
  }
}
