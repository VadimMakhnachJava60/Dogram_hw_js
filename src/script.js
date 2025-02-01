const boxesElements = document.querySelectorAll(".gallery--item");
const detailedText = document.querySelector(".detailedContainer--title");
const detailedImg = document.querySelector(".detailedContainer--image");
for (const element of boxesElements) {
    element.addEventListener("click" , function () {
        console.log(element)
        const span = element.querySelector("span")
        detailedText.innerHTML = span.getAttribute("data-detailed-text")
        const img = element.querySelector("img")
        detailedImg.src = img.getAttribute("src")
        animateCSS(".detailedContainer--image" , "fadeIn")
    })
}
const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;
      const node = document.querySelector(element);
  
      node.classList.add(`${prefix}animated`, animationName);
  
      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
      }
  
      node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });

