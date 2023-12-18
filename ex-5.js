function calculateStudentGrade(score) {
  if (score >= 0 && score <=59){
  return "F";
} else if (score >= 60 && score <=69) {
return "D";
} else if (score >= 70 && score <=79) {
  return "C"
} else if (score >= 80 && score <=89){
  return "B"
} else if (score >= 90 && score <=100){
  return "A"
} else {
  return "F"
}
}
///// console.log
let RampardGrade = calculateStudentGrade(10)
let PalpatineGrade = calculateStudentGrade(60)
let MaceWinduGrade = calculateStudentGrade(70)
let CodyGrade = calculateStudentGrade(80)
let RexGrade = calculateStudentGrade (100)
console.log(`Rampard Grade is ${RampardGrade}`)
console.log(`Palpatine Grade is ${PalpatineGrade}`)
console.log(`Mace Windu Grade is ${MaceWinduGrade}`)
console.log(`Commander Cody Grade is ${CodyGrade}`)
console.log(`Captain Rex Grade is ${RexGrade}`)