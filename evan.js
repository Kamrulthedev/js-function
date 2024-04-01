/**
 * function envan numbar 
 * 
*/


function envanNumbar(numbars) {
          for(const numbar of numbars){
             if( numbar % 2 === 0){
                console.log(numbar)
             }
          }    
};

function envanNumbar(numbars) {
          for(const numbar of numbars){
             if( numbar % 2 === 1){
                console.log(numbar)
             }
          }    
};


const numbars = [12, 23, 44, 45, 65];

const envan = envanNumbar(numbars);
// console.log(envan);