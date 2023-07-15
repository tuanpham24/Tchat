import { formatDate } from "../../utils/date";
import "./style.scss";

export default function MessageItem({ userId, messageData }) {
  const { message, timestamp, userSent } = messageData;
  const newTime = timestamp && formatDate(timestamp.toDate().toISOString());

  return (
    <>
      <div className="message-item">
        <div
          className={
            userId == userSent.uid
              ? "flex-container justify--end"
              : "flex-container"
          }
        >
          <div className="avatar__wrp">
            {userId == userSent.uid ? (
              ""
            ) : (
              <img src={userSent?.photoURL || ""} alt="avatar" />
            )}
          </div>
          <div className="message-content">
            <div className="message__heading flex-container">
              <h4>
                {userId == userSent.uid ? "" : userSent?.displayName}
              </h4>
              <span className="time">{newTime}</span>
            </div>
            <div
              className={
                userId == userSent.uid
                  ? "flex-container justify--end"
                  : ""
              }
            >
              <p className="message__text bg--primaryblur">{message}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
