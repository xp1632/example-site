function validateForm(){
    for(var i =0; i<myForm.elements.length;i++){
       if(myForm.elements[i].className =='req' && myForm.elements[i].value.length ==0){

            alert('Please fill in all required fields');
            return false;
       }

    }

}