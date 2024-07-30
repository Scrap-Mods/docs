---
sidebar_position: 5
title: sm.harvestable
hide_title: true
sidebar-label: 'sm.harvestable'
---

<br></br>

## sm.harvestable

**Associated object type:** [Harvestable](/docs/terrain_script_env/userdata/Harvestable)

## Functions

### create

```lua
sm.harvestable.create( uuid, position, rotation, slopeNormal )
```
<code>Server-Only</code> <br></br>

Creates a new harvestable.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> <a href="/docs/terrain_script_env/userdata/Uuid"> Uuid </a> </strong>]: The uuid of the harvestable.
- <code>position</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The harvestable's world position.
- <code>rotation</code> [<strong> <a href="/docs/terrain_script_env/userdata/Quat"> Quat </a> </strong>]: The harvestable's world rotation. Defaults to <code>sm.quat.identity()</code>.
- <code>slopeNormal</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The harvestable's slope normal, for "skew" and "rotate" slope settings. Defaults to Z axis.

---

### createHarvestable

```lua
sm.harvestable.createHarvestable( uuid, position, rotation, slopeNormal )
```
<code>Server-Only</code> <br></br>

Creates a new harvestable.

<strong>Arguments:</strong> <br></br>

- <code>uuid</code> [<strong> <a href="/docs/terrain_script_env/userdata/Uuid"> Uuid </a> </strong>]: The uuid of the harvestable.
- <code>position</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The harvestable's world position.
- <code>rotation</code> [<strong> <a href="/docs/terrain_script_env/userdata/Quat"> Quat </a> </strong>]: The harvestable's world rotation. Defaults to <code>sm.quat.identity()</code>.
- <code>slopeNormal</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The harvestable's slope normal, for "skew" and "rotate" slope settings. Defaults to Z axis.

---