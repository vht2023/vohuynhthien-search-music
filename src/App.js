import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm.tsx";
import TrackList from "./components/TrackList.tsx";
import { searchMusic } from "./api/itunes.ts";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    useEffect(() => {
        const fetchMusic = async () => {
            try {
                setLoading(true);
                const results = await searchMusic(searchTerm);
                setTracks(results);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        if (searchTerm) {
            fetchMusic();
        }
    }, [searchTerm]);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Search for music information from iTunes</h1>
            <SearchForm onSearch={handleSearch} />
            {loading ? <p>Loading...</p> : <TrackList tracks={tracks} />}
        </div>
    );
};

export default App;
