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
    // console.log(category_id, category_name);
    const div = document.createElement("div");
    div.innerHTML = `<a onClick="handleLoadNews(${category_id})" class="tab tab-bordered">${category_name}</a>`;
    tabContainer.appendChild(div);
    // console.log(category.category_name);
  });
};

const handleLoadNews = async (categoryId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/0${categoryId}`
  );
  const data = await res.json();

  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = "";

  data.data.forEach((news) => {
    console.log(news);
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="flex gap-5 border m-4 p-4">
        <img class="w-1/4" src="${news?.thumbnail_url}" alt="" />
        <div class="w-3/4 space-y-3">
            <h2 class="text-xl font-semibold">${news?.title}</h2>
            <p class="text-gray-400">${news?.details}</p>
            <div class="flex gap-3">
                <img class="w-12 rounded-full" src="${news?.author?.img}" alt="" />
                <div>
                    <h5>${news?.author?.name}</h5>
                    <p class="text-gray-400">${news?.author?.published_date}</p>
                </div>
            </div>
        </div>
    </div>
  `;
    newsContainer.appendChild(div);
  });

  //   console.log(categoryId);
  //   console.log(data.data);
};

handleClick();
handleLoadNews(1);
