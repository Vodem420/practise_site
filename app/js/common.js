$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	console.log("test I'm alive!")

	$("#animated-btn").click(function() {
		var button = $( this );
        button.toggleClass('button_animation');
		if ( button.hasClass('button_animation') ) {
            $( this ).text("Pause");
		} else {
            $( this ).text("Play");
		}

		var music = $("audio")[0];
		if (music.paused) {
            music.play();
        } else {
            music.pause();
		}
	});

	$("#first-audio").on("change mousemove", function() {
		var input = $(this);
		var audio = input.next().find("audio")[0];
		audio.volume = input.val();
		console.log("audio.volume", audio.volume);
	})

	console.log('sadfasdf');


/*
    var music = $('#main_audio')[0];
    var players = [];

    var radioEfir = 'http://m11m128.hostingradio.ru:8074/m11m128.mp3';
    var audioPlayer = $('#main_audio');

    $( ".header-wrap" ).on( "click", ".radio-button", function playAudio() {
        $(this).closest('.radio-block').toggleClass('active');
        if C {
            $(audioPlayer).attr('src', radioEfir);
            music.play();

            // TODO check if players provided are not undefined
            $.each(players, function(i,val){
                this.pauseVideo();
            });

        } else {
            $(audioPlayer).attr('src', '');
            music.pause();
        }
    });
   */

});
