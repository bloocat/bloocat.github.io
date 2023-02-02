var iframe = document.getElementById("ifr");
var elmnt = iframe.contentWindow//.document.body;

function myFunction() {
    var iframe = document.getElementById("ifr");
    var elmnt = iframe.contentWindow//.document.body;
    //alert(document.getElementById('execCode').value)
    try{
    elmnt.eval(document.getElementById('execCode').value)
  }catch(e){
      alert(e)
  }
  }

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
      addResult(code, elmnt.eval(code));
    } catch (err) {
      addResult(code, err);
    }

    consoleInput.value = "";
    historyContainer.scrollTop = historyContainer.scrollHeight;
  }
});
