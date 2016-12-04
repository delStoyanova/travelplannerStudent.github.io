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
                ' <img  onclick="AddLikes(' + count + ')" id="like' + count + '" src="img/like.jpg">' +
                ' <img  onclick="RemoveLikes(' + count + ')" id="dislike' + count + '" src="img/dislike.jpg"> ');

            count++;
            document.getElementById("share").value = "";

        }
    });

});
/*the functions for incrementing and decrementing likes are similar, they use a parameter send by the button click
 for finding the corresponding span tag; the content is put in variable then the first two digits are turned into integer
 that integer is changed according to which button is pressed
 */
function AddLikes(c) {

    var n = document.getElementById('countedlikes' + c + '').innerHTML;
    var likes = parseInt(n.substr(0, 2));
    document.getElementById('countedlikes' + c + '').innerHTML = "";
    likes = likes + 1;
    document.getElementById('countedlikes' + c + '').innerHTML = likes + ' Likes';


}
function RemoveLikes(c) {
    var n = document.getElementById('countedlikes' + c + '').innerHTML;
    var likes = parseInt(n.substr(0, 2));
    document.getElementById('countedlikes' + c + '').innerHTML = "";
    likes = likes - 1;
    if (likes <= 0) {
        likes = 0;
        document.getElementById('countedlikes' + c + '').innerHTML = likes + ' Likes';
    } else {
        document.getElementById('countedlikes' + c + '').innerHTML = likes + ' Likes';
    }

}
