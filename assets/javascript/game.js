

var arrayOfWords=["blizzard","sledge","snowboard","freezing","mistletoe","snowman"];

var userKey;
var blankSpaces = "";
var array = [];
var guesses = 15;
var win=0;
var userKey;


//Generates a random word from the arrayOfWords above.
function randomWord()
{
   return arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
}

var computerWord = randomWord();

//Generates a string version of the computerWord with all letters as underscore.
function underScore()
{
        for(i=0;i<computerWord.length;i++)
        {
        blankSpaces += "_"
        }
    return blankSpaces;    
}

var totalSpaces = underScore();
var spaceLength = totalSpaces.length;
document.getElementById("actualword").innerHTML = totalSpaces;


//function to activate when a key is pressed.
document.onkeyup=function(event)
{
    userKey = event.key;

    //Making sure that the key pressed is a letter and not something else.
    if ("abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(userKey))
    {
        
        if (computerWord.includes(userKey))
        {
            //iterating through the computerWord string.
            for(j=0;j<computerWord.length;j++)
            {
                //locating the index of the letter corresponding to the key pressed.
               if(computerWord[j] == userKey)
                {
                    array.push(j); //Adding the index of that letter into an empty array.
                }
            }
            
            // I want to grab the underscore "_" from totalSpaces that corresponds to each value of the indexes in the array and make it equal to userKey.
            for(k=0;k<array.length;k++)
            {
                //This piece of code was extracted from internet, to be able to use the function replaceAt().
                String.prototype.replaceAt=function(index, replacement) 
                {
                    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
                }
                totalSpaces = totalSpaces.replaceAt(array[k],userKey);
                document.getElementById("actualword").innerHTML = totalSpaces
                
            }
            //Reset of the array back to an empty array so the array can be generated again when another key is pressed.
            array = [];
        }
        

            //I want to make sure the key pressed was not pressed already, and substract 1 to the variable "guesses" if the key pressed is not part of the computerWord.
        if (!computerWord.includes(userKey) && !document.getElementById("letters").innerHTML.includes(userKey)) 
        {
            guesses -= 1;
            document.getElementById("guesses").innerHTML = guesses;
        }


        if (!document.getElementById("letters").innerHTML.includes(userKey))
        {
        document.getElementById("letters").innerHTML += userKey + ", ";
        }
        
        //Once all of the underscores (_) from the totalSpaces variable are changed into letters, then it should equal the value of the computerWord.
        if (totalSpaces == computerWord)
        {
            alert("You Win!!!")
            win += 1
            document.getElementById("win").innerHTML = win;
            blankSpaces = "";
            computerWord = randomWord(); //generating a new word.
            totalSpaces = underScore(); //generating the word again with only underscores.
            document.getElementById("actualword").innerHTML = totalSpaces 
            guesses=15; //resetting the amount of guesses to the initial value.
            document.getElementById("guesses").innerHTML = guesses;
            document.getElementById("letters").innerHTML = "" //resetting the guessed letters to none.
        }
        
        if (guesses == 0)
        {
            alert("Sorry, you lost!");
            blankSpaces = "";
            computerWord = randomWord();
            totalSpaces = underScore();
            document.getElementById("actualword").innerHTML = totalSpaces
            guesses=15;
            document.getElementById("guesses").innerHTML = guesses;
            document.getElementById("letters").innerHTML = ""
        }
    }

}

