var elForm = document.querySelector(".form-name");
var elForm2 = document.querySelector(".form-name-2");
var elInput = elForm.querySelector(".input-name");

var elReference = document.querySelector(".reference");
var elList = document.querySelector(".list");
List = [];
elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  List.push(elInput.value.trim());
  elInput.value = null;
  console.log(List);

  for(var product of List){
    var newElement = document.createElement('li');
    newElement.textContent = product;
  }
  elList.appendChild(newElement);
  console.log(newElement);
});

elForm2.addEventListener("submit", function(e) {
  e.preventDefault();
var elInput2 = elForm2.querySelector(".input-name-2");
  
if (List.includes(elInput2.value)){
  elReference.textContent = "Bu nom ro'yxatda bor";
}
else{
  elInput.value = elInput2.value;
  elInput.focus();
  elReference.textContent = "Ro'yxatda bu nom yo'q.Qo'shishni Istaysizmi!?";
}
elInput2.value = null
})
