import lunar7 from "./lunar7";
import quotationList from './quotationList'

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

// 获取时间对应的农历
function getDateTimeDataLunar(timeStr) {
  let str = lunar7.getTimeData(timeStr)
  // console.log(str);
  return str
}

// 根据年月获取当月的天数
function mGetDate(year, month) {
  var d = new Date(year, month, 0)
  return d.getDate()
}

// 经典语录
function quotationsList() {
  return quotationList.quotationList
}

function setStorageCache(key, value, jsonString = false) {
  if (jsonString) {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    window.localStorage.setItem(key, value)
  }
}

function getStorageCache(key) {
  try {
    return window.localStorage.getItem(key) || ''
  } catch (e) {
    console.warn(`解析失败，原因为：${e}`)
  }
}

function setSessionCache(key, value, jsonString = false) {
  if (jsonString) {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  } else {
    window.sessionStorage.setItem(key, value)
  }
}

function getSessionCache(key) {
  try {
    return window.sessionStorage.getItem(key) || ''
  } catch (e) {
    console.warn(`解析失败，原因为：${e}`)
  }
}

export {
  getRandom,
  changeTimes,
  getDateTimeDataLunar,
  mGetDate,
  quotationsList,
  getStorageCache,
  setStorageCache,
  getSessionCache,
  setSessionCache
}
