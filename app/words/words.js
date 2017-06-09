'use strict';
module.exports = {

 word: (str) => {
   var objCount = {}, splitStr;
   splitStr = str.split(/[\s]+/);
   splitStr.forEach(function(word) {
      if(objCount.hasOwnProperty(word)) {
        objCount[word]++; //increments word by 1 if it reoccur
      } else {
       objCount[word] = 1;
     }
    });
    return objCount;
} ;
}

