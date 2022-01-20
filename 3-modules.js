//COmmunJS, every file is module (by default)
// Modules - Encapsulated Code (Onlye share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./8-alternative-flavor')
require('./7-mind-granade')

//console.log(data)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
sayHi(data.singlePersons.name)