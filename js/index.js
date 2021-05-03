const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

const links = document.querySelectorAll("a");
const navImage = document.querySelector(" .logo");
const ctaH1 = document.querySelector(".cta h1");
const ctaButton = document.querySelector(".cta button");
const ctaImg = document.querySelector("#cta-img");
const info = document.querySelectorAll(".text-content p");
const infoArray = Array.from(info);
const textContent = document.querySelectorAll(".text-content h4");
const textContentArray = Array.from(textContent);
const textContentPara = document.querySelectorAll(".text-content p");
const middleImg = document.querySelector("#middle-img");
const contactH4 = document.querySelector(".contact h4");
const contactPara = document.querySelectorAll(".contact p");
const contactParaArray = Array.from(contactPara);
//console.log(textContentArray.innerHTML);
//console.log(infoArray);
console.log(links);

links.forEach((link, index) => {
  console.log(link);
  index++;
  link.textContent = siteContent.nav[`nav-item-${index}`];
});

navImage.src = "img/logo.png";

ctaH1.innerHTML = "DOM IS AWESOME";
ctaButton.textContent = "Get Started";
ctaImg.src = "img/header-img.png";

textContentArray.forEach((item, index) => {
  //console.log(item, index);
  let itemTitle = siteContent.nav[`nav-item-${index}`];
  //console.log(itemTitle);
});

console.log(infoArray);
infoArray.forEach((item, index) => {
  index++;
  let itemTitle = siteContent.nav[`nav-item-${index}`].toLowerCase();
  console.log(itemTitle.toLowerCase());
  item.textContent =
    siteContent["main-content"][`${itemTitle.toLowerCase()}-content`];
});

textContent[0].textContent = "Features";
textContent[1].textContent = "About";

middleImg.src = "img/mid-page-accent.jpg";

textContent[2].textContent = "Services";
textContent[3].textContent = "Product";
textContent[4].textContent = "Vision";

contactH4.textContent = "Contact";

contactParaArray.forEach(function (para, index) {
  console.log(para, index);

  para.textContent = siteContent.contact;
});

// contactPara[0].textContent = siteContent["contact"].address;
// contactPara[1].textContent = siteContent["contact"].email;
// contactPara[2].textContent = siteContent["contact"].phone;

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
