import { Label, TextInput } from 'flowbite-react';

function DashInput({ label, value}: any) {
  return (
    <div className="">
          <Label htmlFor="Course" className='text-[14px] font-robot'>{ label }</Label>
      <TextInput
              id="Course"
              value={value}
        placeholder="Course"
              className="border-none outline-none focus:border-none focus:outline-none active:border-none active:outline-none font-popins"
        disabled
        size={12}
      />
    </div>
  );
}

export default DashInput