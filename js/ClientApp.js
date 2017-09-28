import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

var div = React.DOM.div;

var MyTitleFactory = React.createFactory(MyTitle);

var MyFirstComponent = React.createClass({
  render: function() {
    return (
      div(null, MyTitleFactory({title: 'props are the best', color: 'peru' }))
    )
  }
});

ReactDOM.render(MyFirstComponent, document.getElementById('app'));

