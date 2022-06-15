import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { listNews } from "./news";
import banner from "./assets/images/banner.png";
import logo from "./assets/images/icon.png";
import news from "./assets/images/workplace.png";
import "./App.css";
import "./styles.css";

export default function App() {
  let newsList = listNews();
  const [isTH, setIsTH] = useState(true);

  return (
    <div>
      <div className="body">
        <div className="header">
          <img className="logo" src={logo} alt="logo"></img>
          <div className="language">
            <div
              id="th"
              style={{ fontWeight: isTH ? "bold" : "normal" }}
              onClick={() => setIsTH(true)}
            >
              TH
            </div>
            <div style={{ padding: "0 5px" }}> | </div>
            <div
              id="en"
              style={{ fontWeight: isTH ? "normal" : "bold" }}
              onClick={() => setIsTH(false)}
            >
              EN
            </div>
          </div>
        </div>
        <img className="banner" src={banner} alt="banner"></img>
        <div className="news">
          <p
            style={{ textAlign: "left", fontWeight: "bold", fontSize: "24px" }}
          >
            ข่าวสาร
          </p>
          <nav>
            <Link to="/news">
              <span className="view-all">ดูทั้งหมด</span>
            </Link>
          </nav>
        </div>
        <div id="news">
          <nav>
            {newsList.slice(0, 4).map((elem, i) => (
              <Link to={`/news/${elem.id}`} key={i}>
                <div className="container">
                  <img id="news1" src={news} alt="news"></img>
                  <div className="bottom-left">{elem.title.th}</div>
                </div>
              </Link>
            ))}
          </nav>
        </div>
        <Outlet />
      </div>
      <div className="clear"></div>
      <div className="footer">
        <p>© สงวนลิขสิทธิ์ ให้กับพี่เพชร และเบลเท่านั้น</p>
      </div>
    </div>
  );
}
