import './styles.css';
import { Entry } from './journal';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();

    var newEntry = new Entry($('#entry').val());
    newEntry.countWords();
    newEntry.countVowels();
    newEntry.countConsonants();

    //console.log(newEntry);
    $('#numberOfVowels').text(newEntry.numberOfVowels);
    $('#numberOfWords').text(newEntry.numberOfWords);
    $('#numberOfConsonants').text(newEntry.numberOfConsonants);
    $(".output").show();
  });
});
