import React from "react";
import AddPost from "./AddPost";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {deletePost, fetchPost} from "../../utilis/api";
import {AiFillEdit} from "react-icons/ai";
import {IoMdTrash} from "react-icons/io";
import "./post.css";
import {useNavigate} from "react-router-dom";

const PostList = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    data: posts,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPost(),
  });
  const deletePostMutataion = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["posts"]});
    },
  });
  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string | number
  ) => {
    e.preventDefault();
    deletePostMutataion.mutate(id);
  };

  if (isLoading) return "loading...";
  if (isError) return `${error && error?.message}`;
  return (
    <div>
      <AddPost />
      {posts &&
        posts.map((item: {id: number; body: string; title: string}) => (
          <div key={item.id} className="post-list">
            <h4 className="title" onClick={() => navigate(`/post/${item.id}`)}>
              {item.title}
            </h4>
            <button
              onClick={() => navigate(`/post/${item.id}/edit`)}
              className="action-btn"
            >
              <AiFillEdit color="orange" size="1.45em" />
            </button>
            <button
              className="action-btn"
              onClick={(e) => handleDelete(e, item.id)}
            >
              <IoMdTrash color="orange" size="1.45em" />
            </button>
          </div>
        ))}
    </div>
  );
};

export default PostList;
