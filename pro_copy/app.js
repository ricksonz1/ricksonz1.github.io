let copybtn = document.querySelector('.copy-btn');
const textarea = document.querySelector('textarea');
const copybtnspan = document.querySelector('p');

//function to copy
copybtn.addEventListener("click", () => {
navigator.clipboard.writeText(textarea.value);

});

let populate = (s1) => {
    var s1 = document.getElementById(s1)

if(s1.value == "cw") {
textarea.value = 
`FOR CW:
Task ID:
Website URL:
       
Instruction(s):
       


Concern(s):`;
}else if(s1.value == "fdg"){
textarea.value = 
`FOR FDG:
Task ID:
Website URL:
           
Instruction(s):
           


Concern(s):`
}else if(s1.value == "design"){
textarea.value = 
`FOR Design:
Task ID:
Website URL:
           
Instruction(s):
           
   

Concern(s):`
}else if(s1.value == "web2"){
textarea.value = 
`FOR Web2:
Task ID:
Website URL:
           
Instruction(s):
           


Concern(s):`
}else if(s1.value == "dany"){
textarea.value = 
`FOR Geordany:
Task ID:
Website URL:
           
Instruction(s):
           


Concern(s):`
}



}