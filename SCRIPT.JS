function checkSymptoms(){

let chestPain=document.getElementById("chestPain").checked;
let breath=document.getElementById("breath").checked;
let weightLoss=document.getElementById("weightLoss").checked;
let fatigue=document.getElementById("fatigue").checked;

let result=document.getElementById("result");

if(chestPain && breath){
result.innerHTML="Possible Heart Risk. Please consult a doctor.";
}

else if(weightLoss && fatigue){
result.innerHTML="Possible Cancer Symptoms. Medical checkup recommended.";
}

else if(chestPain || breath || weightLoss || fatigue){
result.innerHTML="Some symptoms detected. Monitor your health.";
}

else{
result.innerHTML="No major symptoms selected.";
}

}