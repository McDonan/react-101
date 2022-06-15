import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { listCategories } from "../category";
import { editNews, getNews } from "../news";
import { getDate } from "../utils/date";
import logo from "../assets/images/icon.png";

export default function EditNews() {
  let categories = listCategories();
  let navigate = useNavigate();
  let params = useParams();
  let news = getNews(parseInt(params.newsId, 10));

  const [isTH, setIsTH] = useState(true);
  const [enTitle, setENTitle] = useState(news.title.en);
  const [thTitle, setTHTitle] = useState(news.title.th);
  const [categoryID, setcategoryID] = useState(news.category_id);
  const [publishAt, setpublishAt] = useState(news.publish_at);

  let inputs = {
    id: news.id,
    category_id: categoryID,
    title: {
      en: enTitle,
      th: thTitle,
    },
    image: news.image,
    created_at: news.created_at,
    updated_at: news.updated_at,
    publish_at: publishAt,
  };

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
                <li style={{ fontWeight: "bold" }}> แก้ไข</li>
              </ol>
            </nav>
          </div>
          <div className="grid-create">
            <div className="information">
              <label htmlFor="thtile">ชื่อเรื่อง (ภาษาไทย)</label>
              <textarea
                id="th-title"
                name="thtitle"
                value={thTitle}
                onChange={(e) => setTHTitle(e.target.value)}
              />
              <label htmlFor="entitle">ชื่อเรื่อง (ภาษาอังกฤษ)</label>
              <textarea
                id="en-title"
                name="entitle"
                value={enTitle}
                onChange={(e) => setENTitle(e.target.value)}
              />
              <label htmlFor="category_id">หมวดหมู่</label>
              <select
                name="category_id"
                id="category"
                value={categoryID}
                onChange={(e) => setcategoryID(parseInt(e.target.value))}
              >
                {categories.map((elem, i) => (
                  <option value={elem.id} key={i}>
                    {elem.name.th}
                  </option>
                ))}
              </select>
              <label htmlFor="publish_at">วันที่เปิดให้ใช้งาน</label>
              <input
                type="date"
                id="publish"
                name="publish_at"
                value={getDate(publishAt)}
                onChange={(e) => setpublishAt(e.target.value)}
              />
              <nav className="buttons">
                <button
                  id="cancel"
                  onClick={() => {
                    navigate("/news");
                  }}
                >
                  ยกเลิก
                </button>
                <button
                  id="submit"
                  onClick={() => {
                    editNews(news.id, inputs);
                    navigate("/news");
                  }}
                >
                  บันทึก
                </button>
              </nav>
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
