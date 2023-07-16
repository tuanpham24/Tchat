import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import { sendMessage } from "../../services/message";
import "./style.scss";

export default function MessageInput({ roomId }) {
  const { currentUser } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const user = {
    uid: currentUser.uid,
    displayName: currentUser.displayName,
    photoURL: currentUser.photoURL,
    email: currentUser.email,
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    sendMessage(user, roomId, message);
    setMessage("");
  };

  return (
    <>
      <div id="message-input" className="bg--white">
        <form
          className="flex-container items--center"
          onSubmit={handleSendMessage}
        >
          <div className="input__container">
            <input
              type="text"
              className="input-primary border--bottom"
              placeholder="&#127826;Enter message..."
              onChange={handleChange}
              value={message}
              required
              minLength={1}
            />
          </div>
          <div className="btn__container">
            <button
              type="submit"
              className="btn btn--primary"
              disabled={message < 1}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
