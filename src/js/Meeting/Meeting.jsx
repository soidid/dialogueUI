/** @jsx React.DOM */

var React = require('react/addons');
var Saying = require('../Saying/Saying.jsx');
var LegislatorAvatar = require('../LegislatorAvatar/LegislatorAvatar.jsx');

require('./Meeting.css');

var Meeting = React.createClass({
  
   getInitialState(){
    return {
        isActive : "",
        isChoosed : ""
    }
  },

  _onSetActive(value,i){
    console.log(value);
    this.setState({
      isActive: value
    });
  },

   _onSetChoosed(value,i){
    console.log(value);
    this.setState({
      isChoosed: value
    });
  },


  render () {
    var {date, title, chairman, topic, topicSummary, unit, legiSayings} = this.props.data;
    var {isActive, isChoosed} = this.state;
    var classSet = React.addons.classSet;

    var legiHeaders = legiSayings.map((item, key)=>{
      var speakerClass = "Meeting-speaker is-"+item.party;
      if(isActive === item.name)
        speakerClass+=" is-active";
      else
        speakerClass+=" is-inactive";
      var boundClick = this._onSetActive.bind(null,item.name);
      return (
          <div className={speakerClass}
               key={key}
               onClick={boundClick}>
              <LegislatorAvatar data={item.name}/>
          </div>
      )
        
    });



    var legiSections = legiSayings.map((item, key)=>{
      
      var sayingItems = item.sayings.map((i, k)=>{
        i.key = k;
        return (
            <Saying key={k}
                    data={i}/>
        )
      });
      var shouldShow = (isActive === item.name) ? sayingItems : "";
      return (
          <div key={key}>
              {shouldShow}
          </div>
      )
        
    });

    var legiSectionItem = (isActive === "")? "":
          <div className="Meeting-intro">
            <div>{legiSections}</div>
          </div>;
    
    var choices = [
        "支持同性婚姻合法",
        "沒有明確表態",
        "反對同性婚姻合法"

    ];
    var choiceItems = choices.map((i,k)=>{
        var choiceClasses = classSet({
          "Meeting-taskChoice" : true,
          "is-choosed" : k === isChoosed
        });
        var boundClick = this._onSetChoosed.bind(null, k);
        return (
          <div className={choiceClasses}
               onClick={boundClick}>{i}</div>);
    });
    var resultMatchItem = (isActive === "")? "":
          <div className="Meeting-intro">
            <div className="Meeting-task">你覺得下列何者敘述最符合<span className="Meeting-highlight"> <LegislatorAvatar data={isActive}/> </span>在本次質詢的立場描述？</div>
            {choiceItems}
          </div>;
   
    return (
      
      <div className="Meeting">
          <div className="Meeting-intro">
            <div className="Meeting-title Meeting-unit">{unit}#231</div>
            <div className="Meeting-title">日期：{date}</div>
            <div className="Meeting-title">主題：{topicSummary}</div>
            <div className="Meeting-title">主席：{chairman}</div>
          </div>
          <div className="Meeting-intro">
            <div>{legiHeaders}</div>
          </div>
          {legiSectionItem}
          {resultMatchItem}
      </div>
          
    );
  }
});

module.exports = Meeting;


