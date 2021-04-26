// Mobile menu
document.getElementById('mobile-menu-trigger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('navigation').classList.toggle('active');
});

document.getElementById('navigation').addEventListener('click', function() {
  this.classList.toggle('active');
  document.getElementById('ftrs').classList.toggle('hide');
});


// Tabs section
let tabNavigationBlocks = document.querySelectorAll('.tab-section nav ul li');
let tabContentBlocks = document.querySelectorAll('.tab-section .tab-content');

function removeActiveNavigation() {
  for (let tab of tabNavigationBlocks) {
    tab.classList.remove('active');
  }
}

function removeActiveTabs() {
  for (let tab of tabContentBlocks) {
    tab.classList.remove('active');
  }
}

for (let tab of tabNavigationBlocks) {
  tab.addEventListener('click', function() {
    removeActiveNavigation();
    removeActiveTabs();

    this.classList.add('active');

    let index = this.dataset.slide;

    document.querySelector('.tab-section .tab-content[data-slide="'+index+'"]').classList.add('active');
    
    // swiper.slideTo(index - 1);
  })
}


// Reviews swiper
const swiper = new Swiper('.reviews-swiper', {
    slidesPerView: 1,
    autoHeight: true,

    breakpoints: {
        // when window width is >= 320px
        600: {
          slidesPerView: 2,
        },
        // when window width is >= 480px
        1000: {
          slidesPerView: 3,
        }
      },

    // autoplay: {
    //     delay: 5000
    // },

    // Optional parameters
    // loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

  });


  // FORM VALIDATION-SUBSCRIPTION

  function myFunction1() {
    var x, text;
  
    x = document.getElementById("first_name").value;
    if (isNaN(x)) {
      text = "";
    } 
    else if (x === "") {
      text = "Please fill first field";
    } 
    
    else {
      text = "Please use only letters on First name field";
    }
  
    document.getElementById("error-name").innerHTML = text;
  
  }
  
  function myFunction2() {
    var x, text;
  
    x = document.getElementById("last_name").value;
    if (isNaN(x)) {
      text = "";
    } 
    else if (x === "") {
      text = "Please fill second field";
    } 
    
    else {
      text = "Please use only letters Surname fields";
    }
  
    document.getElementById("error-surname").innerHTML = text;
  
  }
  
  
  function myFunction3() {
    var x, text;
  
    x = document.getElementById("numb").value;
    if (isNaN(x)) {
      text = "Please use numbers on phone field";
    } 
    else if (x === "") {
      text = "Please fill third field";
    } 
    
    else {
      text = "";
    }
  
    document.getElementById("error-number").innerHTML = text;
  
  }


    // FORM VALIDATION-CONTACT


    function myFunction4() {
      var x, text;
    
      x = document.getElementById("first-name-contact").value;
      if (isNaN(x)) {
        text = "";
      } 
      else if (x === "") {
        text = "Please fill first field";
      } 
      
      else {
        text = "Please use only letters on First name field";
      }
    
      document.getElementById("error-name-contact").innerHTML = text;
    
    }
    
    function myFunction5() {
      var x, text;
    
      x = document.getElementById("last-name-contact").value;
      if (isNaN(x)) {
        text = "";
      } 
      else if (x === "") {
        text = "Please fill second field";
      } 
      
      else {
        text = "Please use only letters on Surname field";
      }
    
      document.getElementById("error-surname-contact").innerHTML = text;
    
    }
    
    
    function myFunction6() {
      var x, text;
    
      x = document.getElementById("phone-number-contact").value;
      if (isNaN(x)) {
        text = "Please use numbers on phone field";
      } 
      else if (x === "") {
        text = "Please fill third field";
      } 
      
      else {
        text = "";
      }
    
      document.getElementById("error-number-contact").innerHTML = text;
    
    }

