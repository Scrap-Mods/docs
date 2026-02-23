---
title: Metatables
---

A detailed explanation of Lua metatables, why they are restricted in Scrap Mechanic, and how they can be nearly fully reimplemented due to an oversight in the `class` helper function.

## Metatables in Scrap Mechanic

In normal Lua, metatables allow you to place in custom behaviour into tables, allowing you to change the operations of one such as:
- Indexing (`__index`)
- Assigment (`__newindex`)
- Calling like its a function (`__call`)
- Convertion to a st ring (`__tostring`)
- Arithmetic operators (`__add`, `__sub`, etc.)

Normally you would use the following functions in order to manipulate them:
- `setmetatable(table, metatable)`
- `getmetatable(table)`
- `rawset(table, key, value)`
- `rawget(table, key)`

Metatables can be quite useful for things such as implementing your own userdata and more. However, in Scrap Mechanic, metatables are completely\* blocked off meaning that you are unable to
manipualte anything related to metatables.

Despite this, due to an implementation oversight in the built-in `class` function provided by the game, we can recreate almost 100% of the functionality of metatables back into Scrap Mechanic.

## The oversight: `class`

Scrap Mechanic provides a helper function called `class`, used for anything scriptable in Lua such as:
- Interactables
- Tools
- Worlds

Internally this is a simple function completely implemented in lua, meaning we can easly inspect on how it works.

```lua title="class.lua" showLineNumbers

function class(super)

    local klass = {}

    -- Copy members from super.
    if super then
        for k, v in pairs(super) do
            klass[k] = v
        end
    end

    local meta = {}
    
    -- Emulate constructor syntax.
    -- Triggers when a value is called like a function.
    meta.__call = function(self, ...)
        local instance = setmetatable({}, self)
        
        return instance
    end

    -- Emulate classes using prototyping.
    setmetatable(klass, meta)
    klass.__index = klass
    
    return klass

end
```

## What we can do with this oversight

In the lua function, there are **two critical detials** here:

### Metatable and `__call`

```lua title="class.lua"
meta.__call = function(self, ...)
    local instance = setmetatable({}, self)

    return instance
end
```

When you do:
```lua
local MyClass = class()
local obj = MyClass()
```

Lua would interpret `MyClass()` as `getmetatable(MyClass).__call(MyClass)` This means:
- The class itself has a metatable
- That metatable defines `__call`
- Calling the class creates a table whose metatable is the class

This is effectively a metatable chain that we can influence:
```
instance -> metatable-> klass
klass-> metatable -> meta
```

### Prototyping behaviour

This line enables prototyping behavior:
```lua
klass.__index = klass
```

If a key does not exist on the instance:
- Lua checks the metatable
- Finds __index
- Looks inside klass

This mimics classical Object-Oriented Programming behavior, but more importantly, it mimics metatable-based lookup.

## Exploiting this behaviour

The key realization:
> *Anything placed inside the table passed to `class(super)` becomes part of the prototype chain.*

Since `class(super)` copies all values from super into klass, we can inject metamethods into that prototype and so allows us to emulate metatables.

## Reimplementing `setmetatable`

:::info This is a basic implementation and can be made more accurate
The `setmetatable` function below is only a basic implementation and can be made more accurate. Things like `getmetatable` and the `__locked` metamethod will not work with this.
:::

With the knowledge about the class function, we can create a simple reimplementation of the `setmetatable` function like so:
```lua title="metatable.lua" showLineNumbers
function setmetatable(tbl, metatable)
    -- Step 1: Create a "metatable class" , this is where all of our metatable members will go.
    local customClass = class(metatable)

    -- Step 2: Fix __index as class overwrites it. So we have to restore the intended behaviour.
    customClass.__index = metatable.__index
    
    -- Step 3: Instantiate, the line below triggers meta.__call in the class function which calls
    --         "return setmetatable({}, self)" where self is customClass
    local output = customClass()
    
    -- We now have our table, but we need to put in values into it as the setmetatable call inside
    -- meta.__call for the class function has the tbl argument as a empty one. That also why you
    -- have to do this for metatables to work properly:
    --      ourTable = setmetatable(ourTable, ourMetatable)
    --
    -- as otherwise ourTable will not have the metatable actually applied. This is not needed if
    -- the table already has metatables and setmetatable simply overwrites the metatable for ourTable 
    -- if found.

    -- Step 4.1: If the metatable defines __newindex, assignments could be intercepted. To avoid
    -- this, we temporarlly disable __newindex.
    local old = customClass.__newindex
    customClass.__newindex = nil

    -- Step 4.2: Copy all values from the table into our new table.
    for key, value in pairs(tbl) do
        output[key] = value
    end

    -- Step 4.3: Restore __newindex if it was defined before.
    customClass.__newindex = old

    -- Return the output
    return output
end
```

With this `setmetatable` reimplementation, you can now use metatables inside Scrap Mechanic and basicly get the full power out of them.

Example usage:
```lua title="example.lua" showLineNumbers
local metatable = {} -- Our metatable table

-- Example metamethod
function metatable.__tostring(self)
    return "Metatables are awesome!"
end

-- Create a new table and set the metatable.
local data = setmetatable({}, metatable)

-- Test the metamethod out.
print(tostring(data)) -- Prints: "Metatables are awesome!"
```

## Limitations

This approach is not **perfectly 1:1** with native Lua metatables.

You cannot:
- Modify any metatables created by the game. You will need the native `setmetatable`/`getmetatable` functions for that.
- Add metatables to a table (that has no metatable) without assigning it like so `value = setmetatable(value, metatable)`
- Certain Metamethods may just not work at all due to unknown reasons. (eg `__gc`)