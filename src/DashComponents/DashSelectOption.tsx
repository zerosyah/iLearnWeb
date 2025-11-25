import React from 'react'
import { Autocomplete, TextField, Box } from "@mui/material";

type Prop = {
    option?: string;
    value?: any;
    label?: string;
}
function DashSelectOption({ option, value, label } :Prop) {
    const [selected, setSelected] = React.useState<any>({
        [option === "Grade" ? "Grade":"Subject" ]: "",
    });
    const subjects = [
      { label: "Mathematics", value: "Mathematics" },
      { label: "English", value: "English" },
      { label: "IsiZulu", value: "IsiZulu " },
      { label: "Life Orientation", value: "LifeOrientation" },
      { label: "Creative Art", value: "CreativeArt" },
      { label: "Technology", value: "Technology" },
      { label: "Natural Science", value: "NaturalScience" },
      { label: "Geography", value: "Geography" },
      { label: "Drama", value: "Drama" },
      { label: "History", value: "History" },
      { label: "Life Sciences", value: "LifeSciences" },
      { label: "Physical Sciences", value: "PhysicalSciences" },
      { label: "Mathematics Literacy", value: "MathematicsLiteracy" },
      { label: "Tourism", value: "Tourism" },
      { label: "Accounting", value: "Accounting" },
      { label: "Consumer Studies", value: "ConsumerStudies" },
      { label: "Business Studies", value: "BusinessStudies" },
    ];
    const gradeOptions = [
      { value: "8", label: "Grade 8" },
      { value: "9", label: "Grade 9" },
      { value: "10", label: "Grade 10" },
      { value: "11", label: "Grade 11" },
      { value: "12", label: "Grade 12" },
    ];
    React.useEffect(() => {
        value(selected);
    }, [selected]);
    
  return (
    <Box>
      <Autocomplete
          disablePortal
          value={selected?.select}
          onChange={(event: any, value: object) => {
            event.preventDefault();
            //@ts-ignore
            setSelected({ ...selected, [option === "Grade"? "Grade" : "Subject"]: value?.value });
          }}
          id={label}
          size="small"
          options={option === "Grade"? gradeOptions : subjects}
                  sx={{ minWidth: 200, maxWidth: 250   }}
          renderInput={(params) => <TextField {...params} label={label} />}
        />
    </Box>
  );
}

export default DashSelectOption