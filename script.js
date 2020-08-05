var currentDay = moment().format("LLLL");
console.log(currentDay);
$("#currentDay").text(currentDay);

var hour = new Date().getHours();
console.log(hour);

for (i = 9; i < 18; i++) {
    var id = "#hour" + i;
    var timeBlock = $(id)
    if (i < hour) {
        timeBlock.addClass("past")
    }
    else if (i > hour) {
        timeBlock.addClass("future")
    }
    else {
        timeBlock.addClass("present")
    }
}

function retrieveLocalStorage () {
    var input9 = JSON.parse(localStorage.getItem("item9"));
    $("#hour9").val(input9);
    
    var input10 = JSON.parse(localStorage.getItem("item10"));
    $("#hour10").val(input10);
    
    var input11 = JSON.parse(localStorage.getItem("item11"));
    $("#hour11").val(input11);
    
    var input12 = JSON.parse(localStorage.getItem("item12"));
    $("#hour12").val(input12);
    
    var input13 = JSON.parse(localStorage.getItem("item13"));
    $("#hour13").val(input13);
    
    var input14 = JSON.parse(localStorage.getItem("item14"));
    $("#hour14").val(input14);
    
    var input15 = JSON.parse(localStorage.getItem("item15"));
    $("#hour15").val(input15);
    
    var input16 = JSON.parse(localStorage.getItem("item16"));
    $("#hour16").val(input16);
    
    var input17 = JSON.parse(localStorage.getItem("item17"));
    $("#hour17").val(input17);
    }

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    
    var input9 = $("#hour9").val().trim();
    localStorage.setItem("item9", JSON.stringify(input9))

    var input10 = $("#hour10").val().trim();
    localStorage.setItem("item10", JSON.stringify(input10))

    var input11 = $("#hour11").val().trim();
    localStorage.setItem("item11", JSON.stringify(input11))

    var input12 = $("#hour12").val().trim();
    localStorage.setItem("item12", JSON.stringify(input12))

    var input13 = $("#hour13").val().trim();
    localStorage.setItem("item13", JSON.stringify(input13))

    var input14 = $("#hour14").val().trim();
    localStorage.setItem("item14", JSON.stringify(input14))

    var input15 = $("#hour15").val().trim();
    localStorage.setItem("item15", JSON.stringify(input15))

    var input16 = $("#hour16").val().trim();
    localStorage.setItem("item16", JSON.stringify(input16))

    var input17 = $("#hour17").val().trim();
    localStorage.setItem("item17", JSON.stringify(input17))
});

retrieveLocalStorage ()