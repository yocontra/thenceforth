var MILISECOND = 1000
var SECOND = 1 * MILISECOND
var MINUTE = 60 * MILISECOND
var TWO_MINUTES = 2 * MINUTE
var HOUR = 60 * MINUTE
var DAY = 24 * HOUR
var WEEK = 7 * DAY
var MONTH = 30 * DAY

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function Thenceforth(i, o) {
  if (!o) o = {}
  if (o.pretty) return prettyDate(i)
  var now = new Date()
  if (typeof i === 'string') i = new Date(i)
  var diff = now - i

  if (diff < MINUTE) {
    return 'Just now'
  }
  if (diff < TWO_MINUTES) {
    return '1 minute ago'
  }
  if (diff < HOUR) {
    var minutes = Math.round(diff / MINUTE)
    if (minutes == 1) return minutes + ' minute ago'
    return minutes + ' minutes ago'
  }
  if (diff < DAY) {
    var hours = Math.round(diff / HOUR)
    if (hours == 1) return hours + ' hour ago'
    return hours + ' hours ago'
  }
  if (diff < DAY * 2) {
    return 'Yesterday'
  }
  if (diff < WEEK) {
    var days = Math.round(diff / DAY)
    if (days == 1) return days + 'day ago'
    return days + ' days ago'
  }
  if (diff > MONTH) {
    if (o.pretty !== false) return prettyDate(i)
    var m = String(1 + i.getMonth())
    if (m.length < 1) m = '0' + m
    var d = String(i.getDate())
    if (d.length < 1) d = '0' + d
    var y = i.getFullYear()
    return m + '/' + d + '/' + y
  }
  return String(i)
}

function prettyDate(i) {
  var m = months[i.getMonth() + 1]
  var d = i.getDay() + 1
  var day = days[d]
  var y = i.getFullYear()
  return day + ' ' + m + ' ' + d + ', ' + y
}

module.exports = Thenceforth
