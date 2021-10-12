let modInfo = {
	name: "The Button Tree",
	id: "TheButtonTree",
	author: "patfr",
	pointsName: "Cash",
	modFiles: ["Layers/m.js", "Layers/r.js", "Layers/sr.js", "Layers/t.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 24,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.2a",
	name: "Release",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.2a</h3><br>
		- Added Rebirth layer.<br>
		- Added 4 more Multiplier layer upgrades.
		<br><br>
	<h3>v0.1a</h3><br>
		- Added Multiplier layer.<br>
		- Added 1 Multiplier layer upgrade.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)
	let gain = new Decimal(1)
	if (hasUpgrade('m', 11)) gain = gain.mul(upgradeEffect('m', 11))
	if (hasUpgrade('m', 12)) gain = gain.mul(upgradeEffect('m', 12))
	if (hasUpgrade('m', 13)) gain = gain.mul(upgradeEffect('m', 13))
	if (hasUpgrade('m', 14)) gain = gain.mul(upgradeEffect('m', 14))
	if (hasUpgrade('m', 15)) gain = gain.mul(upgradeEffect('m', 15))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}