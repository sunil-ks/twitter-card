import { useEffect, useState } from "react";

export default function TwitterCard(props) {
  const [isInitial, setInitial] = useState(true);
  const [userNameColor, setUsernameColor] = useState("#000");

  useEffect(() => {
    if (props.usernameTextColor && isInitial) {
      setUsernameColor(props.usernameTextColor);
      setInitial(false);
    }
  }, [props.usernameTextColor, isInitial]);

  const updateTextColor = () => {
    if (userNameColor === "#000") {
      setUsernameColor(props.usernameTextColor);
    } else {
      setUsernameColor("#000");
    }
  };

  return (
    <div className="card-container">
      <div className="d-flex-center">
        <img src={props.imageUrl} alt="user img" className="user-img" />
        <div>
          <p
            className="mb-0 pb-5 userInfo cursor-pointer"
            style={{ color: userNameColor }}
            title={props.userName}
          >
            <strong>{props.userName}</strong>
          </p>
          <p className="mb-0 userInfo light-text">{props.handle}</p>
        </div>
      </div>
      <div className="d-flex-center">
        <button className="card-btn cursor-pointer" onClick={updateTextColor}>
          {props.buttonTitle}
        </button>
      </div>
    </div>
  );
}
