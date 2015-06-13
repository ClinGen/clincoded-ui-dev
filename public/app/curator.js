'use strict';
var React = require('react');
var pmid_items = require('./testdata').pmid_items;

// Curator page content
var Curator = module.exports.Curator = React.createClass({
    getInitialState: function() {
        return {
            currPmid: '',
            selectionListOpen: false
        };
    },

    selectionListOpenChange: function() {
        this.setState({selectionListOpen: !this.state.selectionListOpen});
    },

    render: function() {
        return (
            <div>
                <CurationData />
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <PmidSelectionTrigger pmidList={pmid_items} selectionListOpenChange={this.selectionListOpenChange} />
                            <PmidSelectionList pmidList={pmid_items} />
                            {this.state.selectionListOpen ? <p>Open</p> : null}
                        </div>
                    </div>
                </div>
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


// Controls the display of the Pmid selection area; this is the trigger part
var PmidSelectionTrigger = React.createClass({
    render: function() {
        return (
            <div className="pmid-selection-trigger">
                <button className="btn btn-primary btn-direct-right" onClick={this.props.selectionListOpenChange}>Select</button>
                <span className="pmid-selection-curr-id">PMID: 23294250</span>
                <button className="btn btn-primary">Add New PMID</button>
            </div>
        );
    }
});

var PmidSelectionList = React.createClass({
    render: function() {
        return null;
    }
});
