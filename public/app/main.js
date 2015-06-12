'use strict';

var React = require('react');

var routes = {
    'curator': require('./curator').Curator
};


var navMain = {
    portal_title: 'ClinGen',
    global_sections: [
        {id: 'data', title: 'Data', children: [
            {id: 'assays', title: 'Assays', url: '/search/?type=experiment'},
            {id: 'biosamples', title: 'Biosamples', url: '/search/?type=biosample'},
            {id: 'antibodies', title: 'Antibodies', url: '/search/?type=antibody_lot'},
            {id: 'annotations', title: 'Annotations', url: '/data/annotations'},
            {id: 'datarelease', title: 'Release policy', url: '/about/data-use-policy'}
        ]},
        {id: 'methods', title: 'Methods', children: [
            {id: 'datastandards', title: 'Data standards', url: '/data-standards'},
            {id: 'softwaretools', title: 'Software tools', url: '/software'},
            {id: 'pipelines', title: 'Pipelines', url: '/pipelines'},
            {id: 'experimentguides', title: 'Experiment guidelines', url: '/about/experiment-guidelines'}
        ]},
        {id: 'about', title: 'About ENCODE', children: [
            {id: 'projectoverview', title: 'Project overview', url: '/about/contributors'},
            {id: 'news', title: 'News', url: '/news'},
            {id: 'publications', title: 'Publications', url: '/publications'},
            {id: 'datause', title: 'Release policy', url: '/about/data-use-policy'},
            {id: 'dataaccess', title: 'Data access', url: '/about/data-access'}
        ]},
        {id: 'help', title: 'Help', children: [
            {id: 'gettingstarted', title: 'Getting started', url: '/help/getting-started'},
            {id: 'restapi', title: 'REST API', url: '/help/rest-api'},
            {id: 'fileformats', title: 'File formats', url: '/help/file-formats'},
            {id: 'tutorials', title: 'Tutorials', url: '/tutorials'},
            {id: 'contact', title: 'Contact', url: '/help/contacts'}
        ]}
    ]
};


var App = React.createClass({
    render: function() {
        var reqPath = this.props.reqPath.substring(1);
        var Renderer = routes[reqPath];

        if (Renderer) {
            return <Renderer />;
        } else {
            return (
                <div>Hello there</div>
            );
        }
    }
});


var Header = React.createClass({
    render: function() {
        return (
            <header>
            </header>
        );
    }
});

React.render(<App reqPath={window.location.pathname} />,
    document.body);
