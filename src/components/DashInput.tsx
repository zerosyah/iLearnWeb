import { Label, TextInput } from 'flowbite-react';

function DashInput({ label, value}: any) {
  return (
    <div className="">
          <Label htmlFor={label} className='text-[13px] font-inter text-[#555555]'>{ label }</Label>
      <TextInput
              id={label}
              value={value}
        placeholder="Course"
              className="border-none outline-none focus:border-none focus:outline-none active:border-none active:outline-none font-inter text-[14px] text-[#222222]"
        disabled
        size={12}
      />
    </div>
  );
}

export default DashInput