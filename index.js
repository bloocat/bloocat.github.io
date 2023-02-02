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