import { useEffect, useState} from "react";
import { TextInput, Button } from "flowbite-react";
import { HiMail, HiUser, HiLockClosed } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function SignUp() {
    const [formData, setFormData] = useState({})
    // @ts-ignore
    const [loading, setLoading] = useState(false)
    // @ts-ignore
    const [error, setError] = useState(false)
  const navigate = useNavigate()
  const { currentUser } = useSelector((state: any) => state.user);
  useEffect(() => {
      if (currentUser) {
    navigate("/dashboard?tab=dash")
  }
  }, [])

    // onchange event handler
    const handleChange = (e: any) =>{
        setFormData({...formData, [e.target.id]: e.target.value})
    }
    
    // onsubmit event handler
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try{
            setLoading(true)
            setError(false)
            const res = await fetch("/api/auth/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
            const data = await res.json();
            setLoading(false)

            if(data.success === false){
                setError(true)
                return
            }else{
                navigate("/signin")
            }
            
        }catch(error){
            setError(true)
            setLoading(false)
        }
    }
  return (
    <div className="parent">
      <div className="main-child flex flex-col items-center gap-6 px-5 pt-10 md:flex-row md:pt-20">
        <div className="child w-full">
          <div className="">
            <h1 className="text-3xl font-bold">Hello, Friend!</h1>
          </div>
          <div className="">
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              perferendis natus ducimus exercitationem? Pariatur officiis
              accusamus unde, quam laudantium necessitatibus animi repellendus
              quasi totam possimus esse beatae atque cum delectus.
            </p>
            <p className="text-teal-600 ">
              have an account?{" "}
              <Link to="/signin" className="text-blue-500 underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
        <div className="child flex w-full flex-col gap-4 md:px-10">
          <h1 className="pb-2 text-center text-2xl font-bold uppercase">
            sign-UP
          </h1>
          <div className="">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <TextInput
                id="FirstName"
                type="text"
                icon={HiUser}
                placeholder="First Name"
                required
                onChange={handleChange}
              />
              <TextInput
                id="LastName"
                type="text"
                icon={HiUser}
                placeholder="Last Name"
                required
                onChange={handleChange}
              />
              <TextInput
                id="IdNumber"
                type="text"
                icon={HiUser}
                placeholder="Id Number"
                required
                onChange={handleChange}
              />
              <TextInput
                id="Phone"
                type="text"
                icon={HiUser}
                placeholder="Phone Number"
                required
                onChange={handleChange}
              />
              <TextInput
                id="Email"
                type="email"
                icon={HiMail}
                placeholder="Email"
                required
                onChange={handleChange}
              />
              <TextInput
                id="Password"
                type="password"
                icon={HiLockClosed}
                placeholder="Password"
                required
                onChange={handleChange}
              />
              <Button
                gradientDuoTone="tealToLime"
                type="submit"
                className="uppercase"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
