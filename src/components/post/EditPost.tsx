import React from "react";
import PostForms from "../forms/PostForms";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useNavigate, useParams} from "react-router-dom";
import {getPost, updatePost} from "../../utilis/api";
import {postType} from "./post-type";

const EditPost = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {
    data: posts,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
  });
  const queryClient = useQueryClient();
  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["posts"]});
    },
  });

  if (isLoading) return "loading...";
  if (isError) return `${error && error?.message}`;
  const handleSubmit = (post: postType) => {
    updatePostMutation.mutate({
      ...post,
      id,
    });
    navigate("/");
  };
  return (
    <div>
      <PostForms initialValue={posts} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditPost;
