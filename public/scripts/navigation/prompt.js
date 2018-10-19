function closePrompt() {
    console.log("Prompt Closed!");
    document.getElementById("prompt-loader").style.display = "none";
    document.getElementById("prompt").style.display = "none";
}

function promptLogIn() {
    $(function(){
      $("#prompt-loader").load("/templates/prompt/prompt-login-snipit.html"); 
    });
  }
  
  function promptSupport() {
    $(function(){
      $("#prompt-loader").load("/templates/prompt/prompt-support-snipit.html"); 
    });
  }
  
  function promptMaintenance() {
    $(function(){
      $("#prompt-loader").load("/templates/prompt/prompt-maintenance-snipit.html"); 
    });
  }