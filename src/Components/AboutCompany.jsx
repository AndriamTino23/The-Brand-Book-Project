import { useState } from "react";
import "./AboutCompany.css";
import ApplyNowButton from "./ApplyNowButton";

const AboutCompany = () => {
  const [aboutCompany, setAboutCompany] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum sed consequat quam nisl. Nulla at volutpat diam, vitae luctus enim. Morbi blandit cursus risus, in ultrices velit sodales non. Aliquam erat volutpat. Curabitur a felis in nunc fringilla tristique."
  );

  const backgroundColors = ["white", "#C22231", "black"];
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(
    backgroundColors[0]
  );
  const textColors = ["black", "white"];
  const [selectedTextColor, setSelectedTextColor] = useState(textColors[0]);

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const updateTextareaHeight = () => {
    const textarea = document.querySelector("#textarea-about-company");
    textarea.style.height = "";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleTextChange = (e) => {
    setAboutCompany(e.target.value);
    updateTextareaHeight();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleForm();
  };

  const handleBackgroundColorSelection = (color) => {
    setSelectedBackgroundColor(color);
  };

  const handleTextColorSelection = (color) => {
    setSelectedTextColor(color);
  };

  return (
    <div>
      <div
        className="about-company-container"
        onClick={toggleForm}
        style={{
          backgroundColor: selectedBackgroundColor,
          color: selectedTextColor,
        }}
      >
        <h1 style={{ color: selectedTextColor }}>Our company</h1>
        <p style={{ color: selectedTextColor }}>{aboutCompany}</p>
      </div>

      {showForm && (
        <div className="overlay">
          <div className="form-container">
            <div className="text">
              <h1>Company Information</h1>
              <p>
                It is essential to add the highlights of your brand in order to
                effectively showcase what sets you apart and what attracts
                potential customers
              </p>
            </div>
            <form className="flex column align-center justify-center gap-10">
              <div className="flex column gap-10">
                <label className="semi-bold">About Company :</label>
                <textarea
                  id="textarea-about-company"
                  value={aboutCompany}
                  onChange={handleTextChange}
                  className="auto-resize-textarea"
                >
                  {" "}
                </textarea>
              </div>
              <div className="flex column gap-10">
                <label className="semi-bold">Background color :</label>
                <ul className="lst-none flex gap-10">
                  {backgroundColors.map((backgroundColor, index) => (
                    <li key={index}>
                      <button
                        className="color-picker"
                        type="button"
                        onClick={() =>
                          handleBackgroundColorSelection(backgroundColor)
                        }
                        style={{
                          backgroundColor: backgroundColor,
                          border:
                            selectedBackgroundColor === backgroundColor
                              ? "3px solid #4880FF"
                              : "3px solid #D5D5D5",
                        }}
                      ></button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex column gap-10">
                <label className="semi-bold">Text color :</label>
                <ul className="lst-none flex gap-10">
                  {textColors.map((textColor, index) => (
                    <li key={index}>
                      <button
                        className="color-picker"
                        type="button"
                        onClick={() => handleTextColorSelection(textColor)}
                        style={{
                          backgroundColor: textColor,
                          border:
                            selectedTextColor === textColor
                              ? "3px solid #4880FF"
                              : "3px solid #D5D5D5",
                        }}
                      ></button>
                    </li>
                  ))}
                </ul>
              </div>

              <ApplyNowButton onClick={handleSubmit} />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutCompany;
