
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import {
  //signInStart,
  signInSuccess,
  //signInFailure,
} from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "flowbite-react";
import { FaGoogle } from "react-icons/fa";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/dashboard");
    } catch (error) {
      console.log("could not login with google", error);
    }
  };
  return (
    <Button
      type="button"
      className="rounded-lg uppercase hover:opacity-95"
      onClick={handleGoogleClick}
      outline
      gradientDuoTone={"pinkToOrange"}
    >
      <FaGoogle className="mr-2 inline" />Continue with google
    </Button>
  );
}
