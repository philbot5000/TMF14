/*
 * File: app/view/SavedArtists.js
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

Ext.define('TMF14.view.SavedArtists', {
    extend: 'Ext.dataview.List',
    alias: 'widget.savedartists',

    requires: [
        'TMF14.view.SavedArtistInfo'
    ],

    config: {
        cls: 'orangeList',
        itemId: 'savedArtists',
        emptyText: 'You haven\'t saved any artists yet.<br /><img src="images/list1.jpg" width="100%" />',
        store: 'savedArtists',
        grouped: true,
        scrollable: {
            directionLock: true,
            direction: 'vertical'
        },
        itemTpl: [
            '<div><span style="font-size: 10px;">{time}</span> {artist}</div>'
        ]
    }

});