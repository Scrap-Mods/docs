---
title: Generic
---

```c
struct World {
    be u32 seed;
    
    be u16 filenameLength;
    char filename[filenameLength];
    
    be u16 classnameLength;
    char classname[classnameLength];
    
    be u16 dataLength;
    char data[dataLength];
};

World world @ 0x00;
```