import TweenMax from 'gsap/src/minified/TweenMax.min.js'
import TimelineMax from 'gsap/src/minified/TimelineMax.min.js'
import {concavePolygon, convexPolygon} from './geometry'

export default function timeline () {
  const timeline = new TimelineMax({
    paused: false
  })
  const duration = 0.75

  const pageCenter = [window.innerWidth / 2, window.innerHeight / 2]
  let points = [ pageCenter ]
  const data = concavePolygon(5, pageCenter, 200)
  // const data = convexPolygon(5, pageCenter, 200)

  if (data.length) {
    points = points.concat(data)
    points.push(data[0])
  }

  TweenMax.to('#box', 0, {
    x: pageCenter[0],
    y: pageCenter[1]
  })

  // points.forEach((point, i) => {
  //   timeline.to('#box', duration, {
  //     ease: window.Quad.easeOut,
  //     x: point[0],
  //     y: point[1]
  //   })
  // })

  timeline.from('#box', duration, {
    scale: 10,
    opacity: 0,
    ease: window.Back.easeOut
  })

  /*
  timeline.stop()
  timepline.play()
  timeline.pause()
  timeline.reverse()
  */
}
