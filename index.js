function animationsSimplified() {
  let elementsToSpin = document.querySelectorAll('.simplified_spin')

  elementsToSpin.forEach(element => {
    element.animate([
      { transform: 'translateY(0px)' }, 
      { transform: 'translateY(-300px)' }
    ], {
      duration: 1000,
      iterations: Infinity
    })
  })
}

module.exports.animationsSimplified = animationsSimplified;