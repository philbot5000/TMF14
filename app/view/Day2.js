/*
 * File: app/view/Day2.js
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

Ext.define('TMF14.view.Day2', {
    extend: 'Ext.dataview.List',
    alias: 'widget.day2',

    config: {
        cls: 'orangeList',
        itemId: 'Day2',
        disableSelection: false,
        store: 'fridayArtists',
        disclosureProperty: 'saved',
        grouped: true,
        onItemDisclosure: true,
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        itemTpl: [
            '<div><span style="font-size: 10px;">{time}</span> {artist}</div>'
        ],
        items: [
            {
                xtype: 'container',
                bottom: 0,
                docked: 'top',
                height: 50,
                itemId: 'fridayListIndicator',
                padding: 5,
                style: 'z-index: 9999 !important; position: absolute; color: #fff; background: rgba(0,0,0, 0.6);',
                width: '100%',
                layout: {
                    align: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'container',
                        html: '<img src="img/badge.png" height="40px" /> '
                    },
                    {
                        xtype: 'container',
                        html: '<span style="margin-top: 10px !important; font-size: 1.3em;">Friday, March 21</span>'
                    }
                ]
            }
        ]
    }

});