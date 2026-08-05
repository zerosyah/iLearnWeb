import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type BasicSelectProps = {
  label: string;
  data: string[]
};

export default function BasicSelect({ label, data }: BasicSelectProps) {
  const [value, setValue] = React.useState("");
  

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120}}>
      <FormControl fullWidth>
        <Select
          value={value || label}
          displayEmpty
          onChange={handleChange}
          size='small'
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className='select-option'
          sx={{
            outline: "none",
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'none'
    }
          }}
        >
            {
                data.map((item)=>(
                        <MenuItem value={item}>{item}</MenuItem>
                ))
            }
        </Select>
      </FormControl>
    </Box>
  );
}
