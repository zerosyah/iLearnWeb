import { useState, useRef } from "react";
import { TextInput, Select, FileInput, Button, Alert } from "flowbite-react";
//import ReactQuill from "react-quill";
//import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import {
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
  ref,
} from "firebase/storage";
import { app } from "../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CreatePost() {
  // a useNavigate hook to redirect
  const navigate = useNavigate();

  // useState hook to store image
  const [file, setFile] = useState([]);

  // useState hook to store image upload progress
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // useState hook to store image upload error
  const [imageUploadError, setImageUploadError] = useState(null);

  // useState hook to store form data
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    content: "",
    category: ""
  });  

  // useRef hook to store file
  // @ts-ignore
  const fileRef = useRef(null);

  // useState hook to store publish error
  const [puplishError, setPublishError] = useState(null);

  // a function to handle image upload
  const handleUploadImage = async () => {
    try {
      setLoading(true);
      // check if file is selected or not
      if (!file) {
        // @ts-ignore
        setImageUploadError("Please select an image to upload");
        setLoading(false);
        return;
      }
      setImageUploadError(null);

      // upload image
      const storage = getStorage(app);

      // get file name
      // @ts-ignore
      const fileName = new Date().getTime() + file.name;

      // create storage reference
      const storageRef = ref(storage, fileName);

      // upload image to storage
      // @ts-ignore 
      const uploadTask = uploadBytesResumable(storageRef, file);

      // update progress
      uploadTask.on(
        "state_changed",
        // progress function
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // @ts-ignore
          setImageUploadProgress(progress);
        },

        // error function
        // @ts-ignore
        (error) => {
          // @ts-ignore
          setImageUploadError("Error uploading image");
          setLoading(false);
          setImageUploadProgress(null);
        },

        // success function 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
            setLoading(false);
          });
        }
      );
    } catch (error) {
      console.log(error);
      setLoading(false);
      // @ts-ignore
      setImageUploadError("Error uploading image");
      setImageUploadProgress(null);
    }
  };

  // a function to handle form submission or create post
  const handleCreatePost = async (e: any) => {
    // prevent default form submission
    e.preventDefault();

    // create post
    try {
      // api to create post
      const res = await fetch("/api/post/create", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // get data from api
      const data = await res.json();

      // if failed to create post
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      // if created post
      if (res.ok) {
        setPublishError(null);
        navigate(`/dashboard?tab=posts`);
      }
    } catch (error) {
      console.log("could not create post");
    }
  };
  return (
    <div className="mx-auto min-h-screen max-w-3xl p-3">
      {/*create post heading */}
      <h1 className="my-7 text-center text-3xl font-semibold ">Create Post</h1>

      {/*create post form */}
      <form className="flex flex-col gap-4" onSubmit={handleCreatePost}>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <TextInput
            type="text"
            placeholder="Title"
            required
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="uncategorized">select category</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physical Sciences">Physics</option>
            <option value="English">English</option>
            <option value="IsiZulu">IsiZulu</option>
            <option value="Life Sciences">Life Sciences</option>
            <option value="Accounting">Accounting</option>
            <option value="Life Orientation">Life Orientation</option>
            <option value="Consummer Studies">Consummer Studies</option>
            <option value="Geography">Geography</option>
            <option value="Drama">Drama</option>
            <option value="Tourism">Tourism</option>
            <option value="School Notice">School Notice</option>
          </Select>
        </div>
        <div className="flex items-center justify-between gap-4 border-4 border-dotted border-teal-500">
          <FileInput
            accept="image/*"
            className=""
            onChange={(e: any) => setFile(e.target.files[0])}
          />

          <Button
            type="button"
            gradientDuoTone={"purpleToBlue"}
            size="sm"
            outline
            onClick={handleUploadImage}
            disabled={loading}
          >
            {imageUploadProgress ? (
              <div className="h-16 w-16">
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              "upload image"
            )}
          </Button>
        </div>
        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}
        {
          // @ts-ignore
          formData.image && (
            <img
              src={formData.image}
              alt="uploaded image"
              className="h-72 w-full object-cover"
            />
          )
        }
        {/**
         * <ReactQuill
          theme="snow"
          placeholder="Type here"
          className="h-72 mb-12"
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
         */}
        <Button type="submit" gradientDuoTone={"purpleToPink"} outline>
          Submit
        </Button>
        {puplishError && (
          <Alert className="mt-5" color="failure">
            {puplishError}
          </Alert>
        )}
      </form>
    </div>
  );
}
