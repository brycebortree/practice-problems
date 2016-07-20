// input: https://www.dice.com/jobs/detail/Software-Engineer%26%2345Solutions-Ciber-Seattle-WA-98101/10122753/91748?icid=sr24-1p&q=junior%20developer&l=Seattle,%20WA
// output: <a href="https://www.dice.com/jobs/detail/Software-Engineer%26%2345Solutions-Ciber-Seattle-WA-98101/10122753/91748?icid=sr24-1p&q=junior%20developer&l=Seattle,%20WA">Dice</a>

function linkify(url){
  var link = '';
  
  var array = url.split('.');
  link = array[1];
  link = link[0].toUpperCase() + link.slice(1, link.length);
  
  return '<a href="' + url + '">' + link + '</a>';
}

linkify('https://www.dice.com/jobs/detail/Software-Engineer%26%2345Solutions-Ciber-Seattle-WA-98101/10122753/91748?icid=sr24-1p&q=junior%20developer&l=Seattle,%20WA');