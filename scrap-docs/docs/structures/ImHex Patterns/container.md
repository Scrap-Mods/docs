---
title: Container
---

```c
struct Item {
    le u128 uuid;
    be u32 instanceId; // The instance id, if the item is a tool, else -1.
    be u16 quantity; // The number of items.
};

struct Container {
    u8 four;
    be u16 one;
    be u32 id;
    be u16 size; // The number of slots in the container.
    be u16 stackSize; // The stack size. Defaults to maximum possible stack size (65535).
    Item items[size];
    be u16 filterCount; // Removing this breaks everything.
    be u128 filterUuids[filterCount]; // Note the bytes are not in reversed order, unlike other UUIDs.
};

Container container @ 0x00;
```