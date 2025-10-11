import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase";
// @ts-ignore
import { get } from "mongoose";
import { useDispatch } from "react-redux";
import {
  updateUserSuccess,
  updateUserStart,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,

} from "../redux/user/userSlice";
import { TextInput, Button } from "flowbite-react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import CircularProgress from "@mui/joy/CircularProgress";

export default function DashProfile() {
  {
    /*useSelector below */
  }
  const { currentUser, loading, error } = useSelector((state: any) => state.user);

  {
    /*fileRef below */
  }
  const fileRef = useRef(null);

  {
    /*image useState */
  }
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  // @ts-ignore
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({
    ProfilePicture: "",
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();

  {
    /*image useEffecct */
  }
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  {
    /*handleFileUpload  */
  }
  const handleFileUpload = async (image: any) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },// @ts-ignore
      (error) => {
        setImageError(true);
      },
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, ProfilePicture: downloadURL });
        });
      }
    );
  };

  // onchange function
  const handleChange = (e: any) => {
    // set user data
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Delete Account
  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  /*const handleLogoutAccount = async () => {
    try {
      await fetch("/api/auth/signout");
      dispatch(signOut());
    } catch (error) {
      console.log(error);
    }
  };*/

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());

      // update user profile
      const res = await fetch(
        `/api/auth/update/profile/${currentUser.ID}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      const data = await res.json();

      // if failed to fetch data
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      } else {
        dispatch(updateUserSuccess(data));
        setUpdateSuccess(true);
      }
    } catch (error :any) {
      dispatch(updateUserFailure(error));
    }
  };

  console.log(currentUser);
  
  return (
    <div className="mx-auto w-full max-w-lg p-3">
      <h1 className="my-3 text-center text-3xl font-semibold">Profile</h1>

      {/*form bellow */}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/*upload input below */}

        <TextInput
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e: any) => setImage(e.target.files[0])}
          className="hidden"
        />

        {/*image display */}
        <div className="relative self-center">
          {imagePercent > 0 && (
            <CircularProgressbar
              value={imagePercent}
              strokeWidth={5}
              styles={{
                root: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 3,
                  left: 0,
                },
                path: {
                  stroke: `rgba(62, 152, 199, ${imagePercent / 100})`,
                },
              }}
              className={imagePercent === 100 ? "hidden" : ""}
            />
          )}

          <img
            src={formData.ProfilePicture || currentUser.ProfilePicture}
            alt="profilePicture"
            className=" mt-2 h-32 w-32 cursor-pointer self-center rounded-full border-2 border-[lightgray] object-cover"
            // @ts-ignore
            onClick={() => fileRef.current !== null && fileRef.current.click()}
          />
        </div>

        <TextInput
          defaultValue={currentUser.FirstName}
          type="text"
          name="FirstName"
          id="FirstName"
          placeholder="first Name"
          className="rounded-lg bg-slate-100"
          onChange={handleChange}
        />

        {/*surname input field bellow */}
        <TextInput
          defaultValue={currentUser.LastName}
          type="text"
          name="LastName"
          id="LastName"
          placeholder="lastName"
          className="rounded-lg bg-slate-100"
          onChange={handleChange}
        />

        {/*password input field bellow */}
        <TextInput
          type="password"
          name="Password"
          id="Password"
          placeholder="change password"
          className="rounded-lg bg-slate-100"
          onChange={handleChange}
        />

        <Button
          type="submit"
          gradientDuoTone="purpleToBlue"
          outline
          className=" uppercase hover:opacity-90 disabled:opacity-70"
          disabled={loading}
        >
          {loading ? <span className="flex gap-2 items-center"><CircularProgress size="sm" /> Loading...</span> : "Update"}
        </Button>

        {currentUser.Role === "admin" && (
          <Link to={"/create-post"}>
            <Button
              type="button"
              gradientDuoTone="pinkToOrange"
              outline
              className=" w-full uppercase"
            >
              Create a Post
            </Button>
          </Link>
        )}

        {currentUser.Role === "admin" && (
          <div className="mt-1  flex justify-between">
            <span
              className="cursor-pointer text-red-700"
              onClick={handleDeleteAccount}
            >
              Delete Account
            </span>
          </div>
        )}
      </form>
      <p className="mt-2 text-center text-red-700">
        {error && "something went wrong"}
      </p>
      <p className="mt-2 text-center text-green-700">
        {updateSuccess && "User is updated successful"}
      </p>
    </div>
  );
}
