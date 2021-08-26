//console.log("hello fauzi")

let myImg = document.querySelector('img');

myImg.onclick =function(){
  let mySrc = myImg.getAttribute('src');
    if(mySrc === "Capture.JPG"){
       myImg.setAttribute('src', "Capture2.JPG");
   }
   else if(mySrc === "images/Capture2.JPG"){
       myImg.setAttribute('src', "Capture3.JPG");
   }
    else{
       myImg.setAttribute('src', "Capture.JPG");
   }
}

//let btn1 = document.querySelector('#btn1');
//let btn2 = document.querySelector('#btn2');
//btn1.addEventListener('click' , () => {
//    img.src = 'images/Capture.JPG';
//})
//btn2.addEventListener('click', () => {
 //   img.src = 'images/Capture2.JPG';
//})
//function btn(){
 //  let image = document.getElementById('img');
 //   let images = ['images/Capture.JPG','images/Capture2.JPG'];

 //   let random = Math.floor(Math.random() * 2);
 //image.src = images[random];
//}
