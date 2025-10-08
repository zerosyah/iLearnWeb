import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Navbar,
  TextInput,
  Avatar,
  Dropdown,
  Badge,
} from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { signOut } from "../redux/user/userSlice";
import { toggleTheme } from "../redux/theme/themeSlice";

export default function Header() {
  // useLocation function to get path
  const path = useLocation();
  const location = useLocation();

  // get current user
  const { currentUser } = useSelector((state: any) => state.user);

  // navigate hook
  const navigate = useNavigate();

  // get current theme
  const { theme } = useSelector((state: any) => state.theme);

  // dispatch slice
  const dispatch = useDispatch();

  // search state
  const [searchTerm, setSearchTerm] = useState("");
  //const [tab, setTab] = useState("");

  // handle logout account
  const handleSignOutAccount = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: currentUser._id }),
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data);
        return;
      }
      return dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const urlParms = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParms.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);


    // //use effect to get tab from url
    // useEffect(() => {
    //   const urlParms = new URLSearchParams(location.search);
    //   const tabFromUrl = urlParms.get("/");
    //   if (tabFromUrl) {
    //     setTab(tabFromUrl);
    //   }
    // }, [location.search]);
  
  
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const urlParms = new URLSearchParams(location.search);
    urlParms.set("searchTerm", searchTerm);
    const searchQuery = urlParms.toString();
    navigate(`/search?${searchQuery}`);
  };
  console.log(path.pathname);
  
  return (
    <Navbar
      className="absolute left-0 right-0 top-0 z-20 items-center w-full border-b-2"
      style={{
        background: "transparent",
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-[32px] font-semibold dark:text-white sm:text-xl"
      >
        <span className="pl-5 font-bebasNeue bg-clip-text bg-gradient-to-tr from-yellow-300 to-green-400 text-[30px]  font-bold drop-shadow-[0px_0px_10px_rgba(0,0,0,3)]">
          sompukwane
        </span>
      </Link>

      {/* Search */}
      <form onSubmit={handleSubmit} className="bg-transparent text-white">
        <TextInput
          type="search"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden bg-transparent text-white shadow-lg lg:inline"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            background: "transparent",
            color: "white",
          }}
        />
      </form>

      {/* Sign-in */}
      <Button className="h-10 w-12 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      {/* Dark icon */}
      <div className="flex gap-2 md:order-2">
        <Button
          className="hidden h-10 w-12 sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </Button>

        {/* Sign-in */}
        {currentUser ? (
          // Dropdown menu IF user is logged in
          <Dropdown
            label={
              <Avatar
                alt="User settings"
                img={currentUser.ProfilePicture}
                rounded
              />
            }
            arrowIcon={false}
            inline={true}
          >
            {/* Dropdown header IF user is logged in */}
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.FirstName}</span>
              <span className="block truncate text-sm font-medium">
                {currentUser.Email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>
                Profile{" "}
                {currentUser.IsAdmin ? (
                  <Badge color="info" className="ml-12">
                    admin
                  </Badge>
                ) : (
                  <Badge color="pink" className="ml-12">
                    Student
                  </Badge>
                )}
              </Dropdown.Item>
            </Link>
            <Link to={"/dashboard?tab=dash"}>
              <Dropdown.Item>
                Dashboard{" "}
                {currentUser.IsAdmin ? (
                  <Badge color="info" className="ml-12">
                    admin
                  </Badge>
                ) : (
                  <Badge color="pink" className="ml-12">
                    Student
                  </Badge>
                )}
              </Dropdown.Item>
            </Link>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOutAccount}>
              Sign out
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signin">
            <Button
              outline
              gradientDuoTone="purpleToBlue"
              className="font-popins font-bold uppercase md:w-[150px]"
            >
              Sign-in
            </Button>
          </Link>
        )}
      </div>

      {/* Menu */}
      <Navbar.Toggle />

      {/* Collapse */}
      <Navbar.Collapse className="absolute md:relative right-[10px] top-[80px] md:top-0 w-fit rounded-[10px] text-[18px] font-bold text-white backdrop-blur-md py-[10px]">
        <Navbar.Link as={"div"}>
          <Link
            to="/stuff"
            className="font-popins text-[16px] font-semibold uppercase text-black"
          >
            Stuff
          </Link>
        </Navbar.Link>
        <Navbar.Link as={"div"}>
          <Link
            to="/department"
            className="font-popins text-[16px] font-semibold uppercase text-black"
          >
            Department
          </Link>
        </Navbar.Link>
        <Navbar.Link as={"div"}>
          <Link
            to="/contact"
            className="font-popins text-[16px] font-semibold uppercase text-black"
          >
            contact
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
  /*const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const { currentUser } = useSelector((state) => state.user);

  //updater function
  function updater() {
    const currentTime = new Date();
    setTime(currentTime.toLocaleTimeString());
    setDate(currentTime.toDateString());
  }

  //interval updater
  setInterval(updater);
  return ()
    /*<div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/user">
          {currentUser ? (
            currentUser.firstName
          ) : (
            <h1 className="font-bold text-2xl">HOME</h1>
          )}
        </Link>
        <div className="">
          <span className="font-semibold">{time}</span>
        </div>
        <div className="border-cyan-300">
          <span className="font-semibold">{date}</span>
        </div>
        <ul className="flex gap-4">
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/department">
            <li>Department</li>
          </Link>
          <Link to="/stuff">
            <li>Stuff</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profilePicture"
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li>Login</li>
            )}
          </Link>
        </ul>
      </div>
    </div>*/
}
