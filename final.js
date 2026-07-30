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
