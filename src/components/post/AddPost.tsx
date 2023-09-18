import React from "react";
import PostForms from "../forms/PostForms";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {addPost} from "../../utilis/api";
import {postType} from "./post-type";
import {v4 as uuidv4} from "uuid";

const AddPost = () => {
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["posts"]});
    },
  });
  const handleAddPost = (post: postType) => {
    createPostMutation.mutate({
      ...post,
      id: uuidv4(),
    });
  };
  return (
    <div>
      <h2>Add new Post</h2>
      <PostForms
        onSubmit={handleAddPost}
        initialValue={{title: "", body: ""}}
      />
    </div>
  );
};

export default AddPost;
