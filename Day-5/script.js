/* Use the jQuery Object Model to execute the page */
$(document).ready(function(){
    /*Create an instance of the Mathematics object*/
    var math = new Mathematics();

    /* the id selector for events */
    $("#btnadd").on('click',function(){
          var result = math.add(parseInt( $("#txtX").val()),parseInt( $("#txtY").val()));

        $("#txtRes").val(result);
    });

    $("#btnsub").on('click',function(){

        var result = math.substract(parseInt( $("#txtX").val()),parseInt( $("#txtY").val()));
    $("#txtRes").val(result);
    });


    $("#btnmul").on('click',function(){

        var result = math.multiply(parseInt( $("#txtX").val()),parseInt( $("#txtY").val()));

    $("#txtRes").val(result);
    });

    $("#btndiv").on('click',function(){

        var result = math.divide(parseInt( $("#txtX").val()),parseInt( $("#txtY").val()));

    $("#txtRes").val(result);
    });

    $("#btnclear").on('click',function(){
       /* $("#txtX").val('');
        $("#txtY").val('');
        $("#txtRes").val('');*/

        $(".form-control").val('');
    });
});