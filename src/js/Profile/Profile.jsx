/** @jsx React.DOM */
var React = require('react/addons');
var Legislator = require('../Legislator/Legislator.jsx');
var Tag = require('../Tag/Tag.jsx');

require('./Profile.css');

var Profile = React.createClass({
  
   getInitialState(){
    return {
    }
  },
  render () {
    return (
      <div className="Profile">
          <Legislator data="尤美女" />
          <Tag />
      </div>
          
    );
  }
});

module.exports = Profile;


