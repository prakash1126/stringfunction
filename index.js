var inputRef=document.getElementById("input");
var charRef=document.getElementById("character");
var wordRef=document.getElementById("word");
var spaceRef=document.getElementById("space");
function calculate(){
    var myString=inputRef.value;
    // console.log(myString);
    //wordcount
    var myWords=myString.split(" ");
    var words=0;
    myWords.map((word, index)=> {
        if(word.length>0){
            words++;
        } 
    });
    console.log(words);
    wordRef.innerHTML= words;
    //spacecount
    var myCharacter=myString.split("");
    var space =0;
    myCharacter.forEach((chars,index)=>{
        if(chars== " "){
            space++;
        }
    });
    spaceRef.innerHTML = space;

    //charactercount
    charRef.innerHTML = myString.length;
}