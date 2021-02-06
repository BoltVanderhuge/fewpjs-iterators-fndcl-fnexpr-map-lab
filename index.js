const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (whatev) => {
  return tutorials.map(tutorial => titleize(tutorial))
}

function titleize(sentence) {
  if(!sentence.split) return sentence;
  var _titleizeWord = function(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
      },
      result = [];
  sentence.split(" ").forEach(function(w) {
      result.push(_titleizeWord(w));
  });
  return result.join(" ");
}