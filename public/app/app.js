'use strict';
var React = require('react');
var jQuery = require('jquery');
var bootstrap = require('bootstrap');
var navbar = require('./navbar');
var $ = jQuery;

var Navbar = navbar.Navbar;

var routes = {
    'curator': require('./curator').Curator
};


var portal = {
    portal_title: 'ClinGen',
    global_sections: [
        {id: 'menu1', title: 'Menu 1', url: '/menu1'},
        {id: 'menu2', title: 'Menu 2', url: '/menu2'},
        {id: 'menu3', title: 'Menu 3', url: '/menu3'},
        {id: 'menu4', title: 'Menu 4', url: '/menu4'}
    ]
};


var App = React.createClass({
    render: function() {
        var reqPath = this.props.reqPath.substring(1);
        var Renderer = routes[reqPath];

        return (
            <div>
                <Header />
                {Renderer ? <Renderer /> : <div>Hello there</div>}
            </div>
        );
    }
});


var Header = React.createClass({
    render: function() {
        return (
            <header className="site-header">
                <div className="container">
                    <Navbar portal={portal} />
                </div>
            </header>
        );
    }
});

React.render(<App reqPath={window.location.pathname} />,
    document.body);
