import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Main from './Main.js'

// Exported static site renderer:
module.exports = function render(locals, callback) {
  var html = ReactDOMServer.renderToStaticMarkup(React.createElement(Main, locals))
  callback(null, '<!DOCTYPE html>' + html)
};