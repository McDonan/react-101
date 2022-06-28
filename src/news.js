let news = [
  {
    id: 1,
    category_id: 1,
    title: {
      en: 'The readable content of a page when looking at its layout.',
      th: 'แมนชั่นบัลลาสต์ศึกษาศาสตร์ฮากกา เลิฟพาสต้าไงสุริยยาตร์ติว วิกมวลชน',
    },
    image: 'https://source.unsplash.com/random/?news',
    created_at: '2022-02-08T03:19:53.922Z',
    updated_at: '2022-02-08T03:19:53.922Z',
    publish_at: '2023-02-08T03:19:53.922Z',
  },
  {
    id: 2,
    category_id: 2,
    title: {
      en: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
      th: 'ไฮเอนด์แฟลช เพาเวอร์ชัวร์ดีไซน์เนอร์ โฟนโต๊ะจีนพอเพียงเคอร์ฟิวลิสต์ เลดี้ง่าว สโลว์สปอต บึ้ม แฮปปี้ศากยบุตรฟลุตมอนสเตอร์ แฟลชบัลลาสต์คาแรคเตอร์หม่านโถว แหม็บงั้น ตัวเองอิ่มแปร้ เอ็นเตอร์เทน',
    },
    image: 'https://source.unsplash.com/random/?building',
    created_at: '2022-02-08T03:19:53.922Z',
    updated_at: '2022-02-08T03:19:53.922Z',
    publish_at: '2022-02-08T03:19:53.922Z',
  },
  {
    id: 3,
    category_id: 2,
    title: {
      en: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
      th: 'ไยอมรับโปรโมทคอนเฟิร์มผู้นำ แจ็กพ็อตเปราะบางฮัลโหล รองรับ โบว์พุดดิ้ง โปรเจ็กต์ ทัวริสต์ ตุ๊ดเปราะบางตุ๋ย ซามูไรริกเตอร์ดั๊มพ์ แมคเคอเรลอึมครึม ไวอากร้าแจ็กเก็ตเจ๊ภควัมปติ กัมมันตะม้าหินอ่อนเครปตัวตน',
    },
    image: 'https://source.unsplash.com/random/?word',
    created_at: '2022-02-08T03:19:53.922Z',
    updated_at: '2022-02-08T03:19:53.922Z',
    publish_at: '2022-02-08T03:19:53.922Z',
  },
  {
    id: 4,
    category_id: 3,
    title: {
      en: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32',
      th: 'สหัชญาณรีสอร์ทอาว์ว้อดก้า แดรี่ธุหร่ำว้าว สเปก ยอมรับโปรโมทคอนเฟิร์มผู้นำ',
    },
    image: 'https://source.unsplash.com/random/?city',
    created_at: '2022-02-08T03:19:53.922Z',
    updated_at: '2022-02-08T03:19:53.922Z',
    publish_at: '2022-02-08T03:19:53.922Z',
  },
  {
    id: 5,
    category_id: 3,
    title: {
      en: 'Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature',
      th: 'จีดีพีเซอร์แล็บ﻿กรรมาชน แกงค์อีสเตอร์เคลม ต้าอ่วย ทำงาน ซะซากุระมายองเนส แช่แข็งพ่อค้าทอมพาวเวอร์ เพลซ อึ้มนอร์ทธุหร่ำ เจ็ตน็อคบุญคุณ ซิตี้ อัลมอนด์พุทธศตวรรษแอพพริคอทแบล็ครามเทพ กรุ๊ปไมค์ หมั่นโถว เซอร์ไพรส์สตรอเบอรีเยอบีร่าลิสต์ หลวงปู่แคร์ ก๋ากั่นเพียวคอมเมนต์สคริปต์เบิร์น',
    },
    image: 'https://source.unsplash.com/random/?Sydney',
    created_at: '2022-02-08T03:19:53.922Z',
    updated_at: '2022-02-08T03:19:53.922Z',
    publish_at: '2022-02-08T03:19:53.922Z',
  },
]

export function listNews() {
  return news
}

export function createNews(data) {
  const now = new Date()
  data['created_at'] = now
  data['updated_at'] = now
  data['publish_at'] = new Date(data.publish_at)
  data['id'] = news.length + 1
  news.push(data)
}

export function getNews(id) {
  return news.find((elem) => elem.id === id)
}

export function editNews(id, data) {
  const now = new Date()
  data['updated_at'] = now
  news[id - 1] = data
}
