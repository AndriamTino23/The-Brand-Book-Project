import { useEffect, useState } from "react";
import "./Highlights.css";
// import AddIcon from '../assets/AddIcon.svg'
// import RmIcon from '../assets/RmIcon.svg'
import ApplyNowButton from "./ApplyNowButton";

const Highlights = () => {
  const [items, setItems] = useState([
    "Our mission is to make work life simpler, more pleasant and more productive",
    "Slack is a trademarked name, so there are a few rules about how to use it",
    "For a quick description of Slack, we’ve included boilerplate copy below",
  ]);
  const backgroundColors = ["white", "#C22231", "black"];
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(
    backgroundColors[0]
  );
  const textColors = ["black", "white"];
  const [selectedTextColor, setSelectedTextColor] = useState(textColors[0]);

  useEffect(() => {
    updateTextareaHeights();
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [newItemText, setNewItemText] = useState("");

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleItemChange = (e, index) => {
    const updateItems = [...items];
    updateItems[index] = e.target.value;
    console.log(updateItems[index]);
    setItems(updateItems);

    updateTextareaHeight(index);
  };

  const updateTextareaHeights = () => {
    const textareas = document.querySelectorAll(".auto-resize-textarea");
    textareas.forEach((textarea, index) => {
      updateTextareaHeight(index);
    });
  };

  const updateTextareaHeight = (index) => {
    const textarea = document.querySelector(`#textarea-${index}`);
    textarea.style.height = "";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleTextChange = (e) => {
    setNewItemText(e.target.value);
    updateTextareaHeight(-1);
  };

  const handleAddHighlight = () => {
    if (newItemText.trim() !== "") {
      setItems([...items, newItemText]);
      setNewItemText("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddHighlight();
    toggleForm();
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
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
        className="highlights-container"
        onClick={toggleForm}
        style={{
          backgroundColor: selectedBackgroundColor,
          color: selectedTextColor,
        }}
      >
        <h1 style={{ color: selectedTextColor }}>Highlights</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index} style={{ color: selectedTextColor }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {showForm && (
        <div className="overlay">
          <div className="form-container">
            <div className="text">
              <h1>Highlights</h1>
              <p>
                It is essential to add the highlights of your brand in order to
                effectively showcase what sets you apart and what attracts
                potential customers
              </p>
            </div>
            <form className="flex column align-center justify-center gap-10">
              <div className="flex column gap-10">
                <label className="semi-bold">Highlights :</label>
                <ul className="highlights-list">
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className="flex align-center justify-center gap-10"
                    >
                      <textarea
                        name={index}
                        id={`textarea-${index}`}
                        value={item}
                        onChange={(e) => handleItemChange(e, index)}
                        className="auto-resize-textarea"
                      ></textarea>
                      <button
                        className="delete-btn flex align-center justify-center"
                        type="button"
                        onClick={() => handleDelete(index)}
                      >
                        <img src={null} />
                      </button>
                    </li>
                  ))}
                  <li className="flex align-center justify-center gap-10">
                    <textarea
                      id="textarea--1"
                      value={newItemText}
                      onChange={handleTextChange}
                      className="auto-resize-textarea"
                      placeholder="Enter new Highlight"
                    >
                      {" "}
                    </textarea>

                    <button
                      className="add-btn flex align-center justify-center"
                      type="button"
                      onClick={handleAddHighlight}
                    >
                      <img src={null} alt="" />
                    </button>
                  </li>
                </ul>
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

export default Highlights;
