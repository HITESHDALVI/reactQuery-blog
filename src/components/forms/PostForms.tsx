import React, {useState} from "react";
import "./form.css";
import {postType} from "../post/post-type";
type Props = {onSubmit: (post: postType) => void; initialValue: postType};
type intialStateType = {
  title: string;
  body: string;
};
const intialState = {
  title: "",
  body: "",
};

const PostForms = (props: Props) => {
  const [post, setPost] = useState<intialStateType>({
    title: props.initialValue.title || "",
    body: props.initialValue.title || "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const renderField = (label: string) => {
    return (
      <div className="input-row">
        <label className="">{label}</label>
        <input
          className=""
          onChange={handleChange}
          type="text"
          name={label.toLowerCase()}
          value={post[label.toLowerCase()]}
        />
      </div>
    );
  };
  const hanleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(post);
    setPost({...intialState});
  };
  return (
    <form onSubmit={hanleSubmit} className="form">
      {renderField("Title")}
      {renderField("Body")}
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForms;
