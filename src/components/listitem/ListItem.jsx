import "./listitem.scss";
import React, { useEffect, useState } from "react";
import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import axiosClient from "../config/axios";
import { Link } from 'react-router-dom'

export default function ListItem({ index, item }) {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({})

    useEffect(() => {

      const getMovie = async () => {
        try {

          const res = await axiosClient.get('/movies/find/' + item, {
            headers: {
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWU2NGY1YzcxMzU2YTU2YWM1ZTgwYyIsImlhdCI6MTYyOTM4NjI2NCwiZXhwIjoxNjI5NjQ1NDY0fQ.OKKaucVvsSyXH4ecyZGkq2_R-EEi-PXWG8_oFjKP4YU"
            },
          })

          setMovie(res.data)

        } catch(error) {

          console.log(error)

        }
      }

      getMovie()

    }, [item])
    
    return (
      <Link to={{pathname: "/watch", movie: movie}}>
        <div
          className="listItem"
          style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={movie.img}
            alt=""
          />
          {isHovered && (
            <>
              <video src={movie.trailer} autoPlay={true} loop />
              <div className="itemInfo">
                <div className="icons">
                  <PlayArrow className="icon" />
                  <Add className="icon" />
                  <ThumbUpAltOutlined className="icon" />
                  <ThumbDownOutlined className="icon" />
                </div>
                <div className="itemInfoTop">
                  <span>{movie.duration}</span>
                  <span className="limit">+{movie.limit}</span>
                  <span>{movie.year}</span>
                </div>
                <div className="desc">
                  {movie.desc}
                </div>
                <div className="genre">{movie.genre}</div>
              </div>
            </>
          )}
        </div>
      </Link>
    );
  }
