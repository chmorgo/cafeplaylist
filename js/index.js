// This is the "frontend", which is just a harness for simulating interaction with
// the "backend".
////


const UI = function(playlist) {
	const self = this;

	self.playlist = playlist;

	// in a real app, these would probably be set in minutes rather than seconds
	self.expiresOptions = [
		{id: 10, label: '10 seconds'},
		{id: 20, label: '20 seconds'},
		{id: 60, label: '60 seconds'},
	];
	self.expires = ko.observable(10);

	self.addRandomUser1 = () => self.addRandomUser(1);
	self.addRandomUser3 = () => self.addRandomUser(3);
	self.addRandomUser10 = () => self.addRandomUser(10);
	
	self.addRandomUser = artistCount => {
		const likesJson = [];
		for (var i = 0; i < artistCount; i++){
			likesJson.push(
				TestArtists[Math.floor((Math.random() * TestArtists.length))]
			);
		}
		self.playlist.appendUserLikes(likesJson);
	};

	// keep settings on the UI synced with the backend
	const onChangeExpires = () => self.playlist.setExpires(self.expires());
	self.expires.subscribe(onChangeExpires);
	onChangeExpires();
};

// taken from https://en.wikipedia.org/wiki/List_of_best-selling_music_artists
const TestArtists = [
	{id: 1, title: "The Beatles"},
	{id: 2, title: "Elvis Presley"},
	{id: 3, title: "Michael Jackson"},
	{id: 4, title: "Elton John"},
	{id: 5, title: "Madonna"},
	{id: 6, title: "Led Zeppelin"},
	{id: 7, title: "Rihanna"},
	{id: 8, title: "Pink Floyd"},
	{id: 9, title: "Eminem"},
	{id: 10, title: "Mariah Carey"},
	{id: 11, title: "Taylor Swift"},
	{id: 12, title: "Queen"},
	{id: 13, title: "Whitney Houston"},
	{id: 14, title: "Eagles"},
	{id: 15, title: "Celine Dion"},
	{id: 16, title: "AC/DC"},
	{id: 17, title: "The Rolling Stones"},
	{id: 18, title: "Drake"},
	{id: 19, title: "Garth Brooks"},
	{id: 20, title: "Kanye West"},
	{id: 21, title: "Justin Bieber"},
	{id: 22, title: "Ed Sheeran"},
	{id: 23, title: "Billy Joel"},
	{id: 24, title: "U2"},
	{id: 25, title: "Aerosmith"},
	{id: 26, title: "Barbra Streisand"},
	{id: 27, title: "Phil Collins"},
	{id: 28, title: "ABBA"},
	{id: 29, title: "Katy Perry"},
	{id: 30, title: "Chris Brown"},
	{id: 31, title: "Bruce Springsteen"},
	{id: 32, title: "Bruno Mars"},
	{id: 33, title: "Jay-Z"},
	{id: 34, title: "Metallica"},
	{id: 35, title: "Lady Gaga"},
	{id: 36, title: "Lil Wayne"},
	{id: 37, title: "Maroon 5"},
	{id: 38, title: "Adele"},
	{id: 39, title: "Beyoncé"},
	{id: 40, title: "Fleetwood Mac"},
	{id: 41, title: "Rod Stewart"},
	{id: 42, title: "Bee Gees"},
];
