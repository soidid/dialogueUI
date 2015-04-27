/** @jsx React.DOM */

var React = require('react/addons');
var Meeting = require('../Meeting/Meeting.jsx');
var data = require('../../data/byLegislators');
console.log(data);

require('./App.css');

var App = React.createClass({
  
  render () {
    
    return (
      <div className="App"><Meeting data={data}/></div>
    );
  }
});

module.exports = App;


