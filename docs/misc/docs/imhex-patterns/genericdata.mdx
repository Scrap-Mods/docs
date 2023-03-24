---
title: Generic
---

```c
struct DynamicDataHeader {
	u128 uid;
	u16 channel; // found in savegameversion 26 for player data
	u32 key;
	be u16 worldId;
	u32 flags;
	u8 compressedSize;
};

struct Body {
	padding[1];
	float z;
	float y;
	float x;
};

struct Trailer {
	be u64 steamId64;
	be u32 container;
	be u32 unknown;
	be u32 unknown;
};

struct Player {
	DynamicDataHeader header;
	Body body;
	Trailer trailer @ addressof(body) + header.compressedSize - 0x14;
	u8 compressed[header.compressedSize] @ addressof(body);
};

Player player @ 0x00;
```
