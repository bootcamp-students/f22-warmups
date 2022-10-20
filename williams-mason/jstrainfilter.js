function countGrade(scores){
    let S=scores.filter(score=>score===100);
    let A=scores.filter(score=>score<100&&score>=90);
    let B=scores.filter(score=>score<90&&score>=80);
    let C=scores.filter(score=>score<80&&score>=60);
    let D=scores.filter(score=>score<60&&score>=0);
    let X=scores.filter(score=>score===-1);
    let gradeObject = {S:S.length,
                       A:A.length,
                       B:B.length,
                       C:C.length,
                       D:D.length,
                       X:X.length,
           }
          
    return(gradeObject);
  //   let A=scores.filter(score=>score<100&&score>=99);
    
    
  }