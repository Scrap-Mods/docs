---
sidebar_position: 3
title: Quat
hide_title: true
sidebar-label: 'Quat'
---

<br></br>

## Quat

**Associated namespace:** [sm.quat](/docs/terrain_script_env/static_functions/sm.quat)

A userdata object representing a <strong>quaternion</strong>.

<strong>Values:</strong>

- <code>x</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The quat's X value.
	- <code>Set</code>: Sets the quat's X value.


- <code>y</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The quat's Y value.
	- <code>Set</code>: Sets the quat's Y value.


- <code>z</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The quat's Z value.
	- <code>Set</code>: Sets the quat's Z value.


- <code>w</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The quat's W value.
	- <code>Set</code>: Sets the quat's W value.


<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>Quat</code> == <code>Quat</code> | Checks if two quaternions are equal. |
| <code>Quat</code> * <code>Quat</code> | Returns the [Hamilton product](https://en.wikipedia.org/wiki/Quaternion#Hamilton_product) of two quaternions. |
| <code>Quat</code> * <code>Vec3</code> | Returns the rotation by a quaternion on a vector. |

:::info note
This information might be useful when multiplying a quaternion with another.

The wikipedia page linked above uses the <code>w, xi, yj, zk</code> representation, while the game uses <code>xi, yj, zk, w</code>.

<code>Quat1 &#42; Quat2</code> is equal to:

```lua
sm.quat.new(
    Quat1.w * Quat2.x + Quat1.x * Quat2.w + Quat1.y * Quat2.z - Quat1.z * Quat2.y,
    Quat1.w * Quat2.y - Quat1.x * Quat2.z + Quat1.y * Quat2.w + Quat1.z * Quat2.x,
    Quat1.w * Quat2.z + Quat1.x * Quat2.y - Quat1.y * Quat2.x + Quat1.z * Quat2.w,
    Quat1.w * Quat2.w - Quat1.x * Quat2.x - Quat1.y * Quat2.y - Quat1.z * Quat2.z
)
```

Also, <code>(Quat1 &#42; Quat2) &#42; Vec3</code> is equal to <code>Quat1 &#42; (Quat2 &#42; Vec3)</code>

:::