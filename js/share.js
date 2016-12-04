/**
 * Created by Delyana on 4.12.2016 .
 */
$(document).ready(function () {
    var likes = 0;
    var count = 0;

    $('#post').click(function () {
        var text = $('textarea[name=share]').val();
        //validation if the text is empty, it should not be posted
        if (text == "") {
            alert("Please write a story in order to post it.");
        }
        else {

            /* then the text is not empty, new children objects are created in the .list parent div
             count is used to create span tags with different ids, and their like and dislike buttons send that count variable as
             a parameter for the functions
             */
            $('.list').append('<p class="posted" >' + text + '</p> <span id="countedlikes' + count + '">0 Likes</span>' +
                ' <img class="buttonlikes"  onclick="AddLikes(' + count + ')" id="like' + count + '" src="img/like.jpg">' +
                ' <img class="buttonlikes"  onclick="RemoveLikes(' + count + ')" id="dislike' + count + '" src="img/dislike.jpg">' +
                '<hr class="featurette-divider"> ');

            count++;
            document.getElementById("share").value = "";

        }
       /* $('.buttonlikes').click(function () {
            $(this).addClass('active');
        });*/
        $(".buttonlikes").mousedown(function () {


            var top = parseInt($(this).css("margin-bottom"));

            var left= parseInt($(this).css("margin-left"));

            top = top + 3;

            left = left + 3;

            $(this).css("margin-bottom", top + "px").css("margin-left", left + "px");


        }).mouseup(function () {

            var top = parseInt($(this).css("margin-top"));

            var left = parseInt($(this).css("margin-left"));

            top = top - 3;

            left = left - 3;

            $(this).css("margin-bottom", top + "px").css("margin-left", left + "px");

        });
    });

});
/*the functions for incrementing and decrementing likes are similar, they use a parameter send by the button click
 for finding the corresponding span tag; the content is put in variable then it is turned into integer
 that integer is changed according to which button is pressed
 */
function AddLikes(c) {

    var n = document.getElementById('countedlikes' + c + '').innerHTML;
    //var likes = parseInt(n.substr(0, 4));
    var likes = parseInt(n);
    document.getElementById('countedlikes' + c + '').innerHTML = "";
    likes = likes + 1;
    document.getElementById('countedlikes' + c + '').innerHTML = likes + ' Likes';


}
function RemoveLikes(c) {
    var n = document.getElementById('countedlikes' + c + '').innerHTML;
    var likes = parseInt(n);
    document.getElementById('countedlikes' + c + '').innerHTML = "";
    likes = likes - 1;
    if (likes <= 0) {
        likes = 0;
        document.getElementById('countedlikes' + c + '').innerHTML = likes + ' Likes';
    } else {
        document.getElementById('countedlikes' + c + '').innerHTML = likes + ' Likes';
    }

}
