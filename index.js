function animationsSimplified() {
  let elementsToSpin = document.querySelectorAll('.simplified_spin')

  elementsToSpin.forEach(element => {
    element.animate([
      { transform: 'rotate(360deg)' }
    ], {
      duration: 1000,
      iterations: Infinity
    })
  })
}

module.exports.animationsSimplified = animationsSimplified;