/*
 * File: app/view/Artists2013.js
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

Ext.define('TMF14.view.Artists2013', {
    extend: 'Ext.dataview.List',

    config: {
        cls: 'orangeList',
        itemId: 'artists2013',
        disableSelection: true,
        scrollToTopOnRefresh: false,
        store: 'artists2013',
        disclosureProperty: 'saved',
        grouped: true,
        infinite: true,
        onItemDisclosure: true,
        itemTpl: [
            '<div>{artist}</div>'
        ],
        items: [
            {
                xtype: 'container',
                bottom: 0,
                docked: 'top',
                height: 40,
                hidden: true,
                html: '<img src="img/badge.png" height="20px" align="left" /> Sunday, March 24',
                itemId: 'sundayListIndicator',
                padding: 5,
                style: 'z-index: 9999 !important; position: absolute; color: #fff; background: rgba(0,0,0, 0.6);',
                width: '100%'
            }
        ]
    }

});