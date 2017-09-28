import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

var div = React.DOM.div;

var MyTitleFactor = React.createFactory(MyTitle);

var MyFirstComponent = React.createClass({
  render: function() {
    return (
      div(null, MyTitleFactory({title: 'props are the best', color: 'peru' }))
    )
  }
})