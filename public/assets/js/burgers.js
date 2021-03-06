$(function() {
    $(".devour").on("click", function(event) {
        var id = $(this).data("burgerid");
        var devoured = true;

        var burgerDevoured = {
            devoured: devoured
        };
  
      // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerDevoured
        }).then(
            function() {
                console.log("changed devoured to", devoured);
                // Reload the page to get the updated list
                location.reload();
        });
    });
  
    $("#addBurger").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var name = $("#burgerName").val().trim();

        var newBurger = {
            burger_name: name
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
        });
    });
});