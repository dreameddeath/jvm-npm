var inner = require('./sub/inner');

module.exports = {
  quadruple: function(val) { return 2*inner.double(val); },
  children: module.children,
  innerParent: inner.parent,
};
