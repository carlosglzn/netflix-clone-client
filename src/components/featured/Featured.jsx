
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({ type, setGenre }) {


  return (
    <div className="featured">
      {type && (
        <div className="category">
        </div>
      )}
      <img
        src={"https://ramaporampage.org/wp-content/uploads/2021/03/Screen-Shot-2021-03-10-at-12.31.50-PM.png"}
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABcKrFBGTCBvScMtWc-og890uVGAY17bX1Ubji7aF45di0ImJWVrTpv3uMzv7A_Ka113nAT8MKrcF7NbCgmlsZuXrWapkT68Qoq9B92KjEGxv_l-OTBIwV5t5DjxFPn9AaiB18Bsh76OyFJaNdJKWOKK9xWR9kQllQ_qMx9_dKO_QsA.png?r=a7f"
          alt=""
        />
        <span className="desc">
        Welcome to Carlos Gonzalez's Ironhack project.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
