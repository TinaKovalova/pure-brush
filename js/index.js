const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;
document.documentElement.style.scrollPadding = `${headerHeight/16}rem`;


const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("_show", entry.isIntersecting );
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);

const animatedItems = document.querySelectorAll("._animated");
if (animatedItems.length > 0) {
  animatedItems.forEach((item) => observer.observe(item));
}