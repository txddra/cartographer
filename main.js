/******************
 * YOUR CODE HERE *
 ******************/
const triple = function (num){
return num * 3
}
const tripleAll = function (arr){
 return arr.map(triple)
}

const getNegativeValue = function(num){
  if (num > 0){
    return num * -1;
    } else {
      return num
    }
  };


  const negativeValues = function(numArr){
    return numArr.map(getNegativeValue);
  };


  const makeQuestion = function(str){
    return str + '?'
  };

  const questionings = function(str){
    return str.map(makeQuestion)
  };

  const getInitials = function(name){
    return name[0] + name[name.indexOf(' ') + 1];
  }


const changeToInitials = function(names){
  return names.map(getInitials)
}

const doubleIfEven = function(num){
  if (num % 2 === 0){
    return num * 2
  } else {
    return num
  }
}

const doubleEven = function(nums){
  return nums.map(doubleIfEven);
};

const titleCaseNamesHelper = function(name){
  return name[0].toUpperCase()+ name.substring(1).toLowerCase()
  }

  const titleCaseNames = function (names){
    return names.map(titleCaseNamesHelper)
  }

  const doubleEveryOtherHelper = function(num, i){
    if (i % 2 === 1){ 
      return num * 2
    } else {
      return num
    }
  }

const doubleEveryOther = function(nums){
  return nums.map(doubleEveryOtherHelper)
}
/********************************
 * OUR CODE HERE - DON'T TOUCH! *
 ********************************/

if (typeof triple === 'undefined') {
  triple = undefined;
}

if (typeof tripleAll === 'undefined') {
  tripleAll = undefined;
}

if (typeof getNegativeValue === 'undefined') {
  getNegativeValue = undefined;
}

if (typeof negativeValues === 'undefined') {
  negativeValues = undefined;
}

if (typeof makeQuestion === 'undefined') {
  makeQuestion = undefined;
}

if (typeof questionings === 'undefined') {
  questionings = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleIfEven === 'undefined') {
  doubleIfEven = undefined;
}

if (typeof doubleEven === 'undefined') {
  doubleEven = undefined;
}

if (typeof changeToTitleCase === 'undefined') {
  changeToTitleCase = undefined;
}

if (typeof titleCaseNames === 'undefined') {
  titleCaseNames = undefined;
}

if (typeof doubleIfOddIndexed === 'undefined') {
  doubleIfOddIndexed = undefined;
}

if (typeof doubleEveryOther === 'undefined') {
  doubleEveryOther = undefined;
}


module.exports = {
  triple,
  tripleAll,
  getNegativeValue,
  negativeValues,
  makeQuestion,
  questionings,
  getInitials,
  changeToInitials,
  doubleIfEven,
  doubleEven,
  changeToTitleCase,
  titleCaseNames,
  doubleIfOddIndexed,
  doubleEveryOther,
}
