/*
 * File: app/store/Artists2013.js
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

Ext.define('TMF14.store.Artists2013', {
    extend: 'Ext.data.Store',

    requires: [
        'TMF14.model.Artist'
    ],

    config: {
        autoLoad: true,
        model: 'TMF14.model.Artist',
        storeId: 'artists2013',
        proxy: {
            type: 'ajax',
            url: 'http://philmerrell.com/treefort/artists2013.json',
            reader: {
                type: 'json'
            }
        },
        grouper: {
            groupFn: function(item) {
                return item.data.artist[0].toUpperCase();
            }
        }
    }
});