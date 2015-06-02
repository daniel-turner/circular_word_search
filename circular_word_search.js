var test = function(source, target) {

  var sourceConcat = source.concat(source);

  while( sourceConcat.length < target.length) {

    sourceConcat = sourceConcat.concat(source);
  }

  if (sourceConcat.indexOf(target) > -1) {

    return true;
  };

  return false;
};

var source = "hotdog";
var target = "hotdoghotdogh";

console.log(test(source,target));