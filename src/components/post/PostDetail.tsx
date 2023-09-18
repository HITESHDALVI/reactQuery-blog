import {getPost} from "../../utilis/api";
import {useQuery} from "@tanstack/react-query";
import {useNavigate, useParams} from "react-router-dom";
import {IoMdArrowRoundBack} from "react-icons/io";
import "./post.css";

const PostDetail = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const {data: posts} = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });
  console.log({id, posts});
  return (
    <div>
      <button onClick={() => navigate("/")} className="action-btn back">
        <IoMdArrowRoundBack color="#6495ed" size="1.6em" />
        <span className="back-btn">Back</span>
      </button>
      <div className="post-details">{posts && posts.title}</div>
      <div className="post-details">{posts && posts.body}</div>
    </div>
  );
};

export default PostDetail;
