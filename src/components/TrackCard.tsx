import React from "react";
import { Card, Typography } from "antd";
import { TrackType } from "@/utils/types/trackTypes";

const { Title } = Typography;

type PropsType = {
    track: TrackType;
};

const TrackCard = ({ track }: PropsType) => {
    return (
        <Card>
            <img src={track.artworkUrl100.replace("100x100bb", "500x500bb")} alt={track.trackName} className="mb-2" />
            <Title level={4}>{track.trackName}</Title>
            <p>Artist: {track.artistName}</p>
            <p>Collection: {track.collectionName}</p>
            <p>
                Price: {track.trackPrice} {track.currency}
            </p>
        </Card>
    );
};

export default TrackCard;
