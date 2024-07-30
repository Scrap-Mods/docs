---
title: Character Customization
---

# Character Customization

The `Character Customization` structure is used to store the customization of a character. It is used in the `character` file found in `%APPDATA%/Axolot Games/Scrap Mechanic/User/User_<SteamId64>/`, as well as in some network packets.

## Structure

| Offset | Field Name     | Field Type                   | Notes |
|--------|----------------|------------------------------|-------|
| 0x00   | Version        | be u32                       | Not confirmed, but this field is always 2. |
| 0x04   | Gender         | enum [Gender](#gender) : u8  | This is not a boolean. If it were, everything after this field would be shifted by one bit. |
| 0x05   | Options Length | u8                           | The number of customization options. |
| 0x06   | Options UUIDs  | be u128[Options Length]      | The UUIDs of the customization options. Note that the UUIDs are big-endian, which is uncommon. See [Customization Options](#customization-options) for the indices of the options.
| 0x06 + 16 * Options Length | Options Palette Indeces | be u32[Options Length] | The color palette indeces of the customization options. See [Customization Options](#customization-options) for the indices of the options. Only `Face` and `Hair` can be configured through in-game user interfaces. |

A list of all customization option UUIDs and color palettes can be found in `$GAME_DATA/Character/customization_options.json`.

## Gender

There are currently two genders in the game.

| Gender | Value |
|--------|-------|
| Male   | 0     |
| Female | 1     |

## Customization Options

These are the indices of the customization options in the array of customization options.

| Option     | Index |
|------------|-------|
| Face       | 0     |
| Hair       | 1     |
| FacialHair | 2     |
| Torso      | 3     |
| Gloves     | 4     |
| Shoes      | 5     |
| Pants      | 6     |
| Hat        | 7     |
| Backpack   | 8     |
