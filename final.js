function matchWinner(teamAGoals, teamBGoals) {
  if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
    return "Invalid";
  } else if (teamAGoals > teamBGoals) {
    return "Team A Won";
  } else if (teamAGoals === teamBGoals) {
    return "Draw";
  } else {
    return "Team B Won";
  }
}

function isElevatorSafe(weights) {
  if (!Array.isArray(weights)) {
    return "Invalid";
  }

  let totalWeight = 0;

  for (let i = 0; i < weights.length; i++) {
    totalWeight = totalWeight + weights[i];
  }

  if (totalWeight <= 400) {
    return true;
  } else {
    return false;
  }
}

function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  }
  if (tokensUsed <= 500) {
    return 0;
  }
  let extraTokens = tokensUsed - 500;
  let extraHundreds = Math.floor(extraTokens / 100);
  let totalCost = extraHundreds * 5;
  return totalCost;
}

console.log(calculateAiCost(620));
