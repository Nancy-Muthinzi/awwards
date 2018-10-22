$(document).ready(function() {
  var score1,
    score2,
    score3,
    score4,
    score5,
    score6,
    score7,
    score8,
    score9,
    score10;
  $("input:radio[name=rate]").change(function() {
    if (this.value == 1) {
      score1 = 1;
      console.log(score1);
    } else if (this.value == 2) {
      score1 = 2;
      console.log(score2);
    } else if (this.value == 3) {
      score1 = 3;
      console.log(score3);
    } else if (this.value == 4) {
      score1 = 4;
      console.log(score4);
    } else if (this.value == 5) {
      score1 = 5;
      console.log(score5);
    } else if (this.value == 6) {
      score1 = 6;
      console.log(score6);
    } else if (this.value == 7) {
      score1 = 7;
      console.log(score7);
    } else if (this.value == 8) {
      score1 = 8;
      console.log(score9);
    } else if (this.value == 9) {
      score1 = 9;
      console.log(score10);
    } else if (this.value == 10) {
      score1 = 10;
      console.log(score8);
    }
  });
});

function Rate() {
  this.totalScore = 0;
  this.averageScore = 0;
}
Rate.prototype.total = function(
  sc1,
  sc2,
  sc3,
  sc4,
  sc5,
  sc6,
  sc7,
  sc8,
  sc9,
  sc10
) {
  this.totalScore = sc1 + sc2 + sc3 + sc4 + sc5 + sc6 + sc7 + sc8 + sc9 + sc10;
  return this.totalScore;
};
Rate.prototype.average = function() {
  this.averageScore = (this.totalScore / 50) * 100;
  return this.averageScore;
};
