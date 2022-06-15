let categories = [
  {
    id: 1,
    name: {
      en: "News",
      th: "ข่าวสาร",
    },
    image: "https://source.unsplash.com/random/?building",
    created_at: "2022-02-08T03:19:53.922Z",
    updated_at: "2022-02-08T03:19:53.922Z",
  },
  {
    id: 2,
    name: {
      en: "Announcement",
      th: "ประกาศ",
    },
    image: "https://source.unsplash.com/random/?building",
    created_at: "2022-02-08T03:19:53.922Z",
    updated_at: "2022-02-08T03:19:53.922Z",
  },
  {
    id: 3,
    name: {
      en: "Notification",
      th: "แจ้งเตือน",
    },
    image: "https://source.unsplash.com/random/?word",
    created_at: "2022-02-08T03:19:53.922Z",
    updated_at: "2022-02-08T03:19:53.922Z",
  },
];

export function listCategories() {
  return categories;
}

export function getCategory(id) {
  return categories.find((elem) => elem.id === id);
}
