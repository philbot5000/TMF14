/*
 * File: app/controller/SavedArtistInfo.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.define('TMF14.controller.SavedArtistInfo', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "panel#savedArtistFloatPanel": {
                hide: 'onSavedArtistInfoHide'
            },
            "button#removeArtist": {
                tap: 'onRemoveArtistTap'
            }
        }
    },

    onSavedArtistInfoHide: function(component, eOpts) {
        component.destroy();
    },

    onRemoveArtistTap: function(button, e, eOpts) {
        var store = Ext.getStore('savedArtists'),
            panel = Ext.ComponentQuery.query('#savedArtistFloatPanel')[0],
            artist = panel.config.artist,
            list = Ext.ComponentQuery.query('#savedArtists')[0];


        var index = store.findExact('track_id', artist.track_id),
            record = store.getAt(index);

        record.set('saved', false);

        store.sync();
        store.remove(record);
        //TMF14.app.refreshLists();
        panel.hide();
    }

});