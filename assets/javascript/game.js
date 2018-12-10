

var arrayOfWords=["blizzard","sledge","snowboard","freezing","mistletoe","snowman"];

var userKey;
var blankSpaces = "";
var array = [];
var guesses = 15;
var win=0;

var computerWord = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];

for(i=0;i<computerWord.length;i++){
    blankSpaces += "_"
}
// console.log(blankSpaces);
document.getElementById("actualword").innerHTML = blankSpaces;

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

document.onkeyup=function(event){
    userKey = event.key;
    // alert("you pressed the " + userKey + " key")
    if ("abcdefghijklmnopqrstuvwyz".includes(userKey)){
        if (computerWord.includes(userKey))
        {
        // alert("the key " + userKey + " is included in the word " + computerWord)

            for(j=0;j<computerWord.length;j++){
              if (computerWord[j] == userKey){
                    array.push(j); //Indexes added to the array
                }
            }
            // console.log(array);

            for(k=0;k<array.length;k++){
                blankSpaces = blankSpaces.replaceAt(array[k],userKey);
                // console.log(array)
            }
            array = [];
            document.getElementById("actualword").innerHTML = blankSpaces;
        }
        else if (!computerWord.includes(userKey) && !document.getElementById("letters").innerHTML.includes(userKey)) {
            guesses -= 1;
            document.getElementById("guesses").innerHTML = guesses;
        }
        if (!document.getElementById("letters").innerHTML.includes(userKey)){
        document.getElementById("letters").innerHTML += userKey + ", ";
        }
        if (blankSpaces == computerWord && win<2){
            // alert("You Win!!!")
            win += 1
            document.getElementById("win").innerHTML = win;
            
        }

        if (guesses == 0){
            alert("Sorry, you lost!");
        }
    }

}

