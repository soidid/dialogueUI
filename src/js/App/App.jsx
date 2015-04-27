/** @jsx React.DOM */

var React = require('react/addons');
var Saying = require('../Saying/Saying.jsx');

var data = require('../../data/result');


require('./App.css');

var App = React.createClass({
  
  render () {
    var sayItems = data.sayings.map((item, key)=>{
        item.key = key;
        return (
          <Saying key={key}
                  data={item}/>
        )
    });
    return (
      <div>{sayItems}</div>
    );
  }
});

module.exports = App;


