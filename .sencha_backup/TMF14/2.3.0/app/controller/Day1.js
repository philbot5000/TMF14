/*
 * File: app/controller/Day1.js
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

Ext.define('TMF14.controller.Day1', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'Day1': 'showDay1'
        },

        control: {
            "list#Day1": {
                initialize: 'onDay1Initialize',
                activate: 'onDay1Activate',
                itemtap: 'onDay1ItemTap',
                hide: 'onDay1Hide'
            }
        }
    },

    onDay1Initialize: function(component, eOpts) {
        TMF14.app.setDayIndicator(component, '#thursdayListIndicator');

        var scroller = component.getScrollable().getScroller(),
            mainImage = component.query('#listImage')[0];

        scroller.on('scroll', function(scroll) {
            if(scroll.position.y > 0) {
                mainImage.setStyle('-webkit-transform: translate3d(0px, '+ scroll.position.y / 3 +'px, 0px);');
            } else {
                mainImage.setStyle('-webkit-transform: perspective(1200) translate3d(0px, '+ scroll.position.y / 3 +'px, '+Math.abs(scroll.position.y * 5)+'px);');
                //console.log(Math.abs(scroll.position.y));
            }
        }
        );
    },

    onDay1Activate: function(newActiveItem, container, oldActiveItem, eOpts) {
        var listDayIndicator = Ext.ComponentQuery.query('#thursdayListIndicator');

        listDayIndicator[0].show({type: 'fade'});
    },

    onDay1ItemTap: function(dataview, index, target, record, e, eOpts) {
        var main = Ext.getCmp('main'),
            backButton = Ext.ComponentQuery.query('#backButton')[0];

        backButton.dayNumber = 'Day1';

        main.artistInfo = record.data;
        this.redirectTo('artistDetail');
    },

    onDay1Hide: function(component, eOpts) {
        var main = Ext.getCmp('main');

        setTimeout(function() {
            main.remove(component, false);
        }, 500);
    },

    showDay1: function() {
        var main = Ext.getCmp('main'),
            day = Ext.ComponentQuery.query('#Day1')[0] || Ext.create('TMF14.view.Day1');

        main.setActiveItem(day);
    }

});