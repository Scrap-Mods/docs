---
sidebar_position: 12
title: sm.terrainTile
hide_title: true
sidebar-label: 'sm.terrainTile'
---

<br></br>

## sm.terrainTile

Reads .tile file data.

## Functions

### getAssetsForCell

```lua
sm.terrainTile.getAssetsForCell( tileId, tileOffsetX, tileOffsetY, sizeLevel )
```

Returns a table of all assets in a terrain cell.

<strong>Arguments:</strong> <br></br>

- <code>tileId</code> [<strong> <a href="/docs/lua/terrain_script_env/userdata/Uuid"> Uuid </a> </strong>]: The tile id.
- <code>tileOffsetX</code> [<strong> int </strong>]: The tile offset X.
- <code>tileOffsetY</code> [<strong> int </strong>]: The tile offset Y.
- <code>sizeLevel</code> [<strong> int </strong>]: The asset size level.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: A table containing the asset data. See structure below.

```lua title="Table Structure"
{
	{
		uuid = uuid,
		pos = vec3,
		rot = quat,
		colors = {
			string = color,
			...
		},
		tags = {
			string,
			...
		}
	},
	...
}
```

---

### getClutterIdxAt

```lua
sm.terrainTile.getClutterIdxAt( tileId, tileOffsetX, tileOffsetY, x, y )
```

Returns the clutter index at position (X, Y) in a tile.

<strong>Arguments:</strong> <br></br>

- <code>tileId</code> [<strong> int </strong>]: The tile id.
- <code>tileOffsetX</code> [<strong> int </strong>]: The tile offset X.
- <code>tileOffsetY</code> [<strong> int </strong>]: The tile offset Y.
- <code>x</code> [<strong> int </strong>]: The X position.
- <code>y</code> [<strong> int </strong>]: The Y position.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The clutter index.

---

### getColorAt

```lua
sm.terrainTile.getColorAt( tileId, tileOffsetX, tileOffsetY, lod, x, y )
```

Returns the terrain color at position (X, Y) in a tile.

<strong>Arguments:</strong> <br></br>

- <code>tileId</code> [<strong> int </strong>]: The tile id.
- <code>tileOffsetX</code> [<strong> int </strong>]: The tile offset X.
- <code>tileOffsetY</code> [<strong> int </strong>]: The tile offset Y.
- <code>lod</code> [<strong> int </strong>]: The level of detail.
- <code>x</code> [<strong> int </strong>]: The X position.
- <code>y</code> [<strong> int </strong>]: The Y position.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The color R value.
- [<strong> number </strong>]: The color G value.
- [<strong> number </strong>]: The color B value.

---

### getContentFromPrefab

```lua
sm.terrainTile.getContentFromPrefab( prefabPath, loadFlags )
```

Returns the content of a prefab.

<strong>Arguments:</strong> <br></br>

- <code>prefabPath</code> [<strong> string </strong>]: The path to the prefab file.
- <code>loadFlags</code> [<strong> int </strong>]: A mask of content to load.

<strong>Returns:</strong> <br></br>

- [<strong> table1 </strong>]: A table of creations in the prefab. See structure below.
- [<strong> table2 </strong>]: A table of prefabs in the prefab. See structure below.
- [<strong> table3 </strong>]: A table of nodes in the prefab. See structure below.
- [<strong> table4 </strong>]: A table of assets in the prefab. See structure below.
- [<strong> table5 </strong>]: A table of decals in the prefab. See structure below.
- [<strong> table6 </strong>]: A table of harvestables in the prefab. See structure below.
- [<strong> table7 </strong>]: A table of kinematics in the prefab. See structure below.

