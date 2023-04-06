'use strict'
// Khởi tạo biến
const info = document.querySelector('.info');
const form = document.querySelector('.form-control');
const btnSubmit = document.querySelector('.btn-primary');
const showInfo = document.getElementById('info-hidden');
const btnShow = document.getElementById('btnviewmore');

// Tạo biến để thông báo lỗi
 const displayMessage = function (message) {
   document.querySelector('#nameErrorMessage').textContent = message;
 }

// Tạo các ID để ẩn và hiện table
function openInfo() {
  $('#info').show(3000);
}
function hideInfo() {
  $('#info').hide();
}
function openForm() {
  $('#form-input').show();
}
function hideForm() {
  $('#form-input').hide();
}

//Tạo biến để check điều kiện của email khi nhập vào
  const email = document.getElementById('txtEmail');
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Băt sự kiện với nút btn
btnSubmit.addEventListener('click', function(){
  if(email.value.match(regex) &&  email.value.length !== 0){
    openInfo();
    hideForm();
  }else if(email.value.length == 0){
    displayMessage('Vui lòng nhập lại email để kiểm tra thông tin !!!')  
  }else{   
    displayMessage('Vui lòng nhập email đúng với định dạng !!!') 
   }
  });

  // Hiện thông tin khi ấn vào nút ViewMore
  function clickBtnViewMore(e){
    //Sau khi  ấn vào ViewMore thì nó hiện thông tin ra và chuyển thành nút ViewLess và ngược lại
     if( $('#btnviewmore'+ e).text().includes('More')){
      console.log($('#btnviewmore'+ e).text().includes('More'))
      $('#info-hidden'+ e).show(500); 
      $('#btnviewmore'+ e).html('<i class="bi bi-chevron-right"></i> View Less');    
     }else{
      $('#info-hidden'+ e).hide(500);
      $('#btnviewmore'+ e).html('<i class="bi bi-chevron-right"></i> View More')     
     }
  };

  



 