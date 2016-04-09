/*
*	Config.js - Configuracion general del Bot.
*	
*	NOTA: No usar "node getserver.js", ya que 
*	los datos del servidor ya estan ingresados.
*
*	OJO: NO ALTERAR NI MODIFICAR NINGUN DATO
* 	SI NO SABES COMO HACERLO.
*/

exports.server = 'pandora.xiaotai.org'; //Host del Servidor

exports.port = 5000; //Puerto del Servidor

exports.serverid = 'pandora'; //Id del Servidor

exports.autoReconnectDelay = 10 * 1000;
exports.connectionTimeout = 2 * 60 * 1000;

/*
* Crash Guard
*/

exports.crashguard = true;

/*
* Security log
*/

exports.securityLog = {ageOfLogs: 7};

/*
* Watch Config
*/

exports.watchconfig = true;

/*
* Detalles de Usuario
*
* Es necesario aclarar que para que el bot pueda
* ingresar al servidor de forma correcta. Se debe 
* contar con una cuenta registrada en Pokemon Showdown.
*/

exports.nick = '';

exports.pass = '';

exports.autoReloginDelay = 60 * 1000;

/*
* Configuracion de Salas
*/

exports.rooms = ['lobby'];

exports.privateRooms = { //Salas privadas a las que el bot entrara
	//'salaprivada': true
};

exports.ignoreRooms = { //Salas las cuales el bot ignorara y no entrara
	//'sala': true
};

exports.initCmds = ['|/avatar 120']; //En caso que el bot cuente con avatar propio.
										//dejar espacio en blanco

/*
* Acceso Total
*/

exports.exceptions = {
	// 'username':true,
	'missiingno':true
};

/*
* ¿Como dar acceso total a un usuario?
* Ejemplo:
*
* exports.exceptions = {
*	'chslayer95': true,
*	'pandorabot': true
* };
*
*/

exports.ranks = ['+', '\u2605', '%', '@', '#', '&', '~'];

exports.globalPermissions = {
	'voice': '+', //Min rank to broadcast in a server
	'driver': '%', //Min rank to mute. Also min staff rank
	'moderator': '@', //Min rank to ban
	'roomowner': '#', //Rank for using room settings commands like set, lang, mod...
	'admin': '~' //Rank for using global admin commands
};

/*
* Configuracion de Comandos
*/

exports.commandTokens = ['-']

exports.defaultPermission = '%';

exports.permissionExceptions = {
	//command: 'rank'
	'say': '#',
	'info': '+',
	'wall': '%',
	'autoban': '#',
	'banword': '#',
	'joinphrase': '#',
	'challenge': '%',
	'searchbattle': '~',
	'tournament': '@',
	'games': '#'
};

exports.botguide = "http://foro.pandorashowdown.net/tema-Guia-de-Comandos-para-Bots";

//When you pm the bot but don't use a command, it replies you this message. Example: "Hi, I'm a bot. Use .help to view a command guide"
//The var #USER is replaced with the username that pms it
exports.pmhelp = "Hola #USER!!, soy __" + exports.nick + "__, si presento un problema contacta a Missiingno.";

/*
* Lenguaje Predeterminado
*
* OJO: Dejar como esta amenos que el bot 
* sea para una sala de idioma
*/

exports.language = 'spanish';

/*
* Mensajes de la Consola
*/

exports.debug = {
	/* Basic messages - Production Mode */
	error: true,
	ok: true,
	errlog: true,
	info: true,
	room: true,

	/* Monitoring */
	monitor: true,
	status: true,
	battle: false,

	/* Debug Mode */
	debug: false,
	cmdr: false,

	/* Low Level */
	recv: false,
	sent: false
};

/*
* Configuracion para 
* plugins especificos
*/

/*
* Moderation
*/

