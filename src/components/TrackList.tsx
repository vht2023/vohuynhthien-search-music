import React, { useState } from "react";
import { TrackType } from "@/utils/types/trackTypes";
import TrackCard from "./TrackCard";
import { Checkbox, InputNumber } from "antd";

type PropsType = {
    tracks: TrackType[];
};

const TrackList = ({ tracks }: PropsType) => {
    const [showExplicit, setShowExplicit] = useState<boolean>(true);
    const [maxPrice, setMaxPrice] = useState<number | null>(0);

    const handleExplicitToggle = () => {
        setShowExplicit(!showExplicit);
    };

    const filteredTracks = tracks.filter((track) => {
        const meetsExplicitCriteria = showExplicit ? true : !track.trackExplicitness.toLowerCase().includes("explicit");
        const meetsPriceCriteria = maxPrice ? track.trackPrice <= maxPrice : true;
        return meetsExplicitCriteria && meetsPriceCriteria;
    });

    if (tracks.length === 0) {
        return <p>No tracks found.</p>;
    }
    return (
        <React.Fragment>
            <div className="flex mb-4 justify-between">
                <Checkbox checked={showExplicit} onChange={handleExplicitToggle}>
                    Show Explicit Songs
                </Checkbox>
                <div className="flex items-center">
                    <span className="mr-2">Max Price:</span>
                    <InputNumber min={0} value={maxPrice} onChange={(value) => setMaxPrice(value)} />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTracks.map((track) => (
                    <TrackCard key={track.trackId} track={track} />
                ))}
            </div>
        </React.Fragment>
    );
};

export default TrackList;
