Navigation = function(){
	this.settings={
		btn_nav: $('.btn-nav'),
		btn_nav_in: $('.in-btn-nav'),
		artist_section: $('#artist-section').offset().top,
		store_section: $('#store-section').offset().top,
		events_section: $('#events-section').offset().top,
		calendar_section : $('#calendar-section').offset().top,
		about_section: $('#about-section').offset().top,
		contact_section: $('#contact-section').offset().top,
		artist_btn: $('.go_artist'),
		calendar_btn: $('.go_calendar'),
		store_btn: $('.go_store'),
	};
};
Navigation.prototype.init= function(){
	var self = this;
	self.bind();
	self.scrollControl();
};
Navigation.prototype.bind= function(){
	var self = this,
		s = self.settings;

	s.btn_nav.on('click', function(){
		var selection = $(this).attr('id');

		s.btn_nav_in.removeClass('active-nav');
		s.btn_nav_in.removeClass('no-nav');

		$('#'+selection+'-btn').addClass('active-nav');
		self.animation(selection);
	});
	s.artist_btn.on('click', function(){
		s.btn_nav_in.removeClass('active-nav');
		s.btn_nav_in.removeClass('no-nav');
		$('#artist-btn').addClass('active-nav');
		self.animation('artist');
	});

	s.calendar_btn.on('click', function(){
		s.btn_nav_in.removeClass('active-nav');
		s.btn_nav_in.removeClass('no-nav');
		$('#calendar-btn').addClass('active-nav');
		self.animation('calendar');
	});

	s.store_btn.on('click', function(){
		s.btn_nav_in.removeClass('active-nav');
		s.btn_nav_in.removeClass('no-nav');
		$('#store-btn').addClass('active-nav');
		self.animation('store');
	});
	
};
Navigation.prototype.animation= function(actions){
	var self = this,
		s = self.settings;
	switch(actions){
		case 'artist':
			var goTop = s.artist_section+220;
			$('body').animate({
                scrollTop: goTop
            }, 500, 'easeInOutQuad');
			break;
		case 'store':
			var goTop = s.store_section-220;
			$('body').animate({
                scrollTop: goTop
            }, 500, 'easeInOutQuad');
		
			break;
		case 'events':
			var goTop = s.events_section-200;
			$('body').animate({
                scrollTop: goTop
            }, 500, 'easeInOutQuad');
		
			break;
		case 'calendar':
			var goTop = s.calendar_section-220;
			$('body').animate({
                scrollTop: goTop
            }, 500, 'easeInOutQuad');
		
			break;
		case 'about':
			var goTop = s.about_section-200;
			$('body').animate({
                scrollTop: goTop
            }, 500, 'easeInOutQuad');
		
			break;
		case 'contact':
			var goTop = s.contact_section+220;
			$('body').animate({
                scrollTop: goTop
            }, 500, 'easeInOutQuad');
		
			break;
	};
};
Navigation.prototype.scrollControl = function(){
	var self = this,
		s = self.settings;
	$(window).scroll( function() {
		var scrolled_val = $(document).scrollTop().valueOf();
		// console.log(scrolled_val);
		if(scrolled_val > s.artist_section){
			s.btn_nav_in.removeClass('active-nav');
			s.btn_nav_in.removeClass('no-nav');
			$('#artist-btn').addClass('active-nav');
		}
		if(scrolled_val > s.store_section-220){
			s.btn_nav_in.removeClass('active-nav');
			s.btn_nav_in.removeClass('no-nav');
			$('#store-btn').addClass('active-nav');
		}
		if(scrolled_val > s.events_section-200){
			s.btn_nav_in.removeClass('active-nav');
			s.btn_nav_in.removeClass('no-nav');
			$('#events-btn').addClass('active-nav');
		}
		if(scrolled_val > s.calendar_section-220){
			s.btn_nav_in.removeClass('active-nav');
			s.btn_nav_in.removeClass('no-nav');
			$('#calendar-btn').addClass('active-nav');
		}
		if(scrolled_val > 6600){
			s.btn_nav_in.removeClass('active-nav');
			s.btn_nav_in.removeClass('no-nav');
			$('#about-btn').addClass('active-nav');
		}
		if(scrolled_val > 7884){
			s.btn_nav_in.removeClass('active-nav');
			s.btn_nav_in.removeClass('no-nav');
			$('#contact-btn').addClass('active-nav');
		}
	});


};