```lua title="Table Contents"
--table1
{
	{
		name = string,
		pos = vec3,
		rot = quat,
		sortingIndex = int,
		tags = {
			string,
			...
		}
	},
	...
}

--table2
{
	{
		name = string,
		pos = vec3,
		rot = quat,
		scale = vec3,
		tags = {
			string,
			...
		},
		flags = int
	},
	...
}

--table3
{
	{
		pos = vec3,
		rot = quat,
		scale = vec3,
		tags = {
			string,
			...
		},
		params = table
	},
	...
}

--table4
{
	{
		uuid = uuid,
		pos = vec3,
		rot = quat,
		slopeNormal = vec3,
		colors = {
			string = color,
			...
		},
		tags = {
			string,
			...
		}
	},
	...
}

--table5
{
	{
		pos = vec3,
		rot = quat,
		scale = vec3,
		decalId = int,
		color = color,
		layer = int,
		tags = {
			string,
			...
		}
	},
	...
}

--table6
{
	{
		uuid = uuid,
		pos = vec3,
		rot = quat,
		color = color,
		params = table,
		tags = {
			string,
			...
		}
	},
	...
}

--table7
{
	{
		uuid = uuid,
		pos = vec3,
		rot = quat,
		scale = vec3,
		color = color,
		params = table,
		tags = {
			string,
			...
		}
	},
	...
}
```

---

### getCreationsForCell

```lua
sm.terrainTile.getCreationsForCell( tileId, tileOffsetX, tileOffsetY )
```

Returns a table of all creations in a terrain cell.

<strong>Arguments:</strong> <br></br>

- <code>tileId</code> [<strong> <a href="/docs/lua/terrain_script_env/userdata/Uuid"> Uuid </a> </strong>]: The tile id.
- <code>tileOffsetX</code> [<strong> int </strong>]: The tile offset X.
- <code>tileOffsetY</code> [<strong> int </strong>]: The tile offset Y.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: A table of creation data. See structure below.

```lua title="Table Structure"
{
	{
		pathOrJson = string,
		pos = vec3,
		rot = quat
	},
	...
}
```

---

### getCreatorId

```lua
sm.terrainTile.getCreatorId( path )
```

Returns the id of the tile creator.

<strong>Arguments:</strong> <br></br>

- <code>path</code> [<strong> string </strong>]: The path to the tile file.

<strong>Returns:</strong> <br></br>

- [<strong> string </strong>]: The creator's id.

---

### getDecalsForCell

```lua
sm.terrainTile.getDecalsForCell( id, X-offset, Y-offset )
```

Returns all decals for a cell in a tile.

<strong>Arguments:</strong> <br></br>

- <code>id</code> [<strong> <a href="/docs/lua/terrain_script_env/userdata/Uuid"> Uuid </a> </strong>]: The tile id.
- <code>X-offset</code> [<strong> int </strong>]: The offset along the X axis.
- <code>Y-offset</code> [<strong> int </strong>]: The offset along the Y axis.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: A table of decal data. See structure below.

```lua title="Table Structure"
{
	{
		pos = vec3,
		rot = quat,
		scale = vec3,
		decalId = int,
		color = color,
		layer = int,
		tags = {
			string,
			...
		}
	},
	...
}
```

---

### getHarvestablesForCell

```lua
sm.terrainTile.getHarvestablesForCell( id, X-offset, Y-offset, sizeLevel )
```

Returns all harvestables for a cell in a tile.

<strong>Arguments:</strong> <br></br>

- <code>id</code> [<strong> <a href="/docs/lua/terrain_script_env/userdata/Uuid"> Uuid </a> </strong>]: The tile id.
- <code>X-offset</code> [<strong> int </strong>]: The offset along the X axis.
- <code>Y-offset</code> [<strong> int </strong>]: The offset along the Y axis.
- <code>sizeLevel</code> [<strong> int </strong>]: The size level of harvestables.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: A table of harvestable data. See structure below.

```lua title="Table Structure"
{
	{
		uuid = uuid,
		pos = vec3,
		rot = quat,
		color = color,
		params = table,
		tags = {
			string,
			...
		}
	},
	...
}
```

---

### getHeightAt

```lua
sm.terrainTile.getHeightAt( tileId, tileOffsetX, tileOffsetY, lod, x, y )
```

Returns the terrain height at position (X, Y) in a tile.

<strong>Arguments:</strong> <br></br>

- <code>tileId</code> [<strong> int </strong>]: The tile id.
- <code>tileOffsetX</code> [<strong> int </strong>]: The tile offset X.
- <code>tileOffsetY</code> [<strong> int </strong>]: The tile offset Y.
- <code>lod</code> [<strong> int </strong>]: The level of detail.
- <code>x</code> [<strong> int </strong>]: The X position.
- <code>y</code> [<strong> int </strong>]: The Y position.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The height.

