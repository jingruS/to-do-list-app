
  function newItem() {
  
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
  
  
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      $('.list').append(li);
    }
  //2. Crossing an item out:
    li.on("click",  crossOut);
    
    function crossOut() {
      li.toggleClass("strike");
    }
  
  
  //3. Adding a delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
  
    crossOutButton.on("click", deleteListItem);
    
    function deleteListItem(){
      li.addClass("delete")
    }
     
     $('.list').sortable();
     }

    
    
    
    
    
    
    
    
    
    
    