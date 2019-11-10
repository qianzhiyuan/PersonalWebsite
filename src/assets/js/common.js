/**
 *
 * @param min
 * @param max
 * @returns {number}
 */
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeTimes(times) {
  let str = times
  if (String(times).length > 8) {
    let splitStr = String(times).slice(0, -8)
    let dotNum = parseInt(String(times).slice(-8, -7))
    if (dotNum > 0) {
      splitStr = `${splitStr}.${dotNum}`
    }
    str = splitStr + '亿'
  } else if (String(times).length > 4) {
    let splitStr = String(times).slice(0, -4)
    const dotNum = parseInt(String(times).slice(-4, -3))
    if (parseInt(splitStr) < 10 && dotNum > 0) {
      splitStr = `${splitStr}.${dotNum}`
    }
    str = splitStr + '万'
  }
  return str
}

export {
  getRandom,
  changeTimes
}
