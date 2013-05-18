fs = require('fs');

fs.readFile('vefx.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  writeFile(data);
});

function writeFile (t) {
    var chars = t.split('');
    var countIndex = {};
    var count = [];
    var countI = 0;
    for (var i = 0; i < chars.length; i++) {
        if (typeof countIndex[chars[i]] == "undefined") {
            count[countI] = {key:chars[i],value:1};
            countIndex[chars[i]] = countI;
            countI++;
        }else{
            count[countIndex[chars[i]]].value++;
        }
    }
    count.sort(function compare(a, b) {
        return (a.value - b.value)*-1;
    });
    fs.writeFile('letters.js', JSON.stringify(count,null,4), function (err) {
        if (err) return console.log(err);
            console.log('words.alphabet.json done');
    });
}

/*
function loremTyaosanilesad (array) {
    

}

function loremTyaosani (array) {
    function getchar () {
        r = Math.random()*100;
        if (r > 15)
            return ' ';
        else if (r> 8)
            return ', ';
        else if (r> 6)
            return '-';
        else if (r> 4)
            return '. ';
        else if (r> 2)
            return '; ';
        else
            return '.\n';
    }
    var t = "", length = array.length -1;
    for (var i = 0; i < 100; i++) {
        t += array[Math.floor(Math.random() * length)].key;
        if (i+1 == 100) {
            t += '.';
        }else{
            t += getchar();
        }
    }
    return t;
}*/
// fs.readFile('vefx.txt', 'utf8', function (err,data) {
//   if (err) {
//     return console.log(err);
//   }
//   parse(data);
// });
// function parse (text) {
//     text = text.split(' ');
//     var words=[],
//         wordsUsage=[],
//         key = 0;

//     for (var i = 0; i < text.length; i++) {
//         var word = text[i],
//             index = words.indexOf(word);
//         if (index == -1) {
//             words[key] = word ;
//             wordsUsage[key] = 1;
//             key++;
//         }else{
//             wordsUsage[index]++;
//         }
//     }

//     var array = [];
//     for (var i = 0; i < words.length; i++) {
//         array[i] = {
//             key: words[i],
//             value:wordsUsage[i]
//         };
//     }

//     array.sort(function compare(a, b) {
//         return (a.value - b.value)*-1;
//     });

//     var toWriteText = JSON.stringify(array,null,4);

//     fs.writeFile('words.json', toWriteText, function (err) {
//       if (err) return console.log(err);
//       console.log('words.json done');
//     });
// }