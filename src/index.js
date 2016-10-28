import './main.scss'
// import timeline from './timeline'
import draggable from './draggable'
// import simpleAnimation from './simpleAnimation'

(function () {
  'use strict'

  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded')

    const domNode = document.createElement('div')
    domNode.id = 'box'
    domNode.style.width = '100px'
    domNode.style.height = '100px'
    domNode.style.backgroundColor = 'orange'
    document.body.appendChild(domNode)
    draggable()
  })
}())
