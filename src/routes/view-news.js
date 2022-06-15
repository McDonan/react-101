import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { getCategory } from "../category";
import { getNews } from "../news";
import { getDate } from "../utils/date";
import logo from "../assets/images/icon.png";

export default function ViewNews() {
  let params = useParams();
  let news = getNews(parseInt(params.newsId, 10));
  const [isTH, setIsTH] = useState(true);

  if (news) {
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
          <div className="breadcrumb">
            <nav>
              <ol>
                <li>
                  {" "}
                  <Link to="/">หน้าแรก</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/news">ข่าวสาร</Link>
                </li>
                <li style={{ fontWeight: "bold" }}> รายละเอียด</li>
              </ol>
            </nav>
          </div>
          <div className="grid-create">
            <div className="information">
              <label htmlFor="th-tile">ชื่อเรื่อง (ภาษาไทย)</label>
              <textarea
                id="th-title"
                name="th-title"
                value={news.title.th}
                disabled
              />
              <label htmlFor="en-title">ชื่อเรื่อง (ภาษาอังกฤษ)</label>
              <textarea
                id="en-title"
                name="en-title"
                value={news.title.en}
                disabled
              />
              <label htmlFor="category">หมวดหมู่</label>
              <input
                type="text"
                name="category"
                id="category"
                value={getCategory(news.category_id).name.th}
                disabled
              />
              <label htmlFor="publish">วันที่เปิดให้ใช้งาน</label>
              <input
                type="date"
                id="publish"
                name="publish"
                value={getDate(news.updated_at)}
                disabled
              />
            </div>
            <img id="image" alt="news" src={news.image} />
          </div>
        </div>
        <div className="clear"></div>
        <div className="footer">
          <p>© สงวนลิขสิทธิ์ ให้กับพี่เพชร และเบลเท่านั้น</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <nav>
        <main style={{ padding: "1rem" }}>
          <h2>404 News Not Found</h2>
        </main>
      </nav>
    </div>
  );
}
