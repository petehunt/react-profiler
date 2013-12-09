var React = require('react');
var ReactPerf = require('react/lib/ReactPerf');
var ReactDefaultPerf = require('react/lib/ReactDefaultPerf');

// ReactDefaultPerf is already injected if in __DEV__

var ReactProfiler = {
  enable: function() {
    ReactPerf.enableMeasure = true;
  },

  disable: function() {
    ReactPerf.enableMeasure = false;
  },

  print: function(rootID, index) {
    if (!rootID || !React.__internals.Mount._instancesByReactRootID[rootID]) {
      console.error(
        'You must provide a root ID to inspect. Possible values:',
        Object.keys(React.__internals.Mount._instancesByReactRootID)
      );
      return;
    }
    return ReactDefaultPerf.printRenderHistory(rootID, index);
  }
};

module.exports = ReactProfiler;