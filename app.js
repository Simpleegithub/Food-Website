const icons=document.querySelectorAll('.section-1-icons i');


document.querySelector('.menu').addEventListener('click',function(){
  document.querySelectorAll('.target').forEach((item)=>{
  item.classList.toggle('change');
  })

})




let i=1;
setInterval(()=>{
   
   
    
    const icon=document.querySelector('.section-1-icons .change');
    icon.classList.remove('change');
    if(i>=icons.length){
        icons[0].classList.add('change');
        i=1;
        }
        else{

            icon.nextElementSibling.classList.add('change');
        }

        i=i+1; 
     

},4000)