exports.moderation = {
	modException: '%', // Rango minimo, el cual deja de recibir moderacion

	allowmute: true,
	disableModNote: false,

	MOD_CONSTS: {
		FLOOD_MESSAGE_NUM: 5,
		FLOOD_PER_MSG_MIN: 500, // this is the minimum time between messages for legitimate spam. It's used to determine what "flooding" is caused by lag
		FLOOD_MESSAGE_TIME: 6 * 1000,

		MIN_CAPS_LENGTH: 18,
		MIN_CAPS_PROPORTION: 0.8,

		MAX_STRETCH: 7,
		MAX_REPEAT: 4
	},

	values: {
		'spam-p': 3,
		'spam': 4,
		'spam-link': 4,
		'flood-hard': 3,
		'flood': 2,
		'caps': 1,
		'stretch': 1,
		'banwords': 2,
		'inapwords': 2,
		'servers': 2,
		'youtube': 2,
		'spoiler': 2,
		'replays': 1
	},

	modDefault: {
		//basic mods
		'caps': 1,
		'stretching': 1,
		'flooding': 1,
		'spam': 1,

		'bannedwords': 1,
		'inapropiate': 1,

		//specific mods
		'spoiler': 0,
		'youtube': 0,
		'psservers': 0,
		'replays': 0,

		//multiple infraction
		'multiple': 1,

		//zero tolerance
		'zerotol': 1
	},

	punishments: [
		"warn",
		"mute",
		"hourmute",
		"roomban"
	],

	psServersExcepts: { //No añadir mas servidores
		"showdown": 1,
		"smogtours": 1,
		"pandora": 1
	},

	zeroToleranceDefaultLevel: 'h',
	zeroToleranceLevels: {
		'l': {name: 'Low', value: 1},
		'n': {name: 'Normal', value: 2},
		'h': {name: 'High', value: 3}
	}
};

/*
* Batallas
*/

exports.aceptAll = false;

exports.maxBattles = 1;

exports.initBattleMsg = ['Buena Suerte :P'];

exports.winmsg = ['Buen juego ñ_ñ'];

exports.losemsg = ['No te preocupes a la Proxima ganaras...'];

exports.battleMessages = {
	/* Examples of battle messages:
	'crit': {
		'self': ['lol that hax', 'stop haxing pls'],
		'foe': ['sorry', 'wow sorry for that', 'get critted']
	},
	'miss': {
		'self': ['wow hax', 'lol #poke you\'re blind']
	}
	*/
};

exports.battleModules = {
	/* Algorithms for use in battles */
	"challengecup1v1": "ingame-nostatus",
	"1v1": "ingame-nostatus"
};

//exports.battleLog = {ageOfLogs: 1}; // Days

exports.abandonedBattleAutojoin = true;

exports.ladderCheckInterval = 10 * 1000;

exports.ladderNumberOfBattles = 1;

exports.formatAliases = {
	'random': 'Random Battle',
	'randomdoubles': 'Random Doubles Battle',
	'randomtriples': 'Random Triples Battle',
	'doubles': 'Doubles OU',
	'triples': 'Smogon Triples',
	'vgc': 'Battle Spot Doubles (VGC 2015)',
	'vgc2015': 'Battle Spot Doubles (VGC 2015)',
	'ag': 'Anything Goes',
	'oras': 'OU',
	'bw': '[Gen 5] OU',
	'dpp': '[Gen 4] OU',
	'adv': '[Gen 3] OU',
	'gsc': '[Gen 2] OU',
	'rby': '[Gen 1] OU'
};

/*
* Tournaments
*/

exports.tourDefault = {
	format: 'ou',
	type: 'elimination',
	maxUsers: null,
	timeToStart: 30 * 1000,
	autodq: 1.5,
	scoutProtect: false
};

exports.leaderboards = {};

/* Leaderboard example:
exports.leaderboards['tournaments'] = {
	winnerPoints: 5,
	finalistPoints: 3,
	semiFinalistPoints: 1,
	battlePoints: 0,
	onlyOfficial: true // If true, only official tours (must use .official command) will be counted
};
*/

/*
* Youtube
*/

exports.youtube = {
	enableByDefault: false
};

/*
* Chat Logger
*/

exports.chatLogger = {
	rooms: [],
	ignore: {'tournament': ['update', 'updateEnd'], 'formats': true, 'challstr': true, 'updateuser': true, 'queryresponse': true},
	logIntroMessages: true,
	ageOfLogs: 7 //in days (max age of logs, 0 to keep logs infinitely)
};

/*
exports.logServer = {
	port: 5400,
	bindaddress: null,
	users: {
		'admin': {
			name: 'Administrator',
			pass: 'password',
			access: {'room1': 1, 'room2': 1}
		}
	},
	rooms: {
		'room1': {private: true},
		'room2': {private: true}
	}
};
*/

/*
* Auto-Invite
*/

exports.autoInvite = [
	//{linked: 'public room linked', private: 'private room', rank: '+'}
];

/*
* GitHub
* Read this: https://developer.github.com/webhooks/creating/
*/

exports.github = {
	room: 'development',
	secret: "",
	port: 3420
};

/*
* Groupchats
*/

exports.groupchats = {};

exports.groupChatTryJoinInterval = 60 * 1000;

/* Test example
exports.groupchats['groupchat-ecuacion-test'] = {
	toJoin: ['/join groupchat-ecuacion-test'],
	onJoin: ['Hi guys!'],
	onLeave: []
};
*/
