function grade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if ( score >= 70 &&  score <=89) {
    return "B";
  } else if ( score >= 55  && score <= 69) {
    return "C";
  } else if ( score >= 45 && score <=54) {
    return "D";
  } else {
    return "F";
  }
}

console.log(grade(5));