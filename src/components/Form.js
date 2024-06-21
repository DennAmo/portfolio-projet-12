import React, { useState } from "react";

const Form = ({ addProject }) => {
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [description, setDescription] = useState("");
  const [git, setGit] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newProject = {
          title,
          image: reader.result,
          description,
          git,
        };
        addProject(newProject);
        setTitle("");
        setImageFile(null);
        setDescription("");
        setGit("");
        setIsFormVisible(false);
      };
      reader.readAsDataURL(imageFile);
    } else {
      const newProject = {
        title,
        image: "",
        description,
        git,
      };
      addProject(newProject);
      setTitle("");
      setImageFile(null);
      setDescription("");
      setGit("");
      setIsFormVisible(false);
    }
  };

  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    return (
      <div className="form">
        <button
          className="open-form-button"
          onClick={() => setIsFormVisible(true)}
        >
          Add New Project
        </button>
        {isFormVisible && (
          <div
            className="form-container"
            onClick={() => setIsFormVisible(false)}
          >
            <div className="form-content" onClick={(e) => e.stopPropagation()}>
              <form onSubmit={handleSubmit}>
                <div className="form__layout">
                  <label className="form__title" htmlFor="title">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="form__image" htmlFor="image">
                    Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                  />
                </div>
                <div>
                  <label className="form__description" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div>
                  <label className="form__gitlink" htmlFor="git">
                    GitHub URL
                  </label>
                  <input
                    type="text"
                    id="git"
                    value={git}
                    onChange={(e) => setGit(e.target.value)}
                    required
                  />
                </div>
                <button className="form__submit" type="submit">
                  Add Project
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default Form;
