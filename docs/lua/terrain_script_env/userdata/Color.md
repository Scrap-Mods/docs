---
sidebar_position: 1
title: Color
hide_title: true
sidebar-label: 'Color'
---

<br></br>

## Color

**Associated namespace:** [sm.color](/docs/lua/game_script_env/static_functions/sm.color)

A userdata object representing a <strong>color</strong>.

<strong>Values:</strong>

- <code>r</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The red value of the color (0.0 - 1.0).
	- <code>Set</code>: Sets the red value of the color (0.0 - 1.0).


- <code>g</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The green value of the color (0.0 - 1.0).
	- <code>Set</code>: Sets the green value of the color (0.0 - 1.0).


- <code>b</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The blue value of the color (0.0 - 1.0).
	- <code>Set</code>: Sets the blue value of the color (0.0 - 1.0).


- <code>a</code> [<strong> number </strong>] <br></br>

	- <code>Get</code>: The alpha value of the color (0.0 - 1.0).
	- <code>Set</code>: Sets the alpha value of the color (0.0 - 1.0).


<strong>Operations:</strong>

| Operation   | Description |
| ----------- | ----------- |
| <code>Color</code> == <code>Color</code> | Checks if two colors are equal. |
| <code>Color</code> + <code>Color</code> | Returns the sum of two colors, adding each component. |
| <code>Color</code> / <code>Color</code> | Returns the quotient of two colors, dividing each component. |
| <code>Color</code> / <code>number</code> | Returns the quotient of a color and a scalar. |
| <code>Color</code> * <code>Color</code> | Returns the product of two colors, multiplying each component. |
| <code>Color</code> * <code>number</code> | Returns the product of a color and a scalar. |
| <code>Color</code> - <code>Color</code> | Returns the difference of two colors, subtracting each component. |
| tostring( <code>Color</code> ) | Returns the color as a string. |

## Functions

### getHexStr

```lua
color:getHexStr()
```

Returns the hex representation of the color.

<strong>Arguments:</strong> <br></br>

- <code>color</code> [<strong> <a href="/docs/terrain_script_env/userdata/Color"> Color </a> </strong>]: The color.

<strong>Returns:</strong> <br></br>

- [<strong> string </strong>]: The color's hex string.

---

