---
sidebar_position: 10
title: sm.terrainData
hide_title: true
sidebar-label: 'sm.terrainData'
---

<br></br>

## sm.terrainData

The data manager helps storing script data, both locally and between server and client in multiplayer games.

## Functions

### exists

```lua
sm.terrainData.exists()
```

Checks if terrain data exists for the current world.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the world has terrain data or not.

---

### legacy_getData

```lua
sm.terrainData.legacy_getData()
```

:::caution warning
Deprecated!
Use [sm.terrainData.load()](#load)
:::

Legacy function for reading creative terrain. <strong>Do not use.</strong>

<strong>Returns:</strong> <br></br>

- [<strong> string </strong>]: The serialized bitser data.

---

### legacy_loadTerrainData

```lua
sm.terrainData.legacy_loadTerrainData( id )
```

:::caution warning
Deprecated!
Use [sm.terrainData.load()](#load)
:::

Legacy function for reading creative custom terrain. <strong>Do not use.</strong>

<strong>Arguments:</strong> <br></br>

- <code>id</code> [<strong> int </strong>]: The id.

<strong>Returns:</strong> <br></br>

- [<strong> any </strong>]: The data. Any Lua object.

---

### legacy_saveTerrainData

```lua
sm.terrainData.legacy_saveTerrainData( id, data )
```

:::caution warning
Deprecated!
Use [sm.terrainData.save()](#save)
:::

Legacy function for storing creative custom terrain. <strong>Do not use.</strong>

<strong>Arguments:</strong> <br></br>

- <code>id</code> [<strong> int </strong>]: The id.
- <code>data</code> [<strong> any </strong>]: The data.

---

### legacy_setData

```lua
sm.terrainData.legacy_setData( data )
```

:::caution warning
Deprecated!
Use [sm.terrainData.save()](#save)
:::

Legacy function for storing creative custom terrain. <strong>Do not use.</strong>

<strong>Arguments:</strong> <br></br>

- <code>data</code> [<strong> string </strong>]: The serialized bitser data.

---

### load

```lua
sm.terrainData.load()
```

Loads the world's terrain data, if available.

<strong>Returns:</strong> <br></br>

- [<strong> any </strong>]: The data. Any Lua object.

---

### save

```lua
sm.terrainData.save( data )
```

Save and share terrain data over network from server to client.

The data is accessible from the same world.

<strong>Arguments:</strong> <br></br>

- <code>data</code> [<strong> any </strong>]: The data. Any Lua object.

---



