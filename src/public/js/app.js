const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

;
});

const profileText = document.querySelector(".profile-text");
const item = document.querySelector(".profile-dropdown");

profileText.addEventListener("click", (event) => {
  item.classList.toggle("dropdown-active");
  event.stopPropagation(); // Ngăn chặn sự kiện click từ việc lan ra ngoài
  console.log(1)
});

document.addEventListener("click", (event) => {
  const isClickInsideItem = item.contains(event.target);
  const isClickOnProfileText = event.target === profileText;
  if (!isClickInsideItem && !isClickOnProfileText) {
    item.classList.add("dropdown-active");
  }
});


const admin = 0;
if(admin) {
  item.innerHTML = '<ul> <li> <a href="">Thông tin</a></li> <li><a href="">Quản lí</a></li> <li> <a href="">Đăng xuất</a></li></ul>'
}



// const menuItems = document.querySelectorAll('.menu-list-item');
// console.log(menuItems)
// // Bắt sự kiện click trên mỗi mục trong menu
// menuItems.forEach(item => {
//     item.addEventListener('click', function(event) {
//         // Loại bỏ lớp active từ tất cả các mục
//         menuItems.forEach(item => {
//             item.classList.remove('active');
//         });

//         // Thêm lớp active cho mục được nhấp
//         this.classList.add('active');
//     });
// });
