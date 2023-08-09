// Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на параграф текст должен меняться на звездочки. На данном этапе делать процесс обратимым при повторном клике необязательно.

document.addEventListener("DOMContentLoaded", function () {
  const paragraphContainer = document.getElementById("paragraphContainer");
  const stringsArray = [
    "This is the first paragraph.",
    "Here is another paragraph.",
    "One more paragraph for the example.",
  ];

  stringsArray.forEach(function (text) {
    const paragraph = document.createElement("p");
    paragraph.classList.add("paragraph");
    paragraph.textContent = text;
    paragraphContainer.appendChild(paragraph);

    paragraph.addEventListener("click", function () {
      if (paragraph.textContent === text) {
        paragraph.textContent = "*".repeat(text.length);
      } else {
        paragraph.textContent = text;
      }
    });
  });
});

// Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.
document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.getElementById("cardContainer");
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  numbers.forEach(function (number) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = number;
    cardContainer.appendChild(card);

    card.addEventListener("click", function () {
      card.classList.toggle("active");
    });
  });
});

// Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active удалялся.
document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.getElementById("cardContainer");
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  numbers.forEach(function (number) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = number;
    cardContainer.appendChild(card);

    card.addEventListener("click", function () {
      card.classList.toggle("active");
    });
  });
});

// В JS объявлен массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере. Так, пользователь, нажимая на маленькие картинки видит их отображение
// в большем размере
document.addEventListener("DOMContentLoaded", function () {
  const thumbnailContainer = document.getElementById("thumbnailContainer");
  const mainImage = document.getElementById("mainImage");

  const imageLinks = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Добавьте ссылки на остальные картинки
  ];

  imageLinks.forEach(function (link) {
    const thumbnail = document.createElement("img");
    thumbnail.classList.add("thumbnail");
    thumbnail.src = link;
    thumbnailContainer.appendChild(thumbnail);

    thumbnail.addEventListener("click", function () {
      mainImage.src = link;
      // Убрать выделение у всех миниатюр и выделить выбранную
      thumbnailContainer
        .querySelectorAll(".thumbnail")
        .forEach(function (item) {
          item.classList.remove("selected");
        });
      thumbnail.classList.add("selected");
    });
  });
});
