/*
 * File: app/controller/Artists2014.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TMF14.controller.Artists2014', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'artists2014': 'showArtists2014'
        },

        control: {
            "list#artists2014": {
                initialize: 'onArtists2014Initialize',
                itemtap: 'onArtists2014ItemTap'
            }
        }
    },

    onArtists2014Initialize: function(component, eOpts) {

    },

    onArtists2014ItemTap: function(dataview, index, target, record, e, eOpts) {
        var main = Ext.getCmp('main'),
            backButton = Ext.ComponentQuery.query('#backButton')[0];

        backButton.dayNumber = 'artists2014';
        console.log(record.data);
        main.artistInfo = record.data;
        this.redirectTo('artistDetail');
    },

    showArtists2014: function() {
        var main = Ext.getCmp('main'),
            day = Ext.create('TMF14.view.Artists2014');

        main.setActiveItem(day);
    }

});