import { Outlet, Link } from "react-router-dom";
import { getCategory, listCategories } from "../category";
import { listNews } from "../news";
import logo from "../assets/images/icon.png";
import "../styles.css";
import { useState } from "react";
import { getDateTime } from "../utils/date";

export default function ListNews() {
  let categories = listCategories();
  let allNews = listNews();
  const [news, setNews] = useState(allNews);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState(0);
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
        <div className="breadcrumb">
          <nav>
            <ol>
              <li>
                {" "}
                <Link to="/">หน้าแรก</Link>
              </li>
              <li style={{ fontWeight: "bold" }}> ข่าวสาร</li>
            </ol>
          </nav>
        </div>
        <div className="grid-container">
          <p className="subject">ชื่อเรื่อง</p>
          <div></div>
          <p className="subject">หมวดหมู่</p>
          <div></div>
          <div></div>
          <input
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            type="text"
            id="title"
            name="title"
          />
          <div></div>
          <select
            name="categories"
            id="categories"
            value={category}
            onChange={(event) => {
              setCategory(parseInt(event.target.value));
            }}
          >
            <option value={0}>ทั้งหมด</option>
            {categories.map((elem, i) => (
              <option value={elem.id} key={i}>
                {elem.name.th}
              </option>
            ))}
          </select>
          <div></div>
          <button
            id="search"
            onClick={() => {
              let newsList = allNews;
              if (searchText || category) {
                if (searchText) {
                  newsList = newsList.filter((data) => {
                    let title = data.title.th;
                    return title.includes(searchText);
                  });
                }
                if (category) {
                  newsList = newsList.filter((data) => {
                    return data.category_id === category;
                  });
                }
              }
              setNews(newsList);
            }}
          >
            ค้นหา
          </button>
        </div>
        <nav id="new-news">
          <Link to={`/news/create`}>+ สร้างข่าวสาร</Link>
        </nav>
        <table cellSpacing="0">
          <thead>
            <tr>
              <th> </th>
              <th id="column2">ชื่อเรื่อง</th>
              <th id="column3">หมวดหมู่</th>
              <th id="column4">วันที่แก้ไข</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {news.map((elem, i) => (
              <tr key={`row${i}`}>
                <td id="column1">{elem.id}</td>
                <td>{elem.title.th}</td>
                <td>{getCategory(elem.category_id).name.th}</td>
                <td>{getDateTime(elem.updated_at)}</td>
                <td id="column5">
                  <nav key={`${i}`}>
                    <Link to={`/news/${elem.id}/edit`}>
                      <div className="link">แก้ไข</div>
                    </Link>
                    <Link to={`/news/${elem.id}`}>
                      <div className="link">ดูรายละเอียด</div>
                    </Link>
                  </nav>
                </td>
              </tr>
            ))}
          </tbody>
          <Outlet />
        </table>
      </div>
      <div className="clear"></div>
      <div className="footer">
        <p>© สงวนลิขสิทธิ์ ให้กับพี่เพชร และเบลเท่านั้น</p>
      </div>
    </div>
  );
}
