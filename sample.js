
const div=document.getElementsByTagName('div')
const button=document.getElementsByTagName('button')
const form= document.getElementsByTagName('form')[0]

form.onsubmit=()=>{return false}





//set initialDepartment
let selectedDepartment="";

const departmentsValue= document.getElementById("department")

//pick department 
 departmentsValue.addEventListener("input", e=>selectedDepartment=e.target.value)

//for current tab
let current_div=0
div[current_div].style.display='block'
if(current_div==0){
    button[0].style.display='none'
}


button[1].onclick=()=>{
   current_div++
   let back_div=current_div - 1
   if ((current_div >0) && (current_div < 16)){
     button[0].style.display='block'
     div[current_div].style.display='block'
     div[back_div].style.display='none'
        if(current_div==13){
           button[1].innerHTML='submit'
           //Sends mail via submit button
           button[1].addEventListener("click", sendMail(selectedDepartment))
           //Add hr mail here
           button[1].addEventListener("click", sendMail("aderonkeAwobotu@bosakMFB.com"))
         }
          else{
           if(current_div > 13){
               form.onsubmit=()=>{return true}
            }
         }
     }
 }

 button[0].onclick=()=>{
    if (current_div > 0)
    {
      current_div--
      let back_div=current_div + 1
       div[current_div].style.display='block'
       div[back_div].style.display='none'   
       if(current_div < 13){
      button[1].innerHTML='Next'
     }
       if(current_div==0){
         button[0].style.display='none'
       }


   }
 }





function sendMail(email){
  let data = {
    service_id: 'service_edymp55',
    template_id: 'template_73isxok',
    user_id: 'vY1b2cNn_swXPcfx8',
    template_params:{
      receiver:email
    }
    
  };
  axios.post("https://api.emailjs.com/api/v1.0/email/send", data).then((data)=>console.log(data, "data")).catch(err=>console.log(err, "err"))
}