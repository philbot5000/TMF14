/*
 * File: app/controller/Master.js
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

Ext.define('TMF14.controller.Master', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "#menu": {
                itemtap: 'onMenuItemTap'
            },
            "button#menuButton": {
                tap: 'onMenuButtonTap'
            },
            "container#nowPlaying": {
                initialize: 'onNowPlayingInitialize'
            }
        }
    },

    onMenuItemTap: function(dataview, index, target, record, e, eOpts) {
        var menu = Ext.ComponentQuery.query('#mainMenu')[0],
            main = Ext.getCmp('main'),
            me = this;

        switch(record.data.item) {

            case 'All':

            if(main.getActiveItem !== 'artists2014') {
                me.redirectTo('artists2014');
            }

            TMF14.app.toggleMenu();

            break;

            case 'Saved Artists':

            if(main.getActiveItem !== 'savedArtists') {
                me.redirectTo('savedArtists');
            }

            TMF14.app.toggleMenu();

            break;

            case 'Thursday, March 20':
            if(main.getActiveItem() !== 'day1') {
                me.redirectTo('Day1');
            }

            TMF14.app.toggleMenu();

            break;
            case 'Friday, March 21':
            if(main.getActiveItem() !== 'day2') {
                me.redirectTo('Day2');
            }

            TMF14.app.toggleMenu();

            break;

            case 'Saturday, March 22':
            if(main.getActiveItem() !== 'day3') {
                me.redirectTo('Day3');
            }

            TMF14.app.toggleMenu();

            break;
            case 'Sunday, March 23':

            if(main.getActiveItem() !== 'day4') {
                me.redirectTo('Day4');
            }

            TMF14.app.toggleMenu();
            break;

            case 'Instagram':

            if(Ext.os.is.ios) {
                CanOpen('instagram://', function(isInstalled) {

                    if(isInstalled) {

                        document.location = 'instagram://user?username=treefortfest';

                    } else {

                        document.location = 'http://instagram.com/treefortfest';

                    }
                });

            }

            if(Ext.os.is.Android) {
                window.open('http://instagram.com/treefortfest', '_system');
            }

            break;

            case 'Twitter':

            if(Ext.os.is.ios) {
                CanOpen('twitter://', function(isInstalled) {

                    if(isInstalled) {

                        document.location = 'twitter://user?screen_name=treefortfest';

                    } else {

                        document.location = 'http://twitter.com/treefortfest';

                    }
                });

            }

            if(Ext.os.is.Android) {
                window.open('http://twitter.com/treefortfest', '_system');
            }        

            break;

            case 'Facebook':

            if(Ext.os.is.ios) {
                CanOpen('fb://', function(isInstalled) {

                    if(isInstalled) {

                        document.location = 'fb://profile/148251441940814';

                    } else {

                        document.location = 'https://www.facebook.com/treefortmusicfest';

                    }
                });

            }

            if(Ext.os.is.Android) {
                window.open('https://www.facebook.com/treefortmusicfest', '_system');
            }        


            break;

            case 'About':

            if(main.getActiveItem() !== 'about') {
                me.redirectTo('about');
            }

            TMF14.app.toggleMenu();
            break;
            default: 

        }
    },

    onMenuButtonTap: function(button, e, eOpts) {
        TMF14.app.toggleMenu();
    },

    onNowPlayingInitialize: function(component, eOpts) {
        var me = this;

        component.element.on('tap', function() {
            var artist = component.artist,
                backView = component.artist.DayNumber;


            // TODO... Refactor how the view to go back to is determined when an artist
            // doesn't have a DayNumber... this is terrible.
            if(typeof backView === 'undefined') {
                backView = 'artists'+artist.year;
            }


            //console.log(component.artist);
            var main = Ext.getCmp('main'),
                backButton = Ext.ComponentQuery.query('#backButton')[0];

            backButton.dayNumber = backView;

            main.artistInfo = component.artist;
            me.redirectTo('artistDetail');
            TMF14.app.toggleMenu();
        });
    }

});