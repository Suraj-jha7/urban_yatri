window.onscroll = function () {
    myFunction();
  };
  
  function myFunction() {
    if (document.documentElement.scrollTop > 10) {
      document.querySelector(".nav-div").classList.add("onscroll");
    } else {
      document
        .querySelector(".nav-div")
        .classList.remove("onscroll");
    }
  }