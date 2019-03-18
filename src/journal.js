var vowels = 'aeiou';

export function Entry(input) {
  this.text = input.toLowerCase(),
  this.numberOfWords = 0,
  this.numberOfVowels = 0,
  this.numberOfConsonants =0;
}

Entry.prototype.countWords = function () {
  this.numberOfWords = this.text.split(" ").length;
};

Entry.prototype.countVowels = function() {
  var count = 0;
  var arr = this.text.split('');
  for(var i=0; i<arr.length; i++){
    if(vowels.indexOf(arr[i]) >= 0){
      count++;
    }
  }
  // [...this.text].forEach(c =>
  //   (if(vowels.indexOf(c) >= 0){
  //     count++;
  //   }
  //   console.log(c)));
  this.numberOfVowels = count;
};

Entry.prototype.countConsonants = function () {
  //([b-df-hj-np-tv-z])\1{2

  var letters = /^[b-df-hj-np-tv-z]+$/;
  var count = 0;
  //var letters = /^[a-z]+$/;
  var arr = this.text.split('');
  for(var i=0; i<arr.length; i++){
    //if((arr[i].match(letters)) && (vowels.indexOf(arr[i]) < 0)){
    if(arr[i].match(letters)){
      count++;
    }
  }
  this.numberOfConsonants = count;

  // this.numberOfConsonents = (this.text) => {
  //   const re = ([b-df-hj-np-tv-z])\1{2
  //   return ((this.text || '').match(re) || []).length
  // }
};
