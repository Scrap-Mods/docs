---
title: BlobData
---

# BlobData

A `BlobData` is a structure used to store or transmit various types of data in the game. It is used in the game's networking protocol to send data between the client and the server. The data is identified by a unique identifier, which is used to determine the type of data stored in the blob. The data is compressed using the LZ4 block compression algorithm.

Internally, the `BlobData` structure is managed by a `BlobDataManager` intance. There are two such managers, `GenericDataManager` and `ScriptDataManager`.

## Structure

| Offset | Field Name   | Field Type   | Notes |
|--------|--------------|--------------|-------|
| 0x00   | Uid          | be UUID      | The unique identifier of the type of blob data. Can be a UUIDv4, or a UUIDv5 composed of a namespace and a name. |
| 0x10   | Key Size     | be u16       | The size of the key. |
| 0x12   | Key          | u8[Key Size] | The key of the blob data. Can contain `le u32` or `Lua Object`. The type of the key is not stored in this structure, it depends on the `Uid`. |
| 0x12   | World ID     | be u16       | The ID of the world the blob data is associated with. See [Special World IDs](#special-world-ids). |
| 0x14   | Flags        | u8           | Flags for the blob data. It is currently not known which flags exist. The default value is `7`. |
| 0x15   | Data Size    | be u32       | The size of the compressed data. |
| 0x19   | Data         | u8[Data Size]| The data, compressed using the LZ4 block compression algorithm. What kind of data is stored here depends on the `Uid` field. |

### Special World IDs

These World IDs are taken from `sm.world.ids`.

| World ID       | Name      | Description |
|----------------|-----------|-------------|
| 0xFFFF (65535) | Any World | The blob data is associated with any or all worlds. |
| 0xFFFE (65534) | No World  | The blob data is associated with no world. |