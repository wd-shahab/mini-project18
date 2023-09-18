const $ = document;

const advice_Id = $.querySelector("#advice_Id")
const advice_Text = $.querySelector("#advice_Text")
const btn = $.querySelector("#btn")


function fetchdata () {
  let data = fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => data)

  return data
}

async function setAdvice(){
  let advice = await fetchdata()

  console.log(advice)
  advice_Id.innerHTML = `advice #${advice.slip.id}`
  advice_Text.innerHTML = `“${advice.slip.advice}”`;
}

//////////// set event ///////////

btn.addEventListener("click", setAdvice)
window.addEventListener("load", setAdvice)
