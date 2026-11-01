import { useState } from "react";
import { useSelector } from "react-redux";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
//import { app } from "../firebase";
//import { get } from "mongoose";
import { useDispatch } from "react-redux";
import {
  updateUserSuccess,
  updateUserStart,
  updateUserFailure,
  // deleteUserStart,
  // deleteUserSuccess,
  // deleteUserFailure,
} from "../redux/user/userSlice";
// import { TextInput, Button } from "flowbite-react";
// import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
//import { Link } from "react-router-dom";
//import CircularProgress from "@mui/joy/CircularProgress";
import { GoShieldCheck } from "react-icons/go";
import { FaSave } from "react-icons/fa";
import { store } from "../redux/store";

export default function DashProfile() {
  type RootState = ReturnType<typeof store.getState>;
  const { currentUser } = useSelector((state: RootState) => state.user);
  //console.log("current type: ", currentUser);

  // //console.log(currentUser);

  // {
  //   /*fileRef below */
  // }
  // const fileRef = useRef(null);

  // {
  //   /*image useState */
  // }
  // const [image, setImage] = useState(undefined);
  // const [imagePercent, setImagePercent] = useState(0);
  // // @ts-ignore
  // const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({
    ProfilePicture: "",
  });
  const [, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();

  {
    /*image useEffecct */
  }
  // useEffect(() => {
  //   if (image) {
  //     handleFileUpload(image);
  //   }
  // }, [image]);

  // const handleFileUpload = async (image: any) => {
  //   const storage = getStorage(app);
  //   const fileName = `iLearnWeb/profiles/${currentUser.ID}/` + new Date().getTime() + image.name;
  //   const storageRef = ref(storage, fileName);
  //   const uploadTask = uploadBytesResumable(storageRef, image);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       // progress function
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       setImagePercent(Math.round(progress));
  //     },// @ts-ignore
  //     (error) => {
  //       setImageError(true);
  //     },
  //     () => {
  //       // download url
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         setFormData({ ...formData, ProfilePicture: downloadURL });
  //       });
  //     }
  //   );
  // };

  // onchange function
  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    // set user data
    setFormData({ ...formData, [target.id]: target.value });
  };

  // Delete Account
  // const handleDeleteAccount = async () => {
  //   try {
  //     dispatch(deleteUserStart());
  //     const res = await fetch(`/api/user/delete/${currentUser._id}`, {
  //       method: "DELETE",
  //     });
  //     const data = await res.json();
  //     if (data.success === false) {
  //       dispatch(deleteUserFailure(data));
  //       return;
  //     }
  //     dispatch(deleteUserSuccess(data));
  //   } catch (error) {
  //     dispatch(deleteUserFailure(error));
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());

      // update user profile
      const res = await fetch(
        `https://auth.ilearn.club/api/auth/update/profile/${(currentUser as { ID?: string } | null)?.ID}`,
        {
          method: "PATCH",
          credentials: "include",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      const data = await res.json();

      // if failed to fetch data
      if (!data.ok) {
        dispatch(updateUserFailure(data));
        return;
      } else {
        dispatch(updateUserSuccess(data));
        setUpdateSuccess(true);
      }
    } catch (error: unknown) {
      dispatch(updateUserFailure(error));
    }
  };

  return (
    <div className="scroll-container size-full overflow-y-scroll">
      <div className="card rounded-[6px] !border-none">
        <h3 className="mb-2 font-popins text-[11px] font-semibold uppercase leading-none text-hoverGold">
          Ilearn / Profile
        </h3>
        <h1 className="font-bebasNeue text-[36px] leading-10 text-nightGreen md:text-[48px]">
          Profile
        </h1>
        <div className="flex items-center justify-between">
          <h2 className="mt-2 text-[14px] font-medium text-textGray">
            Manage your student account.
          </h2>

          <p className="cursor-pointer rounded-[6px] border border-borderGray px-2 py-1 font-popins text-[14px] font-semibold uppercase text-strongNightGreen hover:border-hoverGold hover:bg-hoverGold hover:text-softWhite">
            Delete Account
          </p>
        </div>
      </div>

      <div className="flex h-fit w-full gap-[24px] rounded-[6px] border border-borderGray bg-white p-[20px] md:p-[26px]">
        <div className="flex size-[90px] items-center justify-center rounded-[6px] border-2 border-gold bg-nightGreen">
          <h1 className="font-bebasNeue text-[32px] text-gold">HS</h1>
        </div>
        <div className="">
          <h1 className="font-bebasNeue text-[32px] leading-none text-strongNightGreen md:text-[36px]">
            {(currentUser as { FirstName?: string } | null)?.FirstName}{" "}
            {(currentUser as { LastName?: string } | null)?.LastName}
          </h1>
          <h3 className="mt-1 font-popins text-[14px] leading-none ">
            {(currentUser as { Email?: string } | null)?.Email}
          </h3>
          <div
            className={`mt-3 flex w-fit items-center gap-2 rounded-full ${!(currentUser as { IsAdmin?: string } | null)?.IsAdmin ? "border-gold/40 bg-gold/15 font-medium text-hoverGold" : "border-borderGray bg-white font-medium text-textGray"} border px-2 py-[0.5px]`}
          >
            <GoShieldCheck size={14} />
            <span className="font-popins text-[14px]">
              {!(currentUser as { IsAdmin?: string } | null)?.IsAdmin
                ? "Administrator"
                : "Learner"}
            </span>
          </div>
        </div>
      </div>

      {/** Profile Information */}
      <div className="mt-[24px] flex w-full gap-[24px]">
        <div className="w-full rounded-[6px] border border-borderGray bg-default py-[20px] md:py-[26px]">
          <div className="px-[20px] md:px-[26px]">
            <h1 className="font-bebasNeue text-[20px] leading-none md:text-[26px]">
              Profile Information
            </h1>
            <p className="mt-1 font-popins text-[14px] leading-none text-textGray">
              Here you can manage your profile information and settings.
            </p>
          </div>
          <section className="mt-4 flex w-full gap-[44px] px-[20px] md:px-[26px]">
            <div className="w-full">
              {/** input row 1 */}
              <div className="mt-2 flex items-center gap-[24px]">
                {/** input */}
                <div className="flex w-full flex-col gap-[6px]">
                  <h2 className="font-popins text-[11px] font-semibold uppercase tracking-[0.14em] text-textGray">
                    First Name
                  </h2>
                  <input
                    type="text"
                    id="FirstName"
                    className="h-[40px] rounded-[6px] border border-borderGray font-popins text-[14px] focus:outline-none focus:ring-2 focus:ring-hoverGold"
                    placeholder={
                      (currentUser as { FirstName?: string } | null)?.FirstName
                    }
                    onChange={handleChange}
                  />
                </div>
                {/** input */}
                <div className="flex w-full flex-col gap-[6px]">
                  <h2 className="font-popins text-[11px] font-semibold uppercase tracking-[0.14em] text-textGray">
                    Last Name
                  </h2>
                  <input
                    type="text"
                    id="LastName"
                    className="h-[40px] rounded-[6px] border border-borderGray font-popins text-[14px] focus:outline-none focus:ring-2 focus:ring-hoverGold"
                    placeholder={
                      (currentUser as { LastName?: string } | null)?.LastName
                    }
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/** input row 2 */}
              <div className="mt-6 flex gap-[24px]">
                {/** input */}
                <div className="flex w-full flex-col gap-[6px]">
                  <h2 className="font-popins text-[11px] font-semibold uppercase tracking-[0.14em] text-textGray">
                    Email
                  </h2>
                  <input
                    type="text"
                    id="Email"
                    className="h-[40px] rounded-[6px] border border-borderGray font-popins text-[14px] focus:outline-none focus:ring-2 focus:ring-hoverGold"
                    placeholder={
                      (currentUser as { Email?: string } | null)?.Email
                    }
                    onChange={handleChange}
                  />
                </div>
                {/** input */}
                <div className="flex w-full flex-col gap-[6px]">
                  <h2 className="font-popins text-[11px] font-semibold uppercase tracking-[0.14em] text-textGray">
                    ID Number
                  </h2>
                  <input
                    type="text"
                    className="h-[40px] rounded-[6px] border border-borderGray font-popins text-[14px] hover:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-hoverGold"
                    value={
                      (currentUser as { IdNumber?: string } | null)?.IdNumber
                    }
                    disabled
                  />
                </div>
              </div>

              {/** input row 3 */}
              <div className="mt-6 flex gap-[24px]">
                {/** input */}
                <div className="flex w-full flex-col gap-[6px]">
                  <h2 className="font-popins text-[11px] font-semibold uppercase tracking-[0.14em] text-textGray">
                    Phone Number
                  </h2>
                  <input
                    type="text"
                    id="Phone"
                    className="h-[40px] rounded-[6px] border border-borderGray font-popins text-[14px] focus:outline-none focus:ring-2 focus:ring-hoverGold"
                    placeholder={
                      (currentUser as { Phone?: string } | null)?.Phone
                    }
                    onChange={handleChange}
                  />
                </div>

                {/** input */}
                <div className="flex w-full flex-col gap-[6px]">
                  <h2 className="font-popins text-[11px] font-semibold uppercase tracking-[0.14em] text-textGray">
                    Role
                  </h2>
                  <input
                    type="text"
                    className="h-[40px] rounded-[6px] border border-borderGray font-popins text-[14px] hover:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-hoverGold"
                    value={(currentUser as { Role?: string } | null)?.Role}
                    disabled
                  />
                </div>
              </div>

              <div className="relative right-0 mt-6 ">
                <button
                  className="mt-4 flex h-[40px] items-center gap-2 rounded-[6px] bg-gold px-6 py-2 font-popins text-[14px] font-medium text-strongNightGreen"
                  onClick={handleSubmit}
                >
                  <FaSave size={14} />
                  Save Changes
                </button>
              </div>
            </div>
          </section>
        </div>
        <section className="w-2/5 rounded-[6px] border border-borderGray bg-default p-[20px] md:p-[26px]">
          <div className="">
            <h1 className="font-bebasNeue text-[20px] leading-none md:text-[26px]">
              Password & Security
            </h1>
            <p className="mt-1 font-popins text-[14px] leading-none text-textGray">
              Update your Password here
            </p>
          </div>
          <div className="mt-6 flex w-full flex-col gap-[6px]">
            <h2 className="font-popins text-[11px] font-semibold uppercase tracking-[0.14em] text-textGray">
              Current Password
            </h2>
            <input
              type="text"
              id="CurrentPassword"
              onChange={handleChange}
              className="h-[40px] rounded-[6px] border border-borderGray font-popins text-[14px] focus:outline-none focus:ring-2 focus:ring-hoverGold"
            />
          </div>
          <div className="mt-6 flex w-full flex-col gap-[6px]">
            <h2 className="font-popins text-[11px] font-semibold uppercase tracking-[0.14em] text-textGray">
              New Password
            </h2>
            <input
              type="text"
              id="Password"
              onChange={handleChange}
              className="h-[40px] rounded-[6px] border border-borderGray font-popins text-[14px] focus:outline-none focus:ring-2 focus:ring-hoverGold"
            />
          </div>
          <div className="mt-6 flex w-full flex-col gap-[6px]">
            <h2 className="font-popins text-[11px] font-semibold uppercase tracking-[0.14em] text-textGray">
              confirm New Password
            </h2>
            <input
              type="text"
              id="ConfirmPassword"
              onChange={handleChange}
              className={`h-[40px] rounded-[6px] border border-borderGray font-popins text-[14px] focus:outline-none focus:ring-2 focus:ring-hoverGold`}
            />
          </div>
          <div className="relative right-0 mt-6 ">
            <button
              className="mt-4 flex h-[40px] items-center gap-2 rounded-[6px] bg-gold px-6 py-2 font-popins text-[14px] font-medium text-strongNightGreen"
              onClick={handleSubmit}
            >
              <FaSave size={14} />
              Save Changes
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

/**
 * <div className="mx-auto w-full max-w-lg p-3">
      <h1 className="my-3 text-center text-3xl font-semibold">Profile</h1>

      {/*form bellow /}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/*upload input below /}

        <TextInput
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e: any) => setImage(e.target.files[0])}
          className="hidden"
        />

        {/*image display /}
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

        {/surname input field bellow /}
        <TextInput
          defaultValue={currentUser.LastName}
          type="text"
          name="LastName"
          id="LastName"
          placeholder="lastName"
          className="rounded-lg bg-slate-100"
          onChange={handleChange}
        />

        {/password input field bellow /}
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
 */
