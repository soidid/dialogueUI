/** @jsx React.DOM */

var React = require('react/addons');
var LegislatorAvatar = require('../LegislatorAvatar/LegislatorAvatar.jsx');

require('./Saying.css');

var Saying = React.createClass({
  
  getInitialState(){
    return {
        isExpanded : {}
    }
  },

  _toggleExpanded(value,i){
   console.log("click:"+value);
   var current = this.state.isExpanded;
   current[value] = !current[value];
   this.setState({
      isExpanded: current
   });
  },
  render () {
    var classSet = React.addons.classSet;
    var { isExpanded } = this.state;
    var { key, speaker, paragraph, is_legislator, is_chairman } = this.props.data;
    
    var leftClasses = classSet({
      "Saying-flexLeft" : true,
      "is-right" : key %2 !== 0
    });
    var mainClasses = classSet({
      "Saying-flexMain" : true,
      "is-right" : key %2 !== 0,
      "is-left" : key %2 === 0
    });
    
    var boundClick = this._toggleExpanded.bind(null, key);
    var paraItem = "";
    if((!isExpanded[key]) && (paragraph.length > 140)){
      paraItem = <div>{paragraph.substring(0,140)+"..."}
                      <a className="Saying-expandButton"
                         onClick={boundClick}>[看全部]</a></div>
    }else{
      paraItem = <div>{paragraph}</div>
    }
    
    
    return (
      
      <div className="Saying">
          <div className="Saying-flex">
            <div className={leftClasses}>
              <LegislatorAvatar data={speaker} />
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


