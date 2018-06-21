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

        $(".all_sounds").each(function() {
            var input = $(this);
            var inputValue = input.val();
            if ( inputValue != 0 ) {
               var audio =  $(this).next().find("audio")[0];
               audio.volume = inputValue;
               if ( audio.paused ) {
                   audio.play();
               } else {
                   audio.pause();
               }
            }

        });


	});

	$(".all_sounds").on("change mousemove", function() {
		var input = $(this);
		var audio = input.next().find("audio")[0];
		audio.volume = input.val();
	});

    // $("#mute").click(function() {
    //     $(".all_sounds").each(function() {
    //         var input = $(this);
    //         input.val(0);
    //         var audio = $(this).next().find("audio")[0];
    //         audio.volume = 0;
    //
    //     })
    //
    //
    // });

    $("#mute").click(function() {
        $(".all_sounds").each(function() {
            var input = $(this);
            input.val(0);
            var audio = $(this).next().find("audio")[0];
            audio.volume = 0;
        })


    });




});
