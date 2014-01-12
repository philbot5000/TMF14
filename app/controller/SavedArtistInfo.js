/*
 * File: app/controller/SavedArtistInfo.js
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

        // Remove artist from savedArtists store
        var savedIndex = store.findExact('track_id', artist.track_id),
            savedRecord = store.getAt(savedIndex);

        savedRecord.set('saved', false);

        store.sync();
        store.remove(savedRecord);

        // Update the orginal store record to saved false

        var dayStore = this.getStore(artist.DayNumber),
            index = dayStore.findExact('track_id', artist.track_id),
            record = dayStore.getAt(index);

        record.set('saved', false);

        //console.log(artist);

        panel.hide();
    },

    getStore: function(record) {
        console.log(record);
        var store;


        switch(record) {
            case 'Day1':
            store = Ext.getStore('thursdayArtists');
            break;
            case 'Day2':
            store = Ext.getStore('fridayArtists');
            break;
            case 'Day3':
            store = Ext.getStore('saturdayArtists');
            break;
            case 'Day4':
            store = Ext.getStore('fridayArtists');
            break;
        }

        return store;
    }

});