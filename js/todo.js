/**
 * Created by Delyana on 27.11.2016 .
 */

$(document).ready(function () {


    $('#button').click(function () {
        var item = $('input[name=todoitem]').val();
        //validation: if the input field is empty, it should not be posted
        if (item == "") {
            alert("Please write an item in order to put it in the list.");
        }
        else {
            /*when the input field is not empty, a new child in the .list parent div is
             * created for each item*/
            $('.list').append('<li class="item">' + item + '</li>');
            // the input is cleared so that it is easier for the user to place new one
            document.getElementById("todoitem").value = ""

        }
    });
    //when an item is clicked, it is removed
    $(document).on('click', '.item', function () {
        $(this).remove();


    });
    //when the delete button is pressed it deleteds all tags with class item,or all items created
    $('#delete').click(function () {


        $(".item").remove();


    });
    /// making The To Do list sortable
    $("#list").sortable();


});
