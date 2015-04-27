/** @jsx React.DOM */

var React = require('react/addons');

require('./Saying.css');

var Saying = React.createClass({
  
  getInitialState(){
    return {
        isExpanded : {}
    }
  },
  render () {
    var classSet = React.addons.classSet;
    var { isExpanded } = this.state;
    var { key, speaker, paragraph } = this.props.data;
    
    var leftClasses = classSet({
      "Saying-flexLeft" : true,
      "is-odd" : key%2 !== 0
    });
    var mainClasses = classSet({
      "Saying-flexMain" : true,
      "is-odd" : key%2 !== 0
    });

    var imgURL;
    try {
      imgURL = require("./images/avatar/"+speaker+".png");
    }catch(e){
      imgURL = require("./images/default.png");
    }
    
    var paraItem = "";
    if((!isExpanded[key]) && (paragraph.length > 140)){
      paraItem = <div>{paragraph.substring(0,140)+"..."}<a href="#">[看全部]</a></div>
    }else{
      paraItem = <div>{paragraph}</div>
    }
    
    return (
      
      <div className="Saying">
          <div className="Saying-flex">
            <div className={leftClasses}>
              <img className="Saying-avatar"
                   src={imgURL} />
              {speaker}
            </div>
            <div className={mainClasses}>
              {paraItem}
            </div>
          </div>
      </div>
          
    );
  }
});

module.exports = Saying;


