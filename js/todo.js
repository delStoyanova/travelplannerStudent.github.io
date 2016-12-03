/**
 * Created by Delyana on 27.11.2016 .
 */

$(document).ready(function () {


    $('#button').click(function () {
        var item = $('input[name=todoitem]').val();
        if (item == "") {
            alert("Please write an item in order to put it in the list.");
        }
        else {

            $('.list').append('<li class="item">' + item + '</li>');
            // (' <li class="item" id='+ '"item"'+counter+' >'+ counter.toString()+". " +toAdd + '</li>');

            document.getElementById("todoitem").value = ""

        }
    });
    $(document).on('click', '.item', function () {
        $(this).remove();


    });

    $('#delete').click(function () {


        $(".item").remove();


    });
    /// making The To Do list sortable
    $("#list").sortable();


});
