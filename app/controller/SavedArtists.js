/*
 * File: app/controller/SavedArtists.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TMF14.controller.SavedArtists', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'savedArtists': 'showSavedArtists'
        },

        control: {
            "list#savedArtists": {
                itemtap: 'onSavedArtistsItemTap'
            }
        }
    },

    onSavedArtistsItemTap: function(dataview, index, target, record, e, eOpts) {
        var savedArtistFloatPanel = Ext.create('TMF14.view.SavedArtistInfo',{artist: record.data});
        savedArtistFloatPanel.setHtml(record.data.day+'<br />'+record.data.venue+
        '<br />'+record.data.time);
        var overlay = dataview.add(savedArtistFloatPanel).showBy(target);
    },

    showSavedArtists: function() {
        var main = Ext.getCmp('main'),
            day = Ext.create('TMF14.view.SavedArtists');

        main.setActiveItem(day);
    }

});