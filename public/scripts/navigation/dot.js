function openDot() {
    if ($(".dot-medium").css("display") == "block") {
        console.log("Closed Dot Menu");
        $(".dot-medium").hide();
        $("#dot-nav").html("<i class='fas fa-align-right'></i>");
    } else if ($(".dot-medium").css("display") == "none") {
        console.log("Opened Dot Menu");
        $(".dot-medium").show();
        $("#dot-nav").html("<i class='fas fa-times'></i>");
    } else {
        console.error("No Style Detected");
    }
}