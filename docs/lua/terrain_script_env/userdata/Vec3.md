---
sidebar_position: 5
title: Vec3
hide_title: true
sidebar-label: 'Vec3'
---

<br></br>

## Vec3

**Associated namespace:** [sm.vec3](/docs/game_script_env/static_functions/sm.vec3)

A userdata object representing a <strong>3D vector</strong>.

<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>Vec3</code> + <code>Vec3</code> | Returns the sum of two vectors. |
| <code>Vec3</code> / <code>Vec3</code> | Returns the quotient of two vectors, dividing element by element. |
| <code>Vec3</code> / <code>number</code> | Returns the quotient of a vector and a scalar. |
| <code>Vec3</code> == <code>Vec3</code> | Checks if two vectors are equal. |
| <code>Vec3</code> < <code>Vec3</code> | Returns whether the first vector is "less than" the second. |
| <code>Vec3</code> * <code>Vec3</code> | Returns the product of two vectors, multiplying element by element. |
| <code>Vec3</code> * <code>number</code> | Returns the product of a vector and a scalar. |
| <code>Vec3</code> - <code>Vec3</code> | Returns the difference of two vectors. |
| tostring( <code>Vec3</code> ) | Returns the string representation of a vector. |
| -<code>Vec3</code> | Returns the negated vector. |

<strong>Values:</strong>

- <code>x</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The vector's X value.
	- <code>Set</code>: Sets the vector's X value.


- <code>y</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The vector's Y value.
	- <code>Set</code>: Sets the vector's Y value.


- <code>z</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The vector's Z value.
	- <code>Set</code>: Sets the vector's Z value.


## Functions

### cross

```lua
vec3:cross( vector )
```

Returns the [cross product](https://en.wikipedia.org/wiki/Cross_product) of two vectors.

<strong>Arguments:</strong> <br></br>

- <code>vec3</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The vector.
- <code>vector</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The second vector.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The cross product.

---

### dot

```lua
vec3:dot( vector )
```

Returns the [dot product](https://en.wikipedia.org/wiki/Dot_product) of two vectors.

<strong>Arguments:</strong> <br></br>

- <code>vec3</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The vector.
- <code>vector</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The second vector.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The dot product.

---

### length

```lua
vec3:length( vector )
```

Returns the length of the vector.

If you want the squared length, using [length2](#length2) is faster than squaring the result of this function.

<strong>Arguments:</strong> <br></br>

- <code>vec3</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The vector.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The length.

---

### length2

```lua
vec3:length2( vector )
```

Returns the squared length of the vector.

<strong>Arguments:</strong> <br></br>

- <code>vec3</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The vector.

<strong>Returns:</strong> <br></br>

- [<strong> number </strong>]: The squared length.

---

### max

```lua
vec3:max( vector )
```

Returns the maximum value between two vectors components.

<strong>Arguments:</strong> <br></br>

- <code>vec3</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The vector.
- <code>vector</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The second vector.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: Component wise maximum value vector.

---

### min

```lua
vec3:min( vector )
```

Returns the minimum value between two vectors components.

<strong>Arguments:</strong> <br></br>

- <code>vec3</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The vector.
- <code>vector</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The second vector.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: Component wise minimum value vector.

---

### normalize

```lua
vec3:normalize()
```

Normalizes the vector, ie. converts it to a unit vector of length 1.

<strong>Arguments:</strong> <br></br>

- <code>vec3</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The vector.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The normalized vector.

---

### rotate

```lua
vec3:rotate( angle, normal )
```

Rotates the vector around an axis.

The angle value uses [radians](https://en.wikipedia.org/wiki/Radian).

<strong>Arguments:</strong> <br></br>

- <code>vec3</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The vector.
- <code>angle</code> [<strong> number </strong>]: The angle.
- <code>normal</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The axis to be rotated around.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The rotated vector.

---

### rotateX

```lua
vec3:rotateX( angle )
```

Rotates the vector around the X axis.

The angle value uses [radians](https://en.wikipedia.org/wiki/Radian).

<strong>Arguments:</strong> <br></br>

- <code>vec3</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The vector.
- <code>angle</code> [<strong> number </strong>]: The angle.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The rotated vector.

---

### rotateY

```lua
vec3:rotateY( angle )
```

Rotates the vector around the Y axis.

The angle value uses [radians](https://en.wikipedia.org/wiki/Radian).

<strong>Arguments:</strong> <br></br>

- <code>vec3</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The vector.
- <code>angle</code> [<strong> number </strong>]: The angle.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The rotated vector.

---

### rotateZ

```lua
vec3:rotateZ( angle )
```

Rotates the vector around the Z axis.

The angle value uses [radians](https://en.wikipedia.org/wiki/Radian).

<strong>Arguments:</strong> <br></br>

- <code>vec3</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The vector.
- <code>angle</code> [<strong> number </strong>]: The angle.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The rotated vector.

---

### safeNormalize

```lua
vec3:safeNormalize( fallback )
```

Normalizes a vector with safety, ie. converts to a unit vector of length 1.

<strong>Arguments:</strong> <br></br>

- <code>vec3</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The vector.
- <code>fallback</code> [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The fallback vector.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/terrain_script_env/userdata/Vec3"> Vec3 </a> </strong>]: The normalized vector.

---





