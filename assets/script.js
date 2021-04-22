$(function(){
  var txt_temp = ""
  var list = [
    "Portare a spasso il cane",
    "Fare la spesa",
    "Buttare la spazzatura"
  ];
  console.log(list)

  var arr_temp = "";

  for(i=0; i<list.length; i++){

    arr_temp = list[i]

    var toDoString = '<li>'+ arr_temp +'<i class="fas fa-trash"><i></li>';

    $('#todolist').append(toDoString)
    
  }

  $('#input-txt').keyup(function(event){
    if(event.which === 13){
      txt_temp = $(this).val();
      /* list.push(txt_temp);
      console.log(list); */
      $('#input-txt').val('');

      var toDoString = '<li>'+ txt_temp +'<i class="fas fa-trash"><i></li>';

    $('#todolist').append(toDoString)

    }
  })

  $(document).on('click', '.fa-trash',function(){
    $(this).parent().remove();
  })
})



