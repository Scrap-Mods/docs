---
sidebar_position: 2
title: Environment Table
hide_title: true
sidebar-label: 'Environment Table'
---

<br></br>

## Environment Table

This is the raw Lua environment table of the terrain script environment.

```lua
unsafe_env = {
	print = print,
	dofile = dofile,
	type = type,
	assert = assert,
	error = error,
	ipairs = ipairs,
	next = next,
	pairs = pairs,
	pcall = pcall,
	select = select,
	tonumber = tonumber,
	tostring = tostring,
	type = type,
	unpack = unpack,
	_VERSION = _VERSION,
	xpcall = xpcall,
	gcinfo = gcinfo,
	class = class,
	sm = {
		version = sm.version,
		isHost = sm.isHost,
		isServerMode = sm.isServerMode,
		exists = sm.exists,
		terrainData = sm.terrainData,
		terrainTile = sm.terrainTile,
		terrainGeneration = sm.terrainGeneration,
		voxelTerrainGrid = sm.voxelTerrainGrid,
		world = sm.world,
		json = sm.json,
		noise = sm.noise,
		util = sm.util,
		log = sm.log,
		vec3 = sm.vec3,
		quat = sm.quat,
		uuid = sm.uuid,
		color = sm.color
	},
	string = {
		byte = string.byte,
		char = string.char,
		find = string.find,
		format = string.format,
		gmatch = string.gmatch,
		gsub = string.gsub,
		len = string.len,
		lower = string.lower,
		match = string.match,
		rep = string.rep,
		reverse = string.reverse,
		sub = string.sub,
		upper = string.upper
	},
	table = {
		insert = table.insert,
		maxn = table.maxn,
		remove = table.remove,
		sort = table.sort,
		concat = table.concat,
		getn = table.getn
	},
	math = {
		abs = math.abs,
		acos = math.acos,
		asin = math.asin,
		atan = math.atan,
		atan2 = math.atan2,
		ceil = math.ceil,
		cos = math.cos,
		cosh = math.cosh,
		deg = math.deg,
		exp = math.exp,
		floor = math.floor,
		fmod = math.fmod,
		frexp = math.frexp,
		huge = math.huge,
		ldexp = math.ldexp,
		log = math.log,
		log10 = math.log10,
		max = math.max,
		min = math.min,
		modf = math.modf,
		pi = math.pi,
		pow = math.pow,
		rad = math.rad,
		random = math.random,
		sin = math.sin,
		sinh = math.sinh,
		sqrt = math.sqrt,
		tan = math.tan,
		tanh = math.tanh,
		randomseed = math.randomseed
	},
	bit = {
		tobit = bit.tobit,
		tohex = bit.tohex,
		bnot = bit.bnot,
		band = bit.band,
		bor = bit.bor,
		bxor = bit.bxor,
		lshift = bit.lshift,
		rshift = bit.rshift,
		arshift = bit.arshift,
		rol = bit.rol,
		ror = bit.ror,
		bswap = bit.bswap
	},
	os = {
		clock = os.clock,
		difftime = os.difftime,
		time = os.time
	}
}
```












