import { useEffect, useState } from "react";
import { TextInput, Button } from "flowbite-react";
import { HiMail, HiLockClosed } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { useNavigate, Link } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function SignIn() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, currentUser } = useSelector(
    (state: any) => state.user,
  );

  //console.log(currentUser);
  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard?tab=dash");
    }
  }, []);
  // onchange event handler
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // onsubmit event handler
  const handleSubmit = async (e: any) => {
    // Prevent default submit functionality
    e.preventDefault();

    // try statement for request to the backend
    try {
      // dispatch sign in start action
      dispatch(signInStart());

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
      if (data.success === false) {
        // dispatch sign in failure action
        dispatch(signInFailure(data));
      } else {
        // dispatch sign in pass action
        dispatch(signInSuccess(data.user));

        // if user is new and not admin
        if (!data.user.IsComplete && data.user.Role != "admin") {
          // navigate to user info form
          navigate("/register");
        } else {
          // navigate to admin dashbord
          navigate("/dashboard?tab=dash");
        }
      }
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
  const linkTree = (link: string) => {
    return window.open(link);
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-[700px] rounded-[10px] border p-[10px]">
        <div className="trapzoid rounded-[5px] px-[10px]">
          <div className="flex flex-row items-center justify-between py-[10px] ">
            <span className="rounded-full font-bold text-white">iLearnWeb</span>
            <div className="flex flex-row gap-[10px] text-white">
              <Button
                size={"xs"}
                className="rounded-full text-lg"
                gradientDuoTone={"tealToLime"}
                onClick={() => navigate("/signup")}
                //outline={true}
              >
                Sign up
              </Button>
              <Button
                size={"xs"}
                className="rounded-full text-lg"
                gradientDuoTone={"purpleToBlue"}
                onClick={() =>
                  linkTree(
                    "https://web.facebook.com/profile.php?id=100083533804483",
                  )
                }
                //outline={true}
              >
                Join Us
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-[350px] flex-col items-center">
          <div className="flex flex-row items-center justify-between gap-[100px] px-[10px] py-[10px]">
            <h1 className="text-lg font-bold">Sompukwane</h1>
            <span className="text-md cursor-pointer rounded-full border bg-gray-600 px-[10px] font-semibold text-white flex flex-row items-center">
              <LiaFlagUsaSolid size={20} />
              Eng
            </span>
          </div>
          <div className="mt-[20px] w-[280px] items-center justify-center text-center">
            <div className="">
              <h1 className="text-3xl font-bold">Hi, Friend!</h1>
              <p className="text-xs">Welcome to iLearnWeb</p>
            </div>
            <div className="mt-[30px] flex flex-col items-center justify-center gap-4">
              <TextInput
                id="Email"
                type="email"
                icon={HiMail}
                placeholder="Email"
                required
                onChange={handleChange}
                className="w-full items-center"
              />
              <TextInput
                id="Password"
                type="password"
                icon={HiLockClosed}
                placeholder="Password"
                required
                onChange={handleChange}
                className="w-full items-center"
              />
              <div className="">
                <p className="z-30 cursor-pointer bg-white text-xs text-orange-600">
                  Forgot password?
                </p>
                <hr className="relative -top-[7px] w-[150px]" />
              </div>

              <Button
                gradientDuoTone="pinkToOrange"
                className="w-full uppercase"
                disabled={loading}
                //type="submit"
                outline={true}
              >
                {"Login with Google"}
              </Button>
              <Button
                gradientDuoTone="tealToLime"
                className="w-full uppercase"
                disabled={loading}
                type="submit"
                outline={false}
                onClick={handleSubmit}
              >
                {"Login"}
              </Button>
              <p className="text-xs">
                I don't have an account,{" "}
                <Link to="/signup">
                  <span className="cursor-pointer text-blue-600">Sign up</span>
                </Link>
              </p>
              {
                error && <p className="text-xs text-red-600">{error.message}</p>
              }
            </div>
            <div className="mt-[30px] flex flex-row items-center justify-center gap-4">
              <FaFacebook
                size={25}
                className="cursor-pointer text-blue-600"
                onClick={() => {linkTree(
                  "https://web.facebook.com/profile.php?id=100083533804483",
                );}}
              />
              <FaInstagram size={25} className="cursor-pointer text-pink-600" />
              <FaTwitter size={25} className="cursor-pointer text-sky-600" />
              <FaWhatsapp size={25} className="cursor-pointer text-green-600" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
/**
 * <div className="main-child flex flex-col items-center gap-6 px-5 pt-10 md:flex-row md:pt-20">
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
              don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Sign Up
              </Link>
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
                className="uppercase"
                disabled={loading}
                type="submit"
              >
                {"forgot password"}
              </Button>
              <Button
                gradientDuoTone="pinkToOrange"
                className="uppercase"
                disabled={loading}
                type="submit"
                outline={true}
              >
                {loading ? "Loading..." : "Sign In"}
              </Button>
            </form>
          </div>
          <div className="">
            <p className="font-serif text-sm italic text-red-700">
              {error ? error.message : ""}
            </p>
          </div>
        </div>
      </div>
 */