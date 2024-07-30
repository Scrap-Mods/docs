---
sidebar_position: 14
title: sm.uuid
hide_title: true
sidebar-label: 'sm.uuid'
---

<br></br>

## sm.uuid

**Associated object type:** [Uuid](/docs/lua/terrain_script_env/userdata/Uuid)

A universally unique identifier (<strong>UUID</strong>) is a 128-bit number that can guarantee uniqueness across space and time.

To generate one, use [sm.uuid.new](#new).

## Functions

### generateNamed

```lua
sm.uuid.generateNamed( namespace, name )
```

Generates a named (version 5) uuid.

<strong>Arguments:</strong> <br></br>

- <code>namespace</code> [<strong> <a href="/docs/lua/terrain_script_env/userdata/Uuid"> Uuid </a> </strong>]: A uuid namespace for the name. The namespace makes sure any equal name from different namespaces do not collide.
- <code>name</code> [<strong> string </strong>]: A name, to generate a uuid from. Provided the same namespace and name, the uuid will be the same.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/lua/terrain_script_env/userdata/Uuid"> Uuid </a> </strong>]: The created uuid.

---

### generateRandom

```lua
sm.uuid.generateRandom()
```

Generates a random (version 4) uuid.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/lua/terrain_script_env/userdata/Uuid"> Uuid </a> </strong>]: The generated uuid.

---

### getNil

```lua
sm.uuid.getNil()
```

Creates a nil uuid `{00000000-0000-0000-0000-000000000000}`.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/lua/terrain_script_env/userdata/Uuid"> Uuid </a> </strong>]: The created uuid.

---

### new

```lua
sm.uuid.new( uuidString )
```

Creates a uuid from a string or generates a random uuid (version 4).

<strong>Arguments:</strong> <br></br>

- <code>uuidString</code> [<strong> string </strong>]: The UUID string. Defaults to random.

<strong>Returns:</strong> <br></br>

- [<strong> <a href="/docs/lua/terrain_script_env/userdata/Uuid"> Uuid </a> </strong>]: The created uuid.

---













