import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
// import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { value_converter } from "../../data";
import moment from "moment";

const PlayVideo = ({ videoId }) => {

  const [apiData, setApiData] = useState(null);

  const fetchVideoData = async () => {
    // Fetching Videos data
    const videoDetail_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${import.meta.env.VITE_YOUTUBE_API}`;
    await fetch(videoDetail_url).then(res => res.json()).then(data => setApiData(data.items[0]));
  }

  useEffect(() => {
    fetchVideoData();
    console.log(apiData);
  },[])

  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameB order="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
      <div className="play-video-info">
        <p>{value_converter(apiData?apiData.statistics.viewCount : "16k")} Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "16k"}</p>
        <div>
          <span>
            <img src={like} alt="" /> {apiData ? value_converter(apiData.statistics.likeCount) : 155}
          </span>
          <span>
            <img src={dislike} alt="" /> 2
          </span>
          <span>
            <img src={share} alt="" /> Share
          </span>
          <span>
            <img src={save} alt="" /> Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe GreatStack to watch more tutorials on web dev</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              One of the best tutorials I have watched so far after trying out
              hundreds of boring tutorial and with a bad explaination. This
              channel is a life saver
            </p>
            <div className="comment-action">
              <img src={like} alt="" /> <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              One of the best tutorials I have watched so far after trying out
              hundreds of boring tutorial and with a bad explaination. This
              channel is a life saver
            </p>
            <div className="comment-action">
              <img src={like} alt="" /> <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              One of the best tutorials I have watched so far after trying out
              hundreds of boring tutorial and with a bad explaination. This
              channel is a life saver
            </p>
            <div className="comment-action">
              <img src={like} alt="" /> <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              One of the best tutorials I have watched so far after trying out
              hundreds of boring tutorial and with a bad explaination. This
              channel is a life saver
            </p>
            <div className="comment-action">
              <img src={like} alt="" /> <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              One of the best tutorials I have watched so far after trying out
              hundreds of boring tutorial and with a bad explaination. This
              channel is a life saver
            </p>
            <div className="comment-action">
              <img src={like} alt="" /> <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
