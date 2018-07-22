var Youtuber = function(data) {
	var self = this;

	this.id = ko.observable(data.id);
	this.name = ko.observable(data.name);
	this.playlist = ko.observable(data.playlist);
}

function AppViewModel() {
	var self = this;

	this.seasonOne = ko.observableArray([]);
	this.currentYoutuber = ko.observable();

	$.each(seasonOne, function(_, youtuber) {
		self.seasonOne().push(new Youtuber(youtuber));
	});

	this.currentYoutuber(this.seasonOne()[0]);
	this.currentIndex = ko.observable(0);

	this.nextYoutuber = function() {
		self.currentIndex(self.currentIndex() + 1);

		if (self.currentIndex() >= self.seasonOne().length) {
			self.currentIndex(0);
		}

		self.currentYoutuber(self.seasonOne()[self.currentIndex()]);
	}

	this.prevYoutuber = function() {
		self.currentIndex(self.currentIndex() - 1);

		if (self.currentIndex() <= -1) {
			self.currentIndex(self.seasonOne().length - 1);
		}

		self.currentYoutuber(self.seasonOne()[self.currentIndex()]);
	}

	this.changeYoutuber = function(Youtuber) {
		self.currentYoutuber(Youtuber);
	}

	this.currentPlaylist = ko.computed(function() {
		return "https://www.youtube.com/embed/videoseries?list=" + self.currentYoutuber().playlist()
	}, this);
}

THUMBNAIL_IMG_FOR = `<a href="https://youtu.be/{1}" target="_blank">
	<img class="thumbnails" src="{0}" alt="{0}" />
</a>`

URL = "https://www.googleapis.com/youtube/v3/"
KEY = "AIzaSyAfW9MmjMo2bEhcFD949E-XhaXO2qIHF5E"
CHANNEL_ID = "UCFP5dcztP_2ayfrXFig6-Qg"

var viewmodel = new AppViewModel();
ko.applyBindings(viewmodel);