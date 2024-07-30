---
title: Player
---

```c
struct PlayerData {
	be u16 unknown;
	be float z;
	be float y;
	be float x;
	padding[0xc];
	be float yaw;
	be float pitch;
	be u64 steamId64;
	be u32 inventoryContainerId;
};

PlayerData playerData @ 0x00;
```