$(document).ready(function(){
    $("#peopleSearchForm").submit(function (event) {
        event.preventDefault();
        var values = {};
        $.each($(this).serializeArray(), function (i, field) {
            values[field.name] = field.value;
        });
        //console.log($(this).serializeArray());
        console.log(values);



        $.ajax({
            type: "GET",
            url: '/data',
            data: values,
            success: function (data) {
                appendDom(data);
                console.log(data);
            }
        });
    });
});

function appendDom(data){
    var $el = $("#display");
    $el.empty();
    for (var entry=0; entry < data.length; entry++) {
        var person = data[entry];
        $el.append("<div class='returnedPerson well col-md-3'></div>");
        $el.children().last().hide();
        $el.children().last().append("<p id='returnedName'>Name: " + person.name + "</p>");
        $el.children().last().append("<p id='returnedAnimal'>Spirit Animal: " + person.animal + "</p>");
        $el.children().last().delay(300*entry).fadeIn();
    }
}
