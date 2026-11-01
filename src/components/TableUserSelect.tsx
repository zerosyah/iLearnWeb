import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type BasicSelectProps = {
  label: string;
  data: string[];
  onChangeValue: (value: string) => void;
};

export default function BasicSelect({
  label,
  data,
  onChangeValue,
}: BasicSelectProps) {
  const [value, setValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const nextValue = event.target.value as string;
    setValue(nextValue);
    onChangeValue(nextValue);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          value={value || label}
          displayEmpty
          onChange={handleChange}
          size="small"
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="select-option"
          sx={{
            outline: "none",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "none",
            },
          }}
        >
          {data.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
