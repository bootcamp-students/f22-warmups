function countGrade(scores){
  //coding here...
  let returnGrades = {
    S : 0,
    A : 0,
    B : 0,
    C : 0,
    D : 0,
    X : 0
  };
  
  returnGrades.S = scores.filter(x=>x==100).length;
  returnGrades.A = scores.filter(x=>x>=90&&x<100).length;
  returnGrades.B = scores.filter(x=>x>=80&&x<90).length;
  returnGrades.C = scores.filter(x=>x>=60&&x<80).length;
  returnGrades.D = scores.filter(x=>x>=0&&x<60).length;
  returnGrades.X = scores.filter(x=>x<0).length;
  return returnGrades;
  };
