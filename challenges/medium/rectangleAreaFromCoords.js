/**
 * Find the area of a rectangle given the four corners.
 * The base of the rectangle is assumed to be horizontal.
 * Note: The corners can be given in any order.
 * @param {{ x: number, y: number }[]} points - an array of 4 points, e.g. { x: 3, y: 5 }
 * @return {number} the area
*/

function rectangleAreaFromCoords (points) {
  [A,B,C,D] = points
  return math.max(A.x, B.x, C.x, D.x)-math.min(A.x, B.x, C.x, D.x)*math.max(A.y, B.y, C.y, D.y)-math.min(A.y, B.y, C.y, D.y)
}

module.exports = rectangleAreaFromCoords
