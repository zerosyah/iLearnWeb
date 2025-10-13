import { useEffect, useState } from "react";
import { TextInput, Button } from "flowbite-react";
import { HiMail, HiUser, HiLockClosed } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";

function SignUp() {
  const [formData, setFormData] = useState<object>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.user);
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
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("https://auth.ilearn.club/api/auth/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(true);
        setMessage(data.message);
        return;
      }
      setLoading(false);
      setError(false);
      navigate("/signin");
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  return (
    <div className="parent">
      <Header />
      <div className="main-child relative top-[80px] flex flex-col items-center gap-6 px-5 pb-[10px] pt-10 md:top-[20px] md:flex-row md:pt-20">
        <div className="child w-full">
          <div className="">
            <h1 className="text-[28px] font-robot font-bold">Hello, Friend!</h1>
          </div>
          <div className="">
            <p className="font-popins text-[16px]">
              Create your free account to access personalized lessons, track
              your progress, and join class activities. It only takes a minute
              to get started.
            </p>
            <p className="text-teal-600 font-popins text-[16px] ">
              have an account?{" "}
              <Link to="/signin" className="text-blue-500 underline font-popins text-[16px] font-medium">
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
                type="number"
                icon={HiUser}
                placeholder="Id Number"
                required
                onChange={handleChange}
              />
              <TextInput
                id="Phone"
                type="number"
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
              {error && (
                <div className="text-center text-red-600">
                  <p>{message}</p>
                </div>
              )}
              {loading ? (
                <Button
                  gradientDuoTone="tealToLime"
                  type="submit"
                  className="uppercase"
                  disabled={true}
                >
                  loading please wait...
                </Button>
              ) : (
                <Button
                  gradientDuoTone="tealToLime"
                  type="submit"
                  className="uppercase"
                >
                  Submit
                </Button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
