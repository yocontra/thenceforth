const thenceforth = require('..')

test('Date() should return now', () => {
  expect(thenceforth(new Date())).toBe('Just now')
})
test('Date() - 59s should return "Just now"', () => {
  expect(thenceforth(new Date().getTime() - 59000)).toBe('Just now')
})
test('Date() - 1 minute + 10s should return "1 minute ago"', () => {
  expect(thenceforth(new Date().getTime() - 70000)).toBe('1 minute ago')
})
test('Date() - 1 minute should return "1 minute ago"', () => {
  expect(thenceforth(new Date().getTime() - 60000)).toBe('1 minute ago')
})
test('Date() - 20 minute should return "20 minutes ago"', () => {
  expect(thenceforth(new Date().getTime() - 60000 * 20)).toBe('20 minutes ago')
})
test('Date() - 1 hour should return "1 hour ago"', () => {
  expect(thenceforth(new Date().getTime() - 60000 * 60)).toBe('1 hour ago')
})
test('Date() - 10 hours should return "10 hours ago"', () => {
  expect(thenceforth(new Date().getTime() - 60000 * 60 * 10)).toBe('10 hours ago')
})
test('Date() - 10.4 hours should return "10 hours ago"', () => {
  expect(thenceforth(new Date().getTime() - (60000 * 60 * 10) - (60000 * 15))).toBe('10 hours ago')
})
test('Date() - 10.75 hours should return "11 hours ago"', () => {
  expect(thenceforth(new Date().getTime() - (60000 * 60 * 10) - (60000 * 45))).toBe('11 hours ago')
})
test('Date() - 4 days should return "4 days ago"', () => {
  expect(thenceforth(new Date().getTime() - 60000 * 60 * 24 * 4)).toBe('4 days ago')
})
test('Date() - 1 day should return "Yesterday"', () => {
  expect(thenceforth(new Date().getTime() - 60000 * 60 * 24)).toBe('Yesterday')
})
test('Date() - 2 days should return "Yesterday"', () => {
  expect(thenceforth(new Date().getTime() - 60000 * 60 * 24 * 1)).toBe('Yesterday')
})
test('pretty: false should return "10/10/2010"', () => {
  expect(thenceforth(new Date('2010-10-11T00:00:00+05:30'), { pretty: false })).toBe('10/10/2010')
})
test('greater than one month should return "Monday November 1, 2010"', () => {
  expect(thenceforth(new Date('2010-10-11T00:00:00+05:30'))).toBe('Monday November 1, 2010')
})
