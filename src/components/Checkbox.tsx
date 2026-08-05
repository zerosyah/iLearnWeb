import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
type CheckProps ={
  setCount: React.Dispatch<React.SetStateAction<string[]>>,
  user: string,
}
export default function ControlledCheckbox({setCount, user}:CheckProps) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    
    setCount((prev)=>{
      if(isChecked){
        return [...prev, user];
      }else{
        return prev.filter(item=> item!==user);
      }
    })
  };
  //console.log("userId: ", typeof setCount);
  
  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
