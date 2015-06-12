'use strict';
var React = require('react');


// Curator page content
var Curator = module.exports.Curator = React.createClass({
    render: function() {
        return (
            <div>
                <CurationData />
            </div>
        );
    }
});


// Curation data header for Gene:Disease
var CurationData = React.createClass({
    render: function() {
        return (
            <div className="container curation-data">
                <div className="row equal-height">
                    <GeneCurationData />
                    <DiseaseCurationData />
                </div>
            </div>
        );
    }
});


// Display the gene section of the curation data
var GeneCurationData = React.createClass({
    render: function() {
        return (
            <div className="col-xs-12 col-sm-3 gutter-exc">
                <div className="curation-data-gene">
                    <dl>
                        <dt>Gene A</dt>
                        <dd><a href="#">HGNC:37133</a></dd>
                        <dd>EntrezID: <a href="#">503538</a></dd>
                    </dl>
                </div>
            </div>
        );
    }
});


// Display the disease section of the curation data
var DiseaseCurationData = React.createClass({
    render: function() {
        return (
            <div className="col-xs-12 col-sm-9 gutter-exc">
                <div className="curation-data-disease">
                    <dl>
                        <dt>Disease</dt>
                        <dd>Orphanet ID: <a href="#">166035</a></dd>
                        <dd>OMIM ID: <a href="#">503538</a>, <a href="#">503538</a>, <a href="#">503538</a>, <a href="#">503538</a>, <a href="#">503538</a>, <a href="#">503538</a>, <a href="#">503538</a>, <a href="#">503538</a>, <a href="#">503538</a>, <a href="#">503538</a>, <a href="#">503538</a>, <a href="#">503538</a>, <a href="#">503538</a>, <a href="#">503538</a>, <a href="#">503538</a>, <a href="#">503538</a>, </dd>
                    </dl>
                </div>
            </div>
        );
    }
});
