var iframe = document.getElementById("ifr");
var elmnt = iframe.contentWindow//.document.body;
var historyVar  = [];
var historyNum = 0;

  //console
  const consoleInput = document.querySelector(".console-input");
const historyContainer = document.querySelector(".console-history");

function addResult(inputAsString, output) {
  const outputAsString =
    output instanceof Array ? `[${output.join(", ")}]` : output.toString();
  const inputLogElement = document.createElement("div");
  const outputLogElement = document.createElement("div");

  inputLogElement.classList.add("console-input-log");
  outputLogElement.classList.add("console-output-log");

  inputLogElement.textContent = `> ${inputAsString}`;
  outputLogElement.textContent = outputAsString;

  historyContainer.append(inputLogElement, outputLogElement);
}

consoleInput.addEventListener("keyup", (e) => {
  const code = consoleInput.value.trim();

  if (code.length === 0) {
    return;
  }

  if (e.key === "Enter") {
    try {
      historyVar.push(code);
      historyNum++;
      //alert(historyVar)
      addResult(code, elmnt.eval(code));
      
    } catch (err) {
      addResult(code, err);
    }

    consoleInput.value = "";
    historyContainer.scrollTop = historyContainer.scrollHeight;
  }
});

consoleInput.addEventListener("keyup", (e) => {

  //console.log(e.key)


  if (e.key == "ArrowUp" & historyNum>0) {
    //alert('ready')
    consoleInput.value = historyVar[parseInt(historyNum)-1]
    historyNum--;
    //consoleInput.value = "";
    historyContainer.scrollTop = historyContainer.scrollHeight;
  }
});

consoleInput.addEventListener("keyup", (e) => {

  //console.log(e.key)


  if (e.key == "ArrowDown") {
    //alert('ready')
    if(historyVar[parseInt(historyNum)+1]==undefined){
      return;
    }
    consoleInput.value = historyVar[parseInt(historyNum)+1]
    historyNum++;
    //consoleInput.value = "";
    historyContainer.scrollTop = historyContainer.scrollHeight;
  }
});