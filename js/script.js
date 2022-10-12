let filmArchive = [
	{
		id: 1,
		title: "Carpe Diem",
		"movie-director": "Peter Weir",
		"production-house": "Touchstone Pictures",
		actor: "Robin Williams",
		year: 1989,
	},
	{
		id: 2,
		title: "Batman Begins",
		"movie-director": "Christopher Nolan",
		"production-house": "TWarner Bros",
		actor: "Christian Bale",
		year: 2005,
	},
	{
		id: 3,
		title: "Pulp Fiction",
		"movie-director": "Quentin Tarantino",
		"production-house": "Miramax Films",
		actor: "John Travolta",
		year: 1994,
	},
	{
		id: 4,
		title: "Donnie Darko",
		"movie-director": "Richard Kelly",
		"production-house": "Pandora Cinema",
		actor: "Jake Gyllenhaal",
		year: 2001,
	},
];

let filmArchiveJSON = JSON.stringify(filmArchive);
window.localStorage.setItem("film-archive", filmArchiveJSON);
