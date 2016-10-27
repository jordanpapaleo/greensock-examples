export default {
  toRadians (degrees) {
    return (degrees * Math.PI) / 180
  },
  toDegrees (radians) {
    return (radians * 180) / Math.PI
  },
  sinDegrees (degrees) {
    return Math.sin(this,toRadians(degrees))
  },
  cosDegrees (degrees) {
    return Math.cos(this,toRadians(degrees))
  },
  tanDegrees (degrees) {
    return Math.tan(this,toRadians(degrees))
  },
  asinDegrees (degrees) {
    return Math.asin(this,toRadians(degrees))
  },
  acosDegrees (degrees) {
    return Math.acos(this,toRadians(degrees))
  },
  atanDegrees (degrees) {
    return Math.atan(this,toRadians(degrees))
  }
}
