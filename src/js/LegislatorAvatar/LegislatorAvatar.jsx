/** @jsx React.DOM */

var React = require('react/addons');
require('./LegislatorAvatar.css');

var LegislatorAvatar = React.createClass({
  
  render () {
    var {data} = this.props;
    var imgURL;

    try {
      imgURL = require("./images/avatar/"+data+".png");
    }catch(e){
      imgURL = require("./images/default.jpg");
    }
  
    return (
      <div className="LegislatorAvatar">
          <img className="LegislatorAvatar-avatar"
               src={imgURL} />
          {data}
      </div>
          
    );
  }
});

module.exports = LegislatorAvatar;


