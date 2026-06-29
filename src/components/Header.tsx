//import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Navbar,
  Avatar,
  Dropdown,
  Badge,
  //FooterBrand,
} from "flowbite-react";
import { FaMoon, FaSun } from "react-icons/fa";
import { signOut } from "../redux/user/userSlice";
import { toggleTheme } from "../redux/theme/themeSlice";
import { Stack } from "@mui/material";
//import badge from "../assets/Heros/CARD/badge.webp"
import LogoSvg from "../SvgComponents/LogoSvg";

// interface UserState {
//   currentUser: { _id: string | null;
//   loading: boolean;
//   error: boolean | string | null;
//   }
// };

// interface ThemeState {
//   theme: "light" | "dark";
// }

// interface RootState {
//   user: UserState;
//   theme: ThemeState;
// }

export default function Header() {
  //const width = window.innerWidth;
  //const height = window.innerHeight;
 // useLocation function to get path
  const path = useLocation();
  // const location = useLocation();

  // get current user
  const { currentUser } = useSelector((state: any) => state.user);

  // navigate hook
  //const navigate = useNavigate();

  const { theme } = useSelector((state: any) => state.theme);

  // dispatch slice
  const dispatch = useDispatch();

  // search state
  //const [searchTerm, setSearchTerm] = useState("");
  // const [tab, setTab] = useState("");

  //const [selected, setSelected] = useState<string>("");

  // handle logout account
  const handleSignOutAccount = async () => {
    try {
      const res = await fetch("https://auth.ilearn.club/api/auth/logout", {
        method: "DELETE",
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

  // useEffect(() => {
  //   const urlParms = new URLSearchParams(location.search);
  //   const searchTermFromUrl = urlParms.get("searchTerm");
  //   if (searchTermFromUrl) {
  //     setSearchTerm(searchTermFromUrl);
  //   }
  // }, [location.search]);

  //use effect to get tab from url
  // useEffect(() => {
  //   const urlParms = new URLSearchParams(location.search);
  //   const tabFromUrl = urlParms.get("/");
  //   if (tabFromUrl) {
  //     setTab(tabFromUrl);
  //   }
  // }, [location.search]);

  // console.log("path: ", path);
  

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   const urlParms = new URLSearchParams(location.search);
  //   urlParms.set("searchTerm", searchTerm);
  //   const searchQuery = urlParms.toString();
  //   navigate(`/search?${searchQuery}`);
  // };
  //console.log(path.pathname);

  return (
    <Navbar
      className={`absolute top-0 z-20 flex h-fit w-full items-center justify-between bg-transparent px-[5px] dark:bg-transparent md:px-0`}
    >
      {/* Logo */}
      <Link to="/" className="">
        <LogoSvg className="" />
      </Link>

      {/* Search */}
      

      {/* Sign-in */}

      {/* Dark icon */}
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={2}
        className="flex gap-2 md:order-2"
      >
        <Button
          className="hidden h-fit w-fit bg-default focus:border-none dark:bg-gray-700 lg:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? (
            <FaMoon size={10} />
          ) : (
            <FaSun size={10} className="text-default" />
          )}
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
          <Link to="/signin" className="hidden lg:inline">
            <Button
              outline
              gradientDuoTone="purpleToBlue"
              className="h-fit bg-gradient-to-r from-[#FF3C00] to-[#E800FD] font-popins font-bold uppercase md:w-[150px]"
              size={"md"}
            >
              Sign-in
            </Button>
          </Link>
        )}
      </Stack>

      {/* Menu */}
      <Navbar.Toggle />

      {/* Collapse */}
      <Navbar.Collapse className="absolute right-[10px] top-[80px] w-fit rounded-[10px] py-[10px] text-[18px] font-bold text-white backdrop-blur-md md:relative md:top-0 md:text-left">
        <Navbar.Link as={"div"}>
          <Link
            to="/stuff"
            className={`font-nunito text-[16px] font-bold uppercase ${path.pathname === "/stuff" ? "text-persianBlue":"text-black"}`}
          >
            Staff
          </Link>
        </Navbar.Link>
        <Navbar.Link as={"div"}>
          <Link
            to="/department"
            className={`font-nunito text-[16px] font-bold uppercase ${path.pathname === "/department" ? "text-persianBlue":"text-black"}`}

          >
            Department
          </Link>
        </Navbar.Link>
        <Navbar.Link as={"div"}>
          <Link
            to="/contact"
            className={`font-nunito text-[16px] font-bold uppercase ${path.pathname === "/contact" ? "text-persianBlue font-montserrat font-bold":"text-black"}`}
          >
            contact
          </Link>
        </Navbar.Link>
        <Navbar.Link as={"div"} className="md:hidden">
          <Link
            to="/signin"
            className={`font-nunito text-[16px] font-bold uppercase ${path.pathname === "/signin" ? "text-persianBlue":"text-black"}`}
          >
            Sign-in
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
    </div>

    <form onSubmit={handleSubmit} className="bg-transparent text-white">
        <TextInput
          type="search"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden font-popins text-[12px] text-black shadow-lg dark:text-white lg:inline"
          value={searchTerm}
          sizing={"sm"}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{}}
        />
      </form>
    */
}
