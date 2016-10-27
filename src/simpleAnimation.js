import TweenMax from 'gsap/src/minified/TweenMax.min.js'

export default function simpleAnimation () {
  const box = document.querySelector('#box')
  const time = 1
  TweenMax.to(box, time, {
    delay: 1,
    x: 200,
    y: 200,
    onComplete () {
      TweenMax.to(box, time / 2, {
        x: 0,
        y: 0
      })
    }
  })
}
