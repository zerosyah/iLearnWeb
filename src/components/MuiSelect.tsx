import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface MuiSelectProps {
    labelId: string;
    id: string;
    label: string;
  onChange: any;
  options?: string[];
}

export default function MuiSelect({ labelId, id, label, onChange, options }: MuiSelectProps) {
  const [option, setOption] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
      setOption(event.target.value as string);
        onChange(event);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select
          labelId={labelId}
          id={id}
          value={option}
          label={label}
          name={labelId}
          onChange={handleChange}
        >
          {
            options?.map((option) => {
              return <MenuItem value={option} key={option}>{option}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </Box>
  );
}
