const quote = document.querySelector(".quote");
const adviceId = document.querySelector(".adviceId");
const btn = document.querySelector(".btn");
async function adviceGenerator(){
  let respond = await fetch("https://api.adviceslip.com/advice");
 let json = await respond.json()
 
  console.log(json);
  adviceId.innerText = `ADVICE #${json.slip.id}`
  quote.innerText =`"${json.slip.advice}"` 
}

btn.addEventListener("click",adviceGenerator )