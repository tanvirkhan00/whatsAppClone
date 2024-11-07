import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import ChatLists from "./Pages/ChatLists"
import WhatsAppChat from "./Pages/WhatsAppChat"
import Profile from "./Pages/Profile";

function App() {
  let router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<ChatLists />} />
        <Route path="/chatBox" element={<WhatsAppChat />} />
        <Route path="/contact" element={<Profile />} />
      </Route>
    </>
  ))

  return (
    <>
      <RouterProvider router={router} ></RouterProvider>
    </>
  )
}

export default App
