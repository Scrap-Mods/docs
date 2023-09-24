import React from "react";

export type BitstreamDisplayProps = {
  data: {
    name: string;
    value: number;
    bits: number;
  }[];
  children?: React.ReactNode;
};

export default function BitstreamDisplay({ data, children }: BitstreamDisplayProps) {
  const bits: boolean[] = [];
  for (const { value, bits: bitCount } of data) {
    for (let i = bitCount - 1; i >= 0; i--) {
      bits.push((value & (1 << i)) !== 0);
    }
  }

  const bytes: number[] = [];
  for (let i = 0; i < bits.length; i += 8) {
    let byte = 0;
    for (let j = 0; j < 8; j++) {
      byte |= (bits[i + j] ? 1 : 0) << (7 - j);
    }
    bytes.push(byte);
  }

  const bitLenth = bits.length;

  while (bits.length % 8 !== 0) {
    bits.push(false);
  }

  const bitCellStyles: React.CSSProperties = {
    minWidth: "3ch",
    textAlign: "center",
    paddingInline: 4,
  };

  const center: React.CSSProperties = {
    textAlign: "center",
  };

  const alignmentBitStyle: React.CSSProperties = {
    ...bitCellStyles,
    fontStyle: "italic",
    opacity: 0.6,
    filter: "blur(1px)",
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Byte Index</th>
          {bytes.map((_, i) => (
            <th key={i} colSpan={8}>
              {i}
            </th>
          ))}
        </tr>
        <tr>
          <th>Bit Index</th>
          {bits.map((_, i) => i < bitLenth ? (
            <td key={i} style={bitCellStyles}>
              {i}
            </td>
          ) : (
            <td key={i} style={alignmentBitStyle} title="Padding bit">
              {i}
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Bit Value</th>
          {bits.map((bit, i) => i < bitLenth ? (
            <td key={i} style={bitCellStyles}>
              {bit ? "1" : "0"}
            </td>
          ) : (
            <td key={i} style={alignmentBitStyle} title="Padding bit">
              {bit ? "1" : "0"}
            </td>
          ))}
        </tr>
        <tr>
          <th>Byte Value</th>
          {bytes.map((byte, i) => (
            <td key={i} colSpan={8} style={center}>
              0x{byte.toString(16).toUpperCase().padStart(2, "0")}
            </td>
          ))}
        </tr>
        <tr>
          <th>Field</th>
          {data.map(({ name, bits: bitCount }, i) => (
            <td key={i} colSpan={bitCount} style={bitCellStyles}>
              {name}
            </td>
          ))}
          {bitLenth % 8 !== 0 && (
            <td colSpan={8 - (bitLenth % 8)} style={bitCellStyles}>
              Alignment padding
            </td>
          )}
        </tr>
        {children}
      </tbody>
    </table>
  )
}