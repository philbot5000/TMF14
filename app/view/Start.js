/*
 * File: app/view/Start.js
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

Ext.define('TMF14.view.Start', {
    extend: 'Ext.Container',
    alias: 'widget.start',

    config: {
        layout: {
            type: 'vbox'
        },
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        items: [
            {
                xtype: 'container',
                html: '<img src="images/logo_letters.jpg" width="100%" />'
            },
            {
                xtype: 'container',
                html: '<img src="images/start1.gif" width="100%" /><img src="images/start2.gif" width="100%" />'
            }
        ]
    }

});