import { FloatingLabel } from 'flowbite-react'
import React, { useState, useEffect } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";

interface TextInputProps {
    label: string
    id: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
function MultiTextInput({label, id, handleChange}: TextInputProps) {

    const [oName, setOname] = useState<any>([])
    const [name, setName] = useState<string>("")
    const HandleAddName = () => {
        // Add Name to array
        if (name.trim() !== "") {
            setOname([...oName, name]);
            setName("");
        }
        console.log(oName);
    }

    useEffect(() => {
      if (oName.length > 0) {
        const event = {
          target: {
            id: id,
            value: oName,
          },
          preventDefault: () => {},
          stopPropagation: () => {},
        };
        handleChange(event as React.ChangeEvent<HTMLInputElement>);
      }
    }, [oName]);
    

  return (
      <section className='flex gap-0 items-center p-0 m-0'>
          <FloatingLabel label={label} id={id} variant='outlined' className='w-fit pr-10' onChange={(e) => setName(e.target.value)} value={name} />
          <IoIosAddCircleOutline size={40} onClick={HandleAddName} className='cursor-pointer p-2 m-0 right-[40px] relative -top-1' />
    </section>
  )
}

export default MultiTextInput