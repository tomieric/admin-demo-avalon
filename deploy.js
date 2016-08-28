/**
 * 同步到gitpage
 * 
 * by tommyshao <tomieric@gmail.com>
 * 2016-08-28
 */

var ghpages = require('gh-pages')
var path = require('path')

ghpages.publish(path.join(__dirname, 'dist'), function(err) { console.log(err) })