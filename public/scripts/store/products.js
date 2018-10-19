console.log("File Loaded");
$( ".product-selector" ).click(function() {
    var mode = $( this ).css("border-color");
    console.log(mode);
    if (mode == "rgb(128, 128, 128)") {
      
      console.log("Grey");
      $( this ).siblings( ".product" ).addClass( "product-clicked" );
      $( this ).children( "i" ).css("display", "inline");
      $( this ).css("border-color", "#81C784");
    } else {
      console.log("Not Grey");
      $( this ).siblings( ".product" ).removeClass( "product-clicked" );
      $( this ).children( "i" ).css("display", "none");
      $( this ).css("border-color", "grey");
    }
  });