# Thenceforth

> Parse Date() to human readable time messages

Other time libraries dealing with "time since" or "time ago" do not have a limit on when to switch from a date sentence to a formatted date. This tiny (1.4k uncompressed ) library returns the human readable date sentence up to one month ago, where it returns either the base form mm/dd/yyyy or the pretty form 'Day Month day, Year'

### Install

```sh
$ npm i thenceforth
```
```sh
$ yarn add thenceforth
```

### Example

Times are parsed to when they happened in a day:

```js
thenceforth(new Date())
// => Just now

const twentyMinutes = 60000 * 20
thenceforth(new Date().getTime() - twentyMinutes)
// => 20 minutes ago

```

While times greater than one month are returned as a date:

```js

thenceforth(new Date('2010-10-11T00:00:00+05:30')))
// => 'Monday November 1, 2010'

```

The full form date is much easier to understand than "one year ago", as one year could be any month within 10-14 months ago. Also the day is not provided with "one year ago", and "five years ago" does not make sense for date specific events.



