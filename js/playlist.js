// This is the "backend". In a real application it would be probably be a web service.
////

const PlaylistItem = function(json) {
	const self = this;
	self._id = json.id;
	self._title = json.title;
	self._created = Math.floor(Date.now() / 1000);
};

const Playlist = function() {
	const self = this;

	self._items = ko.observableArray();
	self._expires = ko.observable(0);

	self._isEmpty = ko.pureComputed(() => self._items().length == 0);

	self._cleanupExpired = () => {
		const now = Math.floor(Date.now() / 1000);
		const expires = self._expires();
		self._items.remove(item => now > item._created + expires);
	};
	setInterval(self._cleanupExpired, 1000);

	// Transform our list of items into a sorted frequency graph.
	// The regeneration of this playlist is intentionally rate limited, to prevent
	// spamming the Spotify service.
	self._spotifyPlaylist = ko.pureComputed(() => {
		const summary = [];

		self._items().forEach(item => {
			const itemId = item._id;
			const itemTitle = item._title;
			if (!summary[itemId]) {
				summary[itemId] = {
					label: itemTitle,
					artistId: itemId,
					count: 0,
				};
			}
			summary[itemId].count += 1;
		});

		return Object.values(summary).sort(
			(a, b) => b.count - a.count || a.label.localeCompare(b.label)
		);
	}).extend({ rateLimit: 100 });

	self._spotifyPlaylist.subscribe(summaryItems => {
		console.log('----');
		console.log('## Update Spotify playlist ##');
		console.log(JSON.stringify(summaryItems, null, '\t'));
		console.log('----');
	});

	// These are the "external" methods that can be called from the frontend.
	////

	self.appendUserLikes = likesJson =>
		likesJson.forEach(likeJson => self._items.push(new PlaylistItem(likeJson)));

	self.setExpires = expires => self._expires(expires);
};
