import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from "./pages";
import { SidebarProvider } from "./context/SidebarContext";
const App = () => (
  <BrowserRouter>
    <SidebarProvider>
      <div className="bg-black min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </div>
    </SidebarProvider>
  </BrowserRouter>
);
export default App;
