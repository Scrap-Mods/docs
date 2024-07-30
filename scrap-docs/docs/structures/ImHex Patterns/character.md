---
title: Character
---

```c
enum Gender : u8 {
	Male,
	Female,
};

struct Character {
	be u32 version;
	Gender gender;
	u8 size;
	u128 face;
	u128 hair;
	u128 facial_hair;
	u128 torso;
	u128 gloves;
	u128 shoes;
	u128 pants;
	u128 hat;
	u128 backpack;
	be u32 palette_face;
	be u32 palette_hair;
	be u32 palette_facial_hair;
	be u32 palette_torso;
	be u32 palette_gloves;
	be u32 palette_shoes;
	be u32 palette_pants;
	be u32 palette_hat;
	be u32 palette_backpack;
};

Character character @ 0x00;
```
