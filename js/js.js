




let navLink=document.querySelector('.navLink').children;
let main=document.querySelector('main');
let header=document.querySelector('header');



document.addEventListener('mouseover',(e)=>{
  e.preventDefault();
  if (e.target===navLink[0]) {
    setTimeout(()=>main.style.backgroundImage = "url('img/indexMain/m1.jpg')",100);
    for (var i = 0; i < navLink.length; i++) {
      navLink[i].style.borderColor="White";
    }
    e.target.style.borderColor="#f1c40f";
  }
  else if (e.target===navLink[1]) {
    setTimeout(()=>main.style.backgroundImage= "url('img/indexMain/m2.jpg')",100);
    for (var i = 0; i < navLink.length; i++) {
      navLink[i].style.borderColor="White";
    }
    e.target.style.borderColor="#f1c40f";
  }
  else if (e.target===navLink[2]) {
    setTimeout(()=>main.style.backgroundImage= "url('img/indexMain/m3.jpg')",100);
    for (var i = 0; i < navLink.length; i++) {
      navLink[i].style.borderColor="White";
    }
    e.target.style.borderColor="#f1c40f";
  }
  else if (e.target===navLink[3]) {
    setTimeout(()=>main.style.backgroundImage= "url('img/indexMain/m4.jpg')",100);
    for (var i = 0; i < navLink.length; i++) {
      navLink[i].style.borderColor="White";
    }
    e.target.style.borderColor="#f1c40f";
  }

});


// document.addEventListener('click',(e)=>{
//   e.preventDefault();
//   if (e.target===navLink[0]) {
//     setTimeout(()=>main.style.backgroundImage = "url('img/indexMain/m1.jpg')",100);
//     for (var i = 0; i < navLink.length; i++) {
//       navLink[i].style.borderColor="White";
//       navLink[i].style.width="50px";
//       navLink[i].style.height="50px";
//     }
//     e.target.style.borderColor='#f1c40f';
//     e.target.style.width="55px";
//     e.target.style.height="55px";
//   }
//   else if (e.target===navLink[1]) {
//     setTimeout(()=>main.style.backgroundImage= "url('img/indexMain/m2.jpg')",100);
//     for (var i = 0; i < navLink.length; i++) {
//       navLink[i].style.borderColor="White";
//       navLink[i].style.width="50px";
//       navLink[i].style.height="50px";
//     }
//     e.target.style.borderColor='#f1c40f';
//     e.target.style.width="55px";
//     e.target.style.height="55px";
//   }
//   else if (e.target===navLink[2]) {
//     setTimeout(()=>main.style.backgroundImage= "url('img/indexMain/m3.jpg')",100);
//     for (var i = 0; i < navLink.length; i++) {
//       navLink[i].style.borderColor="White";
//       navLink[i].style.width="50px";
//       navLink[i].style.height="50px";
//     }
//     e.target.style.borderColor='#f1c40f';
//     e.target.style.width="55px";
//     e.target.style.height="55px";
//   }
//   else if (e.target===navLink[3]) {
//     setTimeout(()=>main.style.backgroundImage= "url('img/indexMain/m4.jpg')",100);
//     for (var i = 0; i < navLink.length; i++) {
//       navLink[i].style.borderColor="White";
//       navLink[i].style.width="50px";
//       navLink[i].style.height="50px";
//     }
//     e.target.style.borderColor='#f1c40f';
//     e.target.style.width="55px";
//     e.target.style.height="55px";
//   }
//
// });
