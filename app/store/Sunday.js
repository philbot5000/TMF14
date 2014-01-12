/*
 * File: app/store/Sunday.js
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

Ext.define('TMF14.store.Sunday', {
    extend: 'Ext.data.Store',

    requires: [
        'TMF14.model.Artist'
    ],

    config: {
        model: 'TMF14.model.Artist',
        storeId: 'sundayArtists',
        proxy: {
            type: 'ajax',
            reader: {
                type: 'json'
            }
        },
        grouper: {
            property: 'venue'
        },
        sorters: {
            property: 'jDate'
        }
    }
});