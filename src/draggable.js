import TweenMax from 'gsap/src/minified/TweenMax.min.js'
import Draggable from 'gsap/src/minified/utils/Draggable.min.js'

export default function draggable () {
  const container = document.querySelector('.drag-container')

  const div = document.createElement('div')
  div.classList = 'tile'
  console.dir(div.classList)

  Draggable.create(div, {
    bounds: container,
    onDrag (e) {
      console.log('onDrag', e)
    },
    onPress (e) {
      console.log('onPress', e)
    },
    onRelease (e) {
      console.log('onRelease', e)
    }
  })

  container.appendChild(div)
}
