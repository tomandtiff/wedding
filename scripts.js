


$(document).ready(function() {

    console.log('Why hello there...came looking for an easter egg?');

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    var scrollIndicator = new ScrollMagic.Scene({
        triggerElement: '.hero',
        triggerHook: 0.4,
        duration: $('.hero').outerHeight()
    })
    // .addIndicators({
    //     name: 'transportation'
    // })
    .setClassToggle('#nav', 'invisible')
    .addTo(controller)
    ;

    var scrollIndicator = new ScrollMagic.Scene({
        triggerElement: '#transportation',
        triggerHook: 0.4,
        duration: $('#transportation').outerHeight()
    })
    // .addIndicators({
    //     name: 'transportation'
    // })
    .setClassToggle('#nav', 'go-white')
    .addTo(controller)
    ;



    // READY TO PARTY 

    $('input#party').on('click', function() {

        if ($('input#party').prop('checked')) {

            $('.hidden-party').addClass('party');
        }

        $('#rick').get(0).play();
    });

    $('#submit-btn').on('click', function(){
        $('#rick').get(0).pause();
    });



    // HANDLE FORM SUBMIT
    // https://script.google.com/macros/u/1/s/AKfycbwa4fAR5TN0qIpF06evCkhPrNFLb4LuiiAJEpQn5VWariKIvCE/exec

    var $form = $('form#test-form'),
        url = 'https://script.google.com/macros/s/AKfycbwa4fAR5TN0qIpF06evCkhPrNFLb4LuiiAJEpQn5VWariKIvCE/exec'

    function addActive() {
        $('button.button').addClass('active');
    }
    function addCheck() {
        $('button.button').removeClass('active');
        $('button.button').addClass('finished');
    }

    $('form').on('submit', function (e) {
        e.preventDefault();
        addActive();
        $('input[type=submit]').addClass('sent');
        var form = $(this).serializeArray();
        var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: form
        }).success(function() {
            addCheck();
            $('input[type=text]').val('');
            $('input[type=checkbox]').prop('checked', false);
            $('input[type=radio]').prop('checked', false);
        }).fail(function() {
            alert('try again');
        });
    });

    $('.menu').on('click', function() {
        $('ul li:not(".menu")').toggle();
        $('nav ul').toggleClass('mobile');
        $('nav').toggleClass('mobile');
    });

    $('nav a').on('click', function() {
        if (window.innerWidth < 800) {
            $('ul li:not(".menu")').toggle();
            $('nav ul').removeClass('mobile');
            $('nav').removeClass('mobile');
        }
    });

    $('a').smoothScroll();

    // button
    function hover() {
        $(".button").on("mouseenter", function () {
            return $(this).addClass("hover");
        });
    }

    function hoverOff() {
        $(".button").on("mouseleave", function () {
            return $(this).removeClass("hover");
        });
    }

    function active() {
        return $('.button').addClass("active");
    }

    hover();
    hoverOff();
});






function initMap() {
            var mums = { lat: 44.980275, lng: -81.2954297 };
            var qualityInn = { lat: 44.5626069, lng: -80.9268468 };
            var penninsula = { lat: 44.7665576, lng: -81.1451329 };

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 9,
                center: penninsula,
                scrollwheel: false,
                styles: [
                    {
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#bdbdbd"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.locality",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.neighborhood",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                // "color": "#efc032"
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#dadada"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#c9c9c9"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    }
                ]
            });

            // google map
            function addMarker(feature) {
                if (feature.type === 'venue') {
                    var marker = new google.maps.Marker({
                        position: feature.position,
                        icon: "assets/rings.png",
                        map: map,
                        title: 'moms'
                    });
                } else if (feature.type === 'hotel') {
                    var marker = new google.maps.Marker({
                        position: feature.position,
                        icon: "assets/hotel.png",
                        map: map,
                        label: 'hotel'
                    });
                }
            }


            var features = [
                {
                    position: new google.maps.LatLng(44.980275, -81.2954297),
                    type: 'venue'
                },
                {
                    position: new google.maps.LatLng(44.5626069, -80.9268468),
                    type: 'hotel'
                },
                {
                    position: new google.maps.LatLng(44.7665576, -81.1451329 ),
                    type: 'hotel'
                }
            ]

            // var mums = { lat: 44.980275, lng: -81.2954297 };
            // var qualityInn = { lat: 44.5626069, lng: -80.9268468 };
            // var penninsula = { lat: 44.7665576, lng: -81.1451329 };

            for (var i = 0, feature; feature = features[i]; i++) {
                addMarker(feature);
            }
        }












