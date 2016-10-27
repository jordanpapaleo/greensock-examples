export function concavePolygon (sides, center, radius) {
  if (sides % 2 === 0) {
    console.error('Concave polygons must have odd number of sides')
    return []
  }
  const sortedPoints = []
  const points = convexPolygon(sides, center, radius)

  getNext(points, 0, sortedPoints)

  return sortedPoints
}

export function convexPolygon (sides, center, radius) {
  const points = []
  const degrees = 360 / sides

  if (sides > 2) {
    while (sides) {
      points.push(
        getPoint(center, radius, (degrees * sides))
      )

      sides--
    }
  }

  return points
}

function getNext (array, i, sortedArray) {
  if (sortedArray.length === array.length) {
    return
  }

  if (i === 0) {
    sortedArray.push(array[i])
  }

  const split = Math.floor(array.length / 2)
  let next = i + split

  if (next > array.length) {
    next = i - split - 1
  }

  sortedArray.push(array[next])
  getNext(array, next, sortedArray)
}

// parametric equation
function getPoint (center, radius, angle) {
  const radians = toRadians(angle)

  return [
    center[0] + radius * Math.sin(radians),
    center[1] + radius * Math.cos(radians)
  ]
}

function toRadians (degrees) {
  return (degrees * Math.PI) / 180
}
