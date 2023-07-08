import { useContext } from "react";
import { AuthContext } from "./contexts/Auth";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/sidebar/Sidebar";
import Login from "./pages/login/Login";
import HomePage from "./pages/home/HomePage";
import ChatRoomList from "./pages/chat-room-list/ChatRoomList";
import MusicRoom from "./pages/music-room/MusicRoom";

export default function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  };

  const PublicRoutes = () => {
    return (
      <>
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      </>
    );
  };

  const PrivateRoutes = () => {
    return (
      <>
        <div id="app-container" className="flex-container">
          <Sidebar />
          <div id="main-content">
            <ProtectedRoute>
              <Routes>
                <Route path="/chat-rooms/" element={<ChatRoomList />} />
                <Route path="/music-room/" element={<MusicRoom />} />
                <Route path="/" element={<HomePage />} />
              </Routes>
            </ProtectedRoute>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {currentUser ? (
        <PrivateRoutes currentUser={currentUser} />
      ) : (
        <PublicRoutes />
      )}
    </>
  );
}
