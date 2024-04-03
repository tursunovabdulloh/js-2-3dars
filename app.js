let arr = [
  {
    name: "iphone 15",
    price: 1400,
    imgSrc:
      "https://files.vgtimes.ru/posts/2023-09/1694083913_f5amwflwgaacj8e.jpg",
    color: "white",
  },
  {
    name: "iphone 14",
    price: 1200,
    imgSrc:
      "https://g2z7g2s8.rocketcdn.me/en/wp-content/uploads/2022/12/iphone-14-pro-save-battery.webp",
    color: "darkorchid",
  },
  {
    name: "iphone 13",
    price: 1000,
    imgSrc:
      "https://content.onliner.by/news/1400x5616/93d85223800a75d6d5512070538d576f.jpeg",
    color: "blue",
  },
  {
    name: "iphone 12",
    price: 800,
    imgSrc: "https://thesun.co.uk/wp-content/uploads/2020/11/IMG_0349.jpg",
    color: "black",
  },
];
let arr_2 = [
  {
    name: "smart tv",
    price: 800,
    imgSrc: "https://images.uzum.uz/co169p6pom4ma10quvo0/original.jpg",
    color: "black",
  },
  {
    name: "wise kolonka",
    price: 250,
    imgSrc: "https://images.uzum.uz/cmn781925ku8ad8ibpq0/original.jpg",
    color: "coral",
  },
  {
    name: "gamers headset",
    price: 200,
    imgSrc: "https://images.uzum.uz/cmogb41s99ouqbfrpne0/original.jpg",
    color: "red",
  },
  {
    name: "cafecar",
    price: 500,
    imgSrc: "https://images.uzum.uz/cnletudbl7rtgkb9f17g/original.jpg",
    color: "black",
  },
];
let productslist = document.querySelector("#productslist"); // html  dagi ul ni chaqirdik u bu yerga object lo'rinishida keladi
// 1-usul
arr.forEach(({ name, price, imgSrc, color }) => {
  productslist.innerHTML += `<li class="list-item">
    <a href=${imgSrc} style='text-decoration: none;' target = '_blank'>
    <img src="${imgSrc}" alt="" width = "300" height = "300" />
    <h2>${name}</h2>
    <p>${price}</p>
    <span style ='background: ${color};' class="color"></span>
       </a>
    </li>`;
});

// 2-usul
arr_2.forEach(({ name, price, imgSrc, color }) => {
  let li = document.createElement("li"); // --- li - degan tag yaratdik
  li.classList.add("list-item"); // --- endi li ga class berdik

  li.innerHTML += ` <a href=${imgSrc} style='text-decoration: none;' target = '_blank'>
    <img src="${imgSrc}" alt=""  width ='300' />
    <h2>${name}</h2>
    <p>${price}</p>
    <span style ='background: ${color};' class="color"></span>
       </a>`;
  productslist.append(li); /// -- bu yerda pruduct listimizga li qo'shdik append appendchild objjectning qo'shish methodi
});
