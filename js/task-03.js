const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");
galleryEl.style.margin = 0;
galleryEl.style.padding = 0;
galleryEl.style.listStyle = "none";

function makeMarkup({ url, alt }) {
  return `<li class="gallery-item">
            <img
              src=${url}
              alt=${alt}
              width=400
            />
          </li>`;
}

const markup = images.map(makeMarkup).join("");

galleryEl.insertAdjacentHTML("beforeend", markup);
