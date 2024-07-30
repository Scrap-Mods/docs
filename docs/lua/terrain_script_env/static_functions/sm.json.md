---
sidebar_position: 6
title: sm.json
hide_title: true
sidebar-label: 'sm.json'
---

<br></br>

## sm.json

The JSON library is used for reading and writing data from/to JSON files.

## Functions

### fileExists

```lua
sm.json.fileExists( file )
```

Returns whether any file *or* folder exists at the given path.

<strong>Arguments:</strong> <br></br>

- <code>file</code> [<strong> string </strong>]: The file path to check.

<strong>Returns:</strong> <br></br>

- [<strong> bool </strong>]: Whether the file exists or not.

---

### open

```lua
sm.json.open( file )
```

Opens a JSON file and returns it's content as a Lua table.

<strong>Arguments:</strong> <br></br>

- <code>file</code> [<strong> string </strong>]: The file path.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The loaded JSON data.

---

### parseJsonString

```lua
sm.json.parseJsonString( json )
```

Parses a JSON string and returns it as a Lua table.

<strong>Arguments:</strong> <br></br>

- <code>file</code> [<strong> string </strong>]: The JSON string.

<strong>Returns:</strong> <br></br>

- [<strong> table </strong>]: The parsed JSON data.

---

### save

```lua
sm.json.save( data, path )
```

Writes a Lua table to a JSON file.

If the file does not exist, this will create a new file at the given file path. <br></br>
If the file does exist, this will overwrite the file content.

<strong>Arguments:</strong> <br></br>

- <code>data</code> [<strong> table </strong>]: The Lua table.
- <code>path</code> [<strong> string </strong>]: The path to the JSON file.

---

### writeJsonString

```lua
sm.json.writeJsonString( data )
```

Converts a Lua table to a JSON string.

<strong>Arguments:</strong> <br></br>

- <code>data</code> [<strong> table </strong>]: The Lua table.

<strong>Returns:</strong> <br></br>

- [<strong> string </strong>]: The JSON string.

---