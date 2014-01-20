/*
 * File: app.js
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

//@require @packageOverrides
Ext.Loader.setConfig({

});

Ext.application({
    models: [
        'Menu',
        'Artist'
    ],
    stores: [
        'Menu',
        'SavedArtists',
        'Thursday',
        'Friday',
        'Sunday',
        'Saturday',
        'Artists2013',
        'Artists2014'
    ],
    views: [
        'Master',
        'SavedArtists',
        'Day1',
        'ArtistDetail',
        'Day2',
        'Day3',
        'Day4',
        'Start',
        'Artists2013',
        'Artists2014'
    ],
    controllers: [
        'Main',
        'Master',
        'Day1',
        'SavedArtists',
        'ArtistDetail',
        'Day2',
        'Day3',
        'SavedArtistInfo',
        'Day4',
        'Artists2013',
        'Artists2014'
    ],
    name: 'TMF14',

    launch: function() {
        SC.initialize({client_id: 'df942240e3e63f8e23596df0893eab2a'});
        Ext.fly('appLoadingIndicator').destroy();


        WebFontConfig = {
            google: { families: [ 'Roboto:400,100,300:latin' ] }
        };
        (function() {
            var wf = document.createElement('script');
            wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
            wf.type = 'text/javascript';
            wf.async = 'true';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(wf, s);
        })();
        Ext.create('TMF14.view.Master', {fullscreen: true});
    },

    loadArtists: function(saved) {
        var me = this;

        console.log(saved);


        Ext.Ajax.request({
            url: 'artists2013.json',
            success: function(response){
                var tracks = Ext.decode(response.responseText);

                var thursdayArtists = Ext.getStore('thursdayArtists'),
                    fridayArtists = Ext.getStore('fridayArtists'),
                    saturdayArtists = Ext.getStore('saturdayArtists'),
                    sundayArtists = Ext.getStore('sundayArtists'),
                    savedArtists = Ext.getStore('savedArtists');

                var thursdayArray = [],
                    fridayArray = [],
                    saturdayArray = [],
                    sundayArray = [];

                for(var i=0; i < tracks.length; i++) {

                    /* moved to model......

                    var str = tracks[i].artwork_url;
                    if (str === null) {
                    tracks[i].artwork_url = 'img/logo-old.png';
                    } else {
                    // string replacement to get larger version of image
                    var n = str.replace('large','t500x500');
                    tracks[i].artwork_url = n;
                }
                */
                tracks[i].DayNumber = me.setDayNumber(tracks[i].day, tracks[i].time);

                tracks[i].jDate = new Date(tracks[i].day+' '+tracks[i].time+' '+tracks[i].year);
                for(var j = 0; j < saved.length; j++) {

                    if(saved[j].data.track_id.toString() === tracks[i].track_id) {
                        //
                        tracks[i].saved = true;

                        saved[j].data.venue = tracks[i].venue;
                        saved[j].data.time = tracks[i].time;
                        saved[j].data.jDate = tracks[i].jDate;
                        saved[j].data.displayDate = Ext.Date.format(tracks[i].jDate, 'n/j/Y');
                        saved[j].data.day = tracks[i].day;

                        // filter the store to only show active tracks.
                        //saved[j].data.active = tracks[i].active;

                        saved[j].save();

                    }

                }

                if(tracks[i].DayNumber === "Day1") {

                    thursdayArray.push(tracks[i]);

                } else if (tracks[i].DayNumber === "Day2") {



                    fridayArray.push(tracks[i]);

                } else if (tracks[i].DayNumber === "Day3") {

                    saturdayArray.push(tracks[i]);

                } else if (tracks[i].DayNumber === "Day4") {

                    sundayArray.push(tracks[i]);

                }


            }

            thursdayArtists.add(thursdayArray);
            fridayArtists.add(fridayArray);
            saturdayArtists.add(saturdayArray);
            sundayArtists.add(sundayArray);

            savedArtists.sync();
        }
    });

    },

    setDayNumber: function(day, time) {
        /*
        *
        * This function sets the day number for each artist.
        * When an artist plays after midnight, this function 
        * will group them with the previous day. 
        *
        */
        if(day === 'Thursday, March 21') {

            return "Day1";

        } else if(day === 'Friday, March 22') {
            if(time.indexOf("AM") !== -1) {
                return 'Day1';
            } else {
                return 'Day2';
            }

        } else if(day === 'Saturday, March 23') {
            if(time.indexOf("AM") !== -1) {
                //console.log(rec.data.Artist);
                return 'Day2';
            } else {
                return 'Day3';
            }

        } else if(day === 'Sunday, March 24') {
            if(time.indexOf("AM") !== -1) {
                //console.log(rec.data.Artist);
                return 'Day3';
            } else {
                return 'Day4';
            }
        } else if(day === 'Monday, March 25') {
            if(time.indexOf("AM") !== -1) {
                //console.log(rec.data.Artist);
                return 'Day4';
            } else {
                return 'Day4';
            }
        }
    },

    toggleMenu: function() {
        var main = Ext.getCmp('main'),
            elem = main.element,
            dragObj = main.getDraggable();


        if(main.isOpen) {
            elem.translate(0,0,0);
            dragObj.setOffset(0, 0);
            main.isOpen = false;
            return;
        } 

        if(!main.isOpen){
            elem.translate(250,0,0);
            dragObj.setOffset(250, 0);
            main.isOpen = true;
            return;
        }
    },

    setDayIndicator: function(component, listDay) {
        var scroller = component.getScrollable().getScroller(),
            listDayIndicator = Ext.ComponentQuery.query(listDay)[0];


        scroller.on('scrollstart', function(scrollObj, x, y) {

            Ext.Function.defer(function(){

                if(scrollObj.dragDirection.y === -1) {
                    listDayIndicator.show({type:'fade'});

                }

                if(scrollObj.dragDirection.y === 1) {
                    listDayIndicator.hide({type: 'fadeOut'});
                }
            }, 100);

        });
    },

    refreshLists: function() {
        /*var day1 = Ext.ComponentQuery.query('#day1')[0],
        day2 = Ext.ComponentQuery.query('#Day2')[0],
        day3 = Ext.ComponentQuery.query('#Day3')[0],
        day4 = Ext.ComponentQuery.query('#Day4')[0],
        saved = Ext.ComponentQuery.query('#savedArtists')[0];
        */

        var menu = Ext.ComponentQuery.query('#menu')[0];

        //day1.refresh();
        //day2.refresh();
        //day3.refresh();
        //day4.refresh();
        menu.refresh();
    },

    setArtistInfo: function(artist) {
        var main = Ext.getCmp('main'),
            artistMain = Ext.ComponentQuery.query('#artistMain')[0],
            artistName = Ext.ComponentQuery.query('#artistName')[0],
            artistImage = Ext.ComponentQuery.query('#artistImage')[0],
            artistDescription = Ext.ComponentQuery.query('#artistDescription')[0],
            saveArtistButton = Ext.ComponentQuery.query('#saveArtistButton')[0],
            playButton = Ext.ComponentQuery.query('#playButton')[0],
            playerWaveformContainer = Ext.ComponentQuery.query('#playerWaveformContainer')[0];

        saveArtistButton.artistToSave = artist;
        playButton.artist = artist;

        if(artist.saved) {

            saveArtistButton.setStyle('color: #eb6145;');
            saveArtistButton.setText('Saved');
        } else {

            saveArtistButton.setStyle('color: #788b78;');
            saveArtistButton.setText('Save');

        }

        if(typeof main.artistPlaying !== 'undefined' && artist.id === main.artistPlaying.id) {
            // this is sloppy... clean up.
            setTimeout(function() {
                var elapsed = Ext.DomQuery.select('.elapsed')[0];
                elapsed.className = elapsed.className + ' playing';
                playButton.setIconCls('pause');
            }, 500);


        }

        artistMain.setHtml('<img style="-webkit-box-reflect: below;" width="100%" src="'+artist.artwork_url+'" />');
        //artistImage.setSrc(artist.artwork_url);
        artistName.setHtml('<span style="font-weight: 100">'+artist.artist+'</span>');
        artistDescription.setHtml('<span class="artist-info">'+artist.day+'<br />'+artist.venue+'<br />'+artist.time+'</span>');
        playerWaveformContainer.setData(artist);
    }

});
