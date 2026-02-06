import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HugPage from './pages/HugPage';
import KissPage from './pages/KissPage';
import RosePage from './pages/RosePage';
import ChocolatePage from './pages/ChocolatePage';
import TeddyPage from './pages/TeddyPage';
import PromisePage from './pages/PromisePage';
import ProposePage from './pages/ProposePage';
import ValentinePage from './pages/ValentinePage';

import MusicPlayer from './components/MusicPlayer';

function App() {
    return (
        <Router>
            <MusicPlayer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hug" element={<HugPage />} />
                <Route path="/kiss" element={<KissPage />} />
                <Route path="/rose" element={<RosePage />} />
                <Route path="/chocolate" element={<ChocolatePage />} />
                <Route path="/teddy" element={<TeddyPage />} />
                <Route path="/promise" element={<PromisePage />} />
                <Route path="/propose" element={<ProposePage />} />
                <Route path="/valentine" element={<ValentinePage />} />
            </Routes>
        </Router>
    );
}

export default App;