---

### getKinematicsForCell

```lua
sm.terrainTile.getKinematicsForCell( id, X-offset, Y-offset, sizeLevel )
```

Returns all kinematics for a cell in a tile.

<strong>Arguments:</strong> <br></br>

- <code>id</code> [<strong> <a href="/docs/lua/terrain_script_env/userdata/Uuid"> Uuid </a> </strong>]: The tile id.
- <code>X-offset</code> [<strong> int </strong>]: The offset along the X axis.
- <code>Y-offset</code> [<strong> int </strong>]: The offset along the Y axis.
- <code>sizeLevel</code> [<strong> int </strong>]: The size level of kinematics.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: A table of kinematics data. See structure below.

```lua title="Table Structure"
{
	{
		uuid = uuid,
		pos = vec3,
		rot = quat,
		scale = vec3,
		color = color,
		params = table,
		tags = {
			string,
			...
		}
	},
	...
}
```

---

### getMaterialAt

```lua
sm.terrainTile.getMaterialAt( tileId, tileOffsetX, tileOffsetY, lod, x, y )
```

Returns the terrain material at position (X, Y) in a tile.

<strong>Arguments:</strong> <br></br>

- <code>tileId</code> [<strong> int </strong>]: The tile id.
- <code>tileOffsetX</code> [<strong> int </strong>]: The tile offset X.
- <code>tileOffsetY</code> [<strong> int </strong>]: The tile offset Y.
- <code>lod</code> [<strong> int </strong>]: The level of detail.
- <code>x</code> [<strong> int </strong>]: The X position.
- <code>y</code> [<strong> int </strong>]: The Y position.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The first R value.
- [<strong> number </strong>]: The first G value.
- [<strong> number </strong>]: The first B value.
- [<strong> number </strong>]: The first A value.
- [<strong> number </strong>]: The second R value.
- [<strong> number </strong>]: The second G value.
- [<strong> number </strong>]: The second B value.
- [<strong> number </strong>]: The second A value.

---

### getNodesForCell

```lua
sm.terrainTile.getNodesForCell( id, X-offset, Y-offset )
```

Returns all nodes for a cell in a tile.

<strong>Arguments:</strong> <br></br>

- <code>id</code> [<strong> <a href="/docs/lua/terrain_script_env/userdata/Uuid"> Uuid </a> </strong>]: The tile id.
- <code>X-offset</code> [<strong> int </strong>]: The offset along the X axis.
- <code>Y-offset</code> [<strong> int </strong>]: The offset along the Y axis.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: A table of node data. See structure below.

```lua title="Table Structure"
{
	{
		pos = vec3,
		rot = quat,
		scale = vec3,
		params = table,
		tags = {
			string,
			...
		}
	},
	...
}
```

---

### getPrefabsForCell

```lua
sm.terrainTile.getPrefabsForCell( id, X-offset, Y-offset )
```

Returns all prefabs for a cell in a tile.

<strong>Arguments:</strong> <br></br>

- <code>id</code> [<strong> <a href="/docs/lua/terrain_script_env/userdata/Uuid"> Uuid </a> </strong>]: The tile id.
- <code>X-offset</code> [<strong> int </strong>]: The offset along the X axis.
- <code>Y-offset</code> [<strong> int </strong>]: The offset along the Y axis.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: A table of prefab data. See structure below.

```lua title="Table Structure"
{
	{
		name = string,
		pos = vec3,
		rot = quat,
		scale = vec3,
		tags = {
			string,
			...
		},
		flags = int
	},
	...
}
```

---

### getSize

```lua
sm.terrainTile.getSize( path )
```

Returns the size of a tile as the number of cells along one of the axises.

<strong>Arguments:</strong> <br></br>

- <code>path</code> [<strong> string </strong>]: The path to the tile file.

<strong>Returns:</strong> <br></br>

- [<strong> int </strong>]: The size.

---

### getTileUuid

```lua
sm.terrainTile.getTileUuid( path )
```

Returns the uuid for a tile file.

<strong>Arguments:</strong> <br></br>

- <code>path</code> [<strong> string </strong>]: The path to the tile file.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/lua/terrain_script_env/userdata/Uuid"> Uuid </a> </strong>]: The tile's uuid.

---