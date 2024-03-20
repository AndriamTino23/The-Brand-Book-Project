import { useState } from "react";
import "./AboutBrand.css";
import ApplyNowButton from "./ApplyNowButton";
// import ImgIcon from '../assets/ImgIcon.svg'

let initialBrandInfo = {
  name: "XXXXXXXX",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum sed consequat quam nisl. Nulla at volutpat diam, vitae luctus enim. Morbi blandit cursus risus, in ultrices velit sodales non. Aliquam erat volutpat. Curabitur a felis in nunc fringilla tristique.",
};

const AboutBrand = () => {
  const [showForm, setShowForm] = useState(false);
  const [brandInfo, setBrandInfo] = useState(initialBrandInfo);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [inputBackgroundImage, setInputBackgroundImage] = useState(null);
  const [classAboutContainer, setClassAboutContainer] = useState("bg-color");

  const handleChangeName = (e) => {
    setBrandInfo({ ...brandInfo, name: e.target.value });
  };

  const handleChangeAbout = (e) => {
    setBrandInfo({ ...brandInfo, about: e.target.value });
    updateTextareaHeight();
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBackgroundImage(reader.result);
      setInputBackgroundImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }

    if (classAboutContainer === "bg-color") {
      setClassAboutContainer("bg-color linear-gradient");
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleForm();
  };

  const updateTextareaHeight = () => {
    const textarea = document.querySelector("#about-brand");
    textarea.style.height = "";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <>
      <div
        className="about-container"
        onClick={toggleForm}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={classAboutContainer}>
          <h1>About {brandInfo.name}</h1>
          <p>{brandInfo.about}</p>
        </div>
      </div>
      {showForm && (
        <div className="overlay">
          <div className="form-container">
            <div className="text">
              <h1>Brand Information</h1>
              <p>
                The information regarding the brand is of paramount importance.
                It enables a better understanding of the company&apos;s
                specificities, thereby facilitating the customization of
                services according to needs.
              </p>
            </div>
            <form>
              <div className="flex column gap-10">
                <label className="semi-bold" htmlFor="brand-name">
                  Brand Name:
                </label>
                <input
                  type="text"
                  name="brandName"
                  id="brand-name"
                  value={brandInfo.name}
                  onChange={handleChangeName}
                />
              </div>
              <div className="flex column gap-10">
                <label className="semi-bold" htmlFor="about-brand">
                  About Brand:
                </label>
                <textarea
                  name="aboutBrand"
                  id="about-brand"
                  onChange={handleChangeAbout}
                  value={brandInfo.about}
                  minLength={150}
                  maxLength={500}
                ></textarea>
                <p className="char-counter">
                  {brandInfo.about.length < 150 ? (
                    <span style={{ color: "red" }}>
                      {brandInfo.about.length + " "}{" "}
                    </span>
                  ) : (
                    <span style={{ color: "green" }}>
                      {brandInfo.about.length + " "}{" "}
                    </span>
                  )}
                  / min: 150 / max: 500
                </p>
              </div>

              <div className="flex column gap-10">
                <label className="semi-bold"> Cover image: </label>
                <div
                  className="image-container"
                  style={{ backgroundImage: `url(${inputBackgroundImage})` }}
                  onClick={() => {
                    const input = document.querySelector("#image-input");
                    input.click();
                  }}
                >
                  <input
                    id="image-input"
                    type="file"
                    accept="image/*"
                    onChange={handleInputChange}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
              {brandInfo.about.length < 150 ? (
                <ApplyNowButton isDisabled={true} onClick={handleSubmit} />
              ) : (
                <ApplyNowButton isDisabled={false} onClick={handleSubmit} />
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutBrand;
