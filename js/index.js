$(function () {
   $("#btn").click(function () {
       obj = $.ajax({
           url:"test1.txt",
           async:false,
       })
       $(".div").html(obj.responseText);
   })
})