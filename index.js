const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let GenerateBtnEl = document.getElementById("Generate-btn"); // generate button
let randomPassEl = document.getElementById("randomPass1"); // Populate in the random div element
let randomPassEL2 = document.getElementById("randomPass2");
let Passlength = 15

GenerateBtnEl.addEventListener( "click", function(){
    randomPassEl.textContent = iteratePassword()
    randomPassEL2.textContent = iteratePassword2()
    
})

function generatePass(){
    let randNumEl = Math.floor(Math.random() * characters.length ) 
    return characters[randNumEl]
   
     
}

function iteratePassword(){
    let Randompass = ""
   
    for(let i = 0; i< Passlength; i++){
      Randompass += generatePass();
    }
    return Randompass
}

function iteratePassword2(){
    let Randompass2 = ""
   
    for(let i = 0; i< Passlength; i++){
      Randompass2 += generatePass();
    }
    return Randompass2
}





 //let t = [1,2,"dh"]

//let test = Math.floor(Math.random() * t.length )

   
  //  console.log(t[test])




