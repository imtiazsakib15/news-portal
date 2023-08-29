const handleClick = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await res.json();
  const newsCategory = data.data.news_category;
  //   console.log(newsCategory);

  const tabContainer = document.getElementById("tab-container");

  newsCategory.forEach((category) => {
    const { category_id, category_name } = category;
    console.log(category_id, category_name);
    const div = document.createElement("div");
    div.innerHTML = `<a onClick="handleLoadNews(${category.category_id})" class="tab tab-bordered">${category.category_name}</a>`;
    tabContainer.appendChild(div);
    // console.log(category.category_name);
  });
};

const handleLoadNews = async (categoryId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/0${categoryId}`
  );
  const data = await res.json();

  console.log(categoryId);
  console.log(data.data);
};

handleClick();
