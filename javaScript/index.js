document.addEventListener('DOMContentLoaded', () => {
  // slider MORE
  const buttons = document.querySelectorAll('.item-button')
  buttons.forEach((button)=>{
      button.addEventListener('click', (event)=>{
          console.log({event})
          const button = event.target
          const parent = event.target.parentElement
          if(!parent.classList.contains('show-more')){
              parent.classList.add('show-more')
              button.innerHTML = 'LESS'
          }
          else {
              parent.classList.remove('show-more')
              button.innerHTML = 'MORE'
          }
      })
  })
  console.log({ buttons })

  // Slider
  
  $('.tarkikComandSlider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
    dots: true,
    
    responsive: [
    {
    breakpoint: 1101,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: true
    }
    },
    ]
  });

// Burger
  const burgerMenu = document.getElementById('burger-menu');
  const overlay = document.getElementById('menu');

    burgerMenu.addEventListener('click', function() {
      this.classList.toggle("close");
      overlay.classList.toggle("overlay");
      });
      overlay.addEventListener('click', function(e) {
      if (e.target.matches('a')) {
          overlay.classList.remove('overlay');
          burgerMenu.classList.remove('close');
      }  
    });
  
  // Skroll
  const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
          e.preventDefault()
          
          const blockID = anchor.getAttribute('href').substr(1)
          
          document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          })
      })
  }
})
