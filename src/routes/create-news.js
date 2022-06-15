import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { listCategories } from "../category";
import logo from "../assets/images/icon.png";
import { createNews } from "../news";

export default function EditNews() {
  let categories = listCategories();
  let navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [isTH, setIsTH] = useState(true);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "thtitle") {
      name = "title";
      value = { th: value };
    }

    if (name === "entitle") {
      name = "title";
      value = { ...inputs[name], en: value };
    }

    if (name === "category_id") {
      value = parseInt(value);
    }
    setInputs((values) => ({ ...values, [name]: value }));
  };

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
              <li style={{ fontWeight: "bold" }}> เพิ่ม</li>
            </ol>
          </nav>
        </div>
        <div className="grid-create">
          <div className="information">
            <label htmlFor="thtile">ชื่อเรื่อง (ภาษาไทย)</label>
            <textarea id="th-title" name="thtitle" onChange={handleChange} />
            <label htmlFor="entitle">ชื่อเรื่อง (ภาษาอังกฤษ)</label>
            <textarea id="en-title" name="entitle" onChange={handleChange} />
            <label htmlFor="category">หมวดหมู่</label>
            <select
              name="category_id"
              id="categories"
              defaultValue={""}
              onChange={handleChange}
            >
              <option value="" disabled>
                ทั้งหมด
              </option>
              {categories.map((elem, i) => (
                <option value={i + 1} key={i}>
                  {elem.name.th}
                </option>
              ))}
            </select>
            <label htmlFor="publish_at">วันที่เปิดให้ใช้งาน</label>
            <input
              type="date"
              id="publish"
              name="publish_at"
              onChange={handleChange}
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
                  createNews(inputs);
                  navigate("/news");
                }}
              >
                บันทึก
              </button>
            </nav>
          </div>
          <div id="avatar-div">
            <br />
            <br />
            <br />
            <br />
            <br />
            <input
              type="file"
              id="avatar"
              name="image"
              accept="image/png, image/jpeg"
            />
            <label htmlFor="avatar">+</label>
          </div>
        </div>
      </div>
      <div className="clear"></div>
      <div className="footer">
        <p>© สงวนลิขสิทธิ์ ให้กับพี่เพชร และเบลเท่านั้น</p>
      </div>
    </div>
  );
}
