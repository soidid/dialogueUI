/** @jsx React.DOM */

var React = require('react/addons');
var Meeting = require('../Meeting/Meeting.jsx');
var Profile = require('../Profile/Profile.jsx');
var data = require('../../data/byLegislators');
require('./App.css');


/* ===== GET JSON , Default set to 選罷法 ======= */
var hash = window.location.hash.substring(1); // remove #

var App = React.createClass({
  
  render () {
    var content = <Meeting data={data}/>;
    if(hash==="profile"){
    	content = <Profile />
    }
    return (
      <div className="App">
      	{content}
      </div>
    );
  }
});

module.exports = App;


