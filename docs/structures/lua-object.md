---
title: Lua Object
---

import BitstreamNotice from "./_bitstream-notice.mdx"

# LuaObject

The Lua Object is a custom serialization format used by the game to store Lua objects. It is used in packets, blueprints and save files.

## Structure

<BitstreamNotice />

| Offset | Field Name | Field Type                    | Notes |
|--------|------------|-------------------------------|-------|
| 0x00   | Magic Tag  | Constant `"LUA"` (`4c 55 41`) | This helps recognizing the start of the Lua object. |
| 0x03   | Version    | be u32                        | The version of the serialization format. This is currently `1`. |
| 0x07   | Data       | [LuaSaveData](#luasavedata)   | The data that is serialized. |

## LuaSaveData

### LuaSaveData Structure

| Offset | Field Name | Field Type | Notes |
|--------|------------|------------|-------|
| 0x00   | Type       | enum [LuaSaveDataType](#luasavedatatype-enum) : u8 | The type of data that is stored. |
| 0x01   | Value      | [LuaSaveDataValue](#luasavedatavalue) | The actual data that is stored. The type of this field depends on the `Type` field. |

## LuaSaveDataType enum

This enum is used to specify the type of data that is stored. This is an exhaustive list of all the types that can be serialized and deserialized.

| Type        | Value |
|-------------|-------|
| Nil         | 1     |
| Boolean     | 2     |
| Number      | 3     |
| String      | 4     |
| Table       | 5     |
| Int32       | 6     |
| Int16       | 7     |
| Int8        | 8     |
| Json        | 9     |
| Userdata    | 100   |
| Unknown_101 | 101   |

## LuaSaveDataValue

The `LuaSaveDataValue` field is used to store the actual data that is serialized. The type of this field depends on the `Type` field of the [LuaSaveData](#luasavedata) structure.

### Nil

The `Nil` type is used to represent a `nil` value in Lua. It does not have a value, as it is always `nil`. It is serialized as a byte array with a length of `0`.

| Field Name | Field Type    | Notes |
|------------|---------------|-------|
| Value      | Constant `""` | The `nil` value. |

### Boolean

The `Boolean` type is used to represent a boolean value in Lua. It is serialized as a single bit, where `0` is `false` and `1` is `true`.

| Field Name | Field Type   | Notes |
|------------|--------------|-------|
| Value      | Flag (1 bit) | The boolean value. |

:::warning
The boolean type is serialized as a single bit, which means that the byte that contains the boolean value may contain other data as well. Any data after the boolean value is offset by 1 bit.
:::

### Number

The `Number` type is used to represent a number in Lua. It is serialized as a 32-bit floating point number in big-endian format. Note that precision may be lost when serializing and deserializing numbers. The game uses this type to represent floating point numbers, and integers that do not fit within the 32-bit signed integer range.

| Field Name | Field Type    | Notes |
|------------|---------------|-------|
| Value      | be float      | The number value. |

### String

The `String` type is used to represent a string in Lua. It is serialized as a length-prefixed, utf-8 encoded string. The length is a 32-bit unsigned integer in big-endian format, followed by the string data.

:::warning
The contents of the string must be aligned to a whole byte. If the length of the string data is not a multiple of 8 bits, padding is inserted between the length and the string data to align the string data to a whole byte.
:::

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Size       | be u32     | The amount of bytes required to store the utf-8 encoded string data. |
| Padding    | *Padding*  | Padding to align the string data to a whole byte. |
| String     | char[Size] | The string data, encoded in utf-8. |

### Table

The `Table` type is used to represent a table in Lua. It is serialized as a list of key-value pairs. The table can be either an array or a dictionary. The type of the table is determined by the `Is Array` field.

:::warning
The `Is Array` field is stored as a single bit. This means that the byte that contains the `Is Array` field may contain other data as well. Any data after the `Is Array` field is offset by 1 bit.
:::
:::note
The `Table` type is a recursive structure, which means that tables can contain other tables.
:::

| Field Name | Field Type   | Notes |
|------------|--------------|-------|
| Count      | be u32       | The number of elements in the table. |
| Is Array   | Flag (1 bit) | Whether the table is an array or a dictionary. |

If `Is Array` is `false` (continued):

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Elements   | [TableKeyValuePair](#tablekeyvaluepair)[Count] | The key-value pairs of the table. |

If `Is Array` is `true` (continued):

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Offset     | be u32     | The offset of the first element in the table. |
| Elements   | [LuaSaveData](#luasavedata)[Count] | The elements of the table. |

#### TableKeyValuePair

##### TableKeyValuePair Structure

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Key        | [LuaSaveData](#luasavedata) | The key of the pair. |
| Value      | [LuaSaveData](#luasavedata) | The value of the pair. |


### Int32

The `Int32` type is used to represent a 32-bit signed integer in Lua. It is serialized as a 32-bit signed integer in big-endian format. The game uses this type to represent integers that fit within the 32-bit signed integer range, but not within the 16-bit signed integer range.

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Value      | be s32     | The integer value. |

### Int16

The `Int16` type is used to represent a 16-bit signed integer in Lua. It is serialized as a 16-bit signed integer in big-endian format. The game uses this type to represent integers that fit within the 16-bit signed integer range, but not within the 8-bit signed integer range.

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Value      | be s16     | The integer value. |

### Int8

The `Int8` type is used to represent an 8-bit signed integer in Lua. It is serialized as an 8-bit signed integer.

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Value      | s8         | The integer value. |

### Json

The `Json` type has not been documented yet.

### Userdata

The `Userdata` type is used to represent a userdata object in Lua. It is serialized as a [LuaUserdata](#luauserdata) object.

### Unknown_101

The `Unknown_101` type has not been documented yet.

## LuaUserdata

The `LuaUserdata` type is used to represent a userdata object in Lua. It is serialized as a type ID followed by the data of the userdata object. The type ID is used to determine the type of the userdata object, and the data is specific to the type of the userdata object.

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Type ID    | enum [UserdataTypeId](#userdatatypeid-enum) : be u32 | The type ID of the userdata object. |
| Data       | dynamic    | The data of the userdata object. The type of this field depends on the `Type ID` field. |

### UserdataTypeId enum

This enum is used to specify the type of the userdata object. This is an exhaustive list of all the types that can be serialized and deserialized.

| Type                                  | Value | Notes |
|---------------------------------------|-------|-------|
| [Uuid](#uuid)                         | 10001 | :white_check_mark: Serializable. |
| [Vec3](#vec3)                         | 10003 | :white_check_mark: Serializable. |
| [Quat](#quat)                         | 10004 | :white_check_mark: Serializable. |
| [Color](#color)                       | 10005 | :white_check_mark: Serializable. |
| RaycastResult                         | 10006 | :x: Cannot be serialized at all. |
| LoadCellHandle                        | 10007 | :grey_question: Unknown. |
| Effect                                | 10008 | :x: Cannot be serialized at all. |
| [Shape](#shape)                       | 10021 | :white_check_mark: Serializable. |
| [Body](#body)                         | 10022 | :white_check_mark: Serializable. |
| [Interactable](#interactable)         | 10023 | :white_check_mark: Serializable. |
| [Container](#container)               | 10024 | :white_check_mark: Serializable. |
| [Harvestable](#harvestable)           | 10025 | :white_check_mark: Serializable. |
| Network                               | 10026 | :x: Cannot be serialized at all. |
| [World](#world)                       | 10027 | :white_check_mark: Serializable. |
| [Unit](#unit)                         | 10028 | :large_orange_square: Cannot be deserialized on the client, but can be serialized for `sm.event.sendTo*` and storing in `sm.storage`. |
| Storage                               | 10029 | :x: Cannot be serialized at all. |
| [Player](#player)                     | 10030 | :white_check_mark: Serializable. |
| [Character](#character)               | 10031 | :white_check_mark: Serializable. |
| [Joint](#joint)                       | 10032 | :white_check_mark: Serializable. |
| AiState                               | 10033 | :x: Cannot be serialized at all. |
| AreaTrigger                           | 10035 | :x: Cannot be serialized at all. |
| [Portal](#portal)                     | 10036 | :large_orange_square: Cannot be deserialized on the client, but can be serialized for `sm.event.sendTo*` and storing in `sm.storage`. |
| [PathNode](#pathnode)                 | 10037 | :large_orange_square: Cannot be deserialized on the client, but can be serialized for `sm.event.sendTo*` and storing in `sm.storage`. |
| [Lift](#lift)                         | 10038 | :white_check_mark: Serializable. |
| [ScriptableObject](#scriptableobject) | 10039 | :white_check_mark: Serializable. |
| BuilderGuide                          | 10040 | :x: Cannot be serialized at all. |
| CullSphereGroup                       | 10041 | :x: Cannot be serialized at all. |
| VoxelTerrain                          | 10042 | :grey_question: Unknown. |
| Widget                                | 20001 | :grey_question: Unknown. |
| [Tool](#tool)                         | 20002 | :white_check_mark: Serializable. |
| GuiInterface                          | 20006 | :x: Cannot be serialized at all. |
| BlueprintVisualization                | 20007 | :x: Cannot be serialized at all. |

### Uuid

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Uuid       | le u128    | The UUID value. |

### Vec3

| Field Name | Field Type | Notes |
|------------|------------|-------|
| X          | be float   | The X component of the vector. |
| Y          | be float   | The Y component of the vector. |
| Z          | be float   | The Z component of the vector. |

### Quat

| Field Name | Field Type | Notes |
|------------|------------|-------|
| X          | be float   | The X component of the quaternion. |
| Y          | be float   | The Y component of the quaternion. |
| Z          | be float   | The Z component of the quaternion. |
| W          | be float   | The W component of the quaternion. |

### Color

| Field Name | Field Type | Notes |
|------------|------------|-------|
| R          | be float   | The red component of the color. |
| G          | be float   | The green component of the color. |
| B          | be float   | The blue component of the color. |
| A          | be float   | The alpha component of the color. |

### Shape

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Shape ID   | be u32     | The ID of the shape. |

### Body

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Body ID    | be u32     | The ID of the body. |

### Interactable

| Field Name      | Field Type | Notes |
|-----------------|------------|-------|
| Interactable ID | be u32     | The ID of the interactable. |

### Container

| Field Name   | Field Type | Notes |
|--------------|------------|-------|
| Container ID | be u32     | The ID of the container. |

### Harvestable

| Field Name     | Field Type | Notes |
|----------------|------------|-------|
| Harvestable ID | be u32     | The ID of the harvestable. |

### World

| Field Name | Field Type | Notes |
|------------|------------|-------|
| World ID   | be u32     | The ID of the world. |

### Unit

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Unit ID    | be u32     | The ID of the unit. |

### Player

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Player ID  | be u32     | The ID of the player. |

### Character

| Field Name   | Field Type | Notes |
|--------------|------------|-------|
| Character ID | be u32     | The ID of the character. |

### Joint

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Joint ID   | be u32     | The ID of the joint. |

### Portal

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Portal ID  | be u32     | The ID of the portal. |

### PathNode

| Field Name  | Field Type | Notes |
|-------------|------------|-------|
| PathNode ID | be u32     | The ID of the path node. |

### Lift

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Lift ID    | be u32     | The ID of the lift. |

### ScriptableObject

| Field Name           | Field Type | Notes |
|----------------------|------------|-------|
| Scriptable Object ID | be u32     | The ID of the scriptable object. |

### Tool

| Field Name | Field Type | Notes |
|------------|------------|-------|
| Tool ID    | be u32     | The ID of the tool. |

