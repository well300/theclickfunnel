import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SpotifyPlaylist = () => {
  const [playlistId, setPlaylistId] = useState("7IY3ni8UroOroWxonEFwEV"); // Default playlist
  const [accessToken, setAccessToken] = useState("");

  const [iframeRef, iframeInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    // Fetch Access Token
    const fetchToken = async () => {
      const clientId = "YOUR_CLIENT_ID";
      const clientSecret = "YOUR_CLIENT_SECRET";

      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        },
        body: "grant_type=client_credentials",
      });

      const data = await response.json();
      setAccessToken(data.access_token);
    };

    fetchToken();
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center bg-[#131313] overflow-hidden px-2 py-8 sm:py-12">
      <motion.div
        ref={iframeRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: iframeInView ? 1 : 0, y: iframeInView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[90%] sm:w-[85%] md:w-[95%] max-w-8xl mx-auto relative h-[300px] sm:h-[400px] md:h-[500px] min-h-[300px] flex justify-center items-center"
      >
        <iframe
          title="Spotify Playlist"
          className="rounded-lg w-full h-full"
          src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default SpotifyPlaylist;
