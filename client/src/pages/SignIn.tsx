import { useEffect, useState} from "react";
import { TextInput, Button } from "flowbite-react";
import { HiMail, HiLockClosed } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function SignIn() {
  const [formData, setFormData] = useState({})

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { loading, error, currentUser} = useSelector((state: any) => state.user)

  //console.log(currentUser);
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
      // Prevent default submit functionality
        e.preventDefault()

        // try statement for request to the backend
        try{
            // dispatch sign in start action
            dispatch(signInStart())

            // api request to sign in
            const res = await fetch(
              "https://auth-service-cexj.onrender.com/api/auth/login",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
              },
            );
            
            // take response from the backend and convert it to JSON
          const data = await res.json();
          

            // if statement for when data is unsuccessful
            if(data.success === false){
                // dispatch sign in failure action
                dispatch(signInFailure(data))
            }else{
                // dispatch sign in pass action
                dispatch(signInSuccess(data.user))

                // if user is new and not admin
                if(!data.user.IsComplete && data.user.Role != "admin"){
                  // navigate to user info form
                  navigate("/register")
                } else{
                  // navigate to admin dashbord
                  navigate("/dashboard?tab=dash")
                }
            }
            
        }catch(error){
            dispatch(signInFailure(error))
        }
        
    }
  return (
    <div className="parent">
      <div className="main-child flex flex-col items-center gap-6 px-5 pt-10 md:flex-row md:pt-20">
        <div className="child w-full">
          <div className="">
            <h1 className="text-3xl font-bold">Welcome back, Friend!</h1>
          </div>
          <div className="">
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              perferendis natus ducimus exercitationem? Pariatur officiis
              accusamus unde, quam laudantium necessitatibus animi repellendus
              quasi totam possimus esse beatae atque cum delectus.
            </p>
            <p className="pt-2 text-teal-500">
              don't have an account? <Link to="/signup" className="underline text-blue-600 hover:text-blue-800">Sign Up</Link>
            </p>
          </div>
        </div>
        <div className="child flex w-full flex-col gap-4 md:px-10">
          <h1 className="pb-2 text-center text-2xl font-bold uppercase">
            sign-in
          </h1>
          <div className="">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <TextInput
                id="Email"
                type="email"
                icon={HiMail}
                placeholder="Email"
                required onChange={handleChange}
              />
              <TextInput
                id="Password"
                type="password"
                icon={HiLockClosed}
                placeholder="Password"
                required onChange={handleChange}
              />
              <Button gradientDuoTone="tealToLime" className="uppercase" disabled={loading} type="submit">
                {loading ? "Loading..." : "Sign In"}
              </Button>
            </form>
          </div>
          <div className="">
            <p className="text-red-700 italic font-serif text-sm">
              {error ? error.message : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn