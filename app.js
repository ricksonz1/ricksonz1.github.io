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
`For CW:
Task ID:
Website URL:
       
Instruction(s):
       


Concern(s):`;
}else if(s1.value == "fdg"){
textarea.value = 
`For FDG:
Task ID:
Website URL:
           
Instruction(s):
           


Concern(s):`
}else if(s1.value == "design"){
textarea.value = 
`For Design:
Task ID:
Website URL:
           
Instruction(s):
           
   

Concern(s):`
}else if(s1.value == "web2"){
textarea.value = 
`For Web2:
Task ID:
Website URL:
           
Instruction(s):
           


Concern(s):`
}else if(s1.value == "seo"){
textarea.value = 
`For SEO:
Task ID:
Website URL:
           
Concern(s):
Hi team, kindly do SEO related processes. Thanks`
}else if(s1.value == "webcon"){
textarea.value = 
`For Webcon:
Task ID:
Website URL:
          
Instruction(s):


Concern(s):`
}



}