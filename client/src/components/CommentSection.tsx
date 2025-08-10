import { Alert, Button, Textarea } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// @ts-ignore
import { Link, useNavigate, useParams } from "react-router-dom";
import ShowComments from "./Comments";

export default function CommentSection({ postId }: any) {
  const { currentUser } = useSelector((state: any) => state.user);
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(null);
  const [comments, setComments] = useState<any[]>([]);
  const navigate = useNavigate();
  //const param = useParams();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (comment.length > 200) {
      console.log("comment is too long");
      return;
    };

    try {
      const res = await fetch(`/api/comment/create`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          content: comment,
          postId,
          userId: currentUser._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setComment("");
        setCommentError(null);
        // @ts-ignore
        setComments([data, ...comments]);
      }
    } catch (error: any) {
      setCommentError(error.message);
    }
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comment/comments/${postId}`);
        const data = await res.json();
        if (res.ok) {
          setComments(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchComments();
  }, [postId]);

  const handleLikes = async (commentId: any) => {
    try {
      if (!currentUser) {
        navigate("/login");
        return;
      }
      const res = await fetch(`/api/comment/like/${commentId}`, {
        method: "PUT",
      });
      if (res.ok) {
        const data = await res.json();
        const ab = data[0];
        setComments(
          comments.map((com: any) =>
            com._id === commentId
              ? {
                  ...com,
                  likes: ab.likes,
                  numberOfLikes: ab.likes.length,
                }
              : com,
          ),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = async (comment: any, editedComment: any) => {
    setComments(
      comments.map((com: any) =>
        com._id === comment._id ? { ...com, content: editedComment } : com,
      ),
    );
  };
  return (
    <div className="mx-auto w-full max-w-2xl p-3">
      {currentUser ? (
        <div className="my-5 flex items-center gap-1 text-sm text-gray-500">
          <p className="">Signed in as:</p>
          <img
            className="h-5 w-5 rounded-full object-cover"
            src={currentUser.profilePicture}
            alt=""
          />
          <Link to={"/dashboard?tab=profile"} className="text-sm text-teal-500">
            {currentUser.firstName}
          </Link>
        </div>
      ) : (
        <div className="my-5 text-sm text-teal-500">
          Sign in to comment,
          <Link to={"/login"} className="text-sm text-blue-500">
            {" "}
            Login
          </Link>
        </div>
      )}
      {currentUser && (
        <form
          className="rounded-lg border border-teal-500 p-3"
          onSubmit={handleSubmit}
        >
          <Textarea
            placeholder="add comment"
            rows={3}
            maxLength={200}
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <div className="mt-3 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              {200 - comment.length} characters left
            </p>
            <Button
              type="submit"
              gradientDuoTone={"purpleToBlue"}
              size="xm"
              className="outline"
            >
              submit
            </Button>
          </div>
          {commentError && (
            <Alert className="mt-2" color="failure">
              {commentError}
            </Alert>
          )}
        </form>
      )}

      {comments.length === 0 ? (
        <p className="text-sm text-gray-500">No comments yet</p>
      ) : (
        <>
          <div className="my-5  flex items-center gap-1 text-sm" key={postId}>
            <p className="">comments</p>
            <div
              className="rounded-sm border border-teal-500 px-2 "
              key={postId}
            >
              <p className="">{comments.length}</p>
            </div>
          </div>

          {comments.map((comment) => (
            <ShowComments
              key={
                // @ts-ignore
                comment._id
              }
              comment={comment}
              onlike={handleLikes}
              onEdit={handleEdit}
            />
          ))}
        </>
      )}
    </div>
  );
}
