function animationsSimplified() {
  let elementsToSpin = document.querySelectorAll('.simplified_spin')
  let elementsToFadeIn = document.querySelectorAll('.simplified_fadeIn')
  let elementsToBounce = document.querySelectorAll('.simplified_bounceIn')
  let elementsToBlink = document.querySelectorAll('.simplified_blink')
  let elementsToMoveUp = document.querySelectorAll('.simplified_moveDown')
  let elementsToShrinkHorizontally = document.querySelectorAll('.simplified_horizontal_shrink')
  let elementsToVibrateHorizontal = document.querySelectorAll('.simplified_vibrate_horizontal')

  elementsToSpin.forEach(element => {
    element.animate([
      { transform: 'rotate(360deg)' }
    ], {
      duration: 1000,
      iterations: Infinity
    })
  })

  elementsToFadeIn.forEach(element => {
    element.animate([
      { opacity: 0 },
      { opacity: 1 }
    ], {
      duration: 1000,
      iterations: Infinity
    })
  })

  elementsToBounce.forEach(element => {
    element.animate([
      { opacity: 0, transform: 'scale(0.3) translate3d(0,0,0)' },
      { opacity: 0.9, transform: 'scale(1.1)' },
      { opacity: 1, transform: 'scale(0.89)' },
      { opacity: 1, transform: 'scale(1) translate3d(0,0,0)' }
    ], {
      duration: 1000,
      iterations: Infinity
    })
  })

  elementsToBlink.forEach(element => {
    element.animate([
      { opacity: 0 },
      { opacity: .5 },
      { opacity: 1 }
    ], {
      duration: 1000,
      iterations: Infinity
    })
  })

  elementsToMoveUp.forEach(element => {
    element.animate([
      { top: '0px' },
      { top: '20px' },
      { top: '40px' }
    ], {
      duration: 1000,
      iterations: 5
    })
  })

  elementsToShrinkHorizontally.forEach(element => {
    element.animate([
      { width: '100px' },
      { width: '70px' },
      { width: '40px' },
      { width: '10px' },
    ], {
      duration: 1000,
      iterations: Infinity
    })
  })

  elementsToVibrateHorizontal.forEach(element => {
    element.animate([
      { transform: 'translate3d(-1px, 0, 0)' },
      { transform: 'translate3d(2px, 0, 0)' },
      { transform: 'translate3d(-4px, 0, 0)' },
      { transform: 'translate3d(4px, 0, 0)' },
      { transform: 'translate3d(2px, 0, 0)' }
    ], {
      duration: 1000,
      iterations: Infinity
    })
  })
}

module.exports.animationsSimplified = animationsSimplified;