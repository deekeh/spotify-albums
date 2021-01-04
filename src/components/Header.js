import { Button, Card } from "react-bootstrap";
import React, { useState } from "react";
const Header = () => {
  const [albums, setAlbums] = new useState([]);
  const getAlbums = async (e) => {
    e.preventDefault();
    const albumData = await fetch(
      "https://api.spotify.com/v1/artists/22bE4uQ6baNwSHPVcDxLCe/albums",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer BQAVegWEbB8lLEKRPzqlDrVO3DV12NOMMr9OtbqopgnDnHoaghEiCerkhfTs2wDGMvbys4TCETFm-S_GHS3mv1UJvPP4rM3BWOYPo775cgNWHNi6Ue3gVYwOBIHB2oGsTLNbHyM7H6HZXQBnijhsetGnjEHXovDg0B9pQmKS3a54FPQ",
        },
      }
    );

    const data = await albumData.json();
    var a = [];
    data.items.forEach((album) =>
      a.push({
        name: album.name,
        releaseDate: album.release_date,
        photo: album.images[0].url,
      })
    );
    console.log(a);
    setAlbums(a);
  };

  return (
    <>
      {/* <button onClick={getAlbums}>Get Albums</button> */}
      <div className="p-2">
        <Button variant="success" className="btn-block" onClick={getAlbums}>
          Get Albums
        </Button>
      </div>
      <div>
        {albums.map((album, idx) => (
          <Card
            key={idx}
            className="m-1 d-inline-block"
            style={{ width: "32vw" }}
          >
            <Card.Img variant="top" src={album.photo} />
            <Card.Body>
              <Card.Title>{album.name}</Card.Title>
              <Card.Text>Release Date: {album.releaseDate}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Header;
