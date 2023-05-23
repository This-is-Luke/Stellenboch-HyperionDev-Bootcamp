
/*
------------------
like
------------------
*/
document.querySelectorAll(".like-btn").forEach((button) => {
  const article = button.parentElement;
  const articleId = article.querySelector("h2").textContent;
  const likeCount = button.querySelector(".like-count");
  let likes = parseInt(localStorage.getItem(articleId)) || Math.floor(Math.random() * (20000 - 10000 + 1) + 10000); // initialize to a random number between 10000 and 20000
  likeCount.textContent = likes.toString(); // set initial value to the random number

  button.addEventListener("click", () => {
    likes--;
    localStorage.setItem(articleId, likes);
    likeCount.textContent = likes;
  });
});

/*
------------------
save
------------------
*/
document.querySelectorAll('.save-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const article = button.parentElement;
      const articleId = article.querySelector('h2').textContent;
      const articleContent = article.querySelector('p').textContent;
      const savedArticles = JSON.parse(localStorage.getItem('savedArticles') || '[]');
      savedArticles.push({ title: articleId, content: articleContent });
      localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
      alert(`Article "${articleId}" has been saved.`);
    });
  });
   
/*
------------------
saved articles
------------------
*/
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
  displaySavedArticles();
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

function displaySavedArticles() {
    const savedArticlesList = document.querySelector(".saved-articles-list");
    const savedArticlesCount = document.querySelector(".saved-articles-count");
    const savedArticles = JSON.parse(localStorage.getItem("savedArticles") || "[]");
    savedArticlesList.innerHTML = "";
    savedArticles.forEach((article) => {
      const listItem = document.createElement("li");
      listItem.textContent = article.title;
      savedArticlesList.appendChild(listItem);
    });
    savedArticlesCount.textContent = savedArticles.length;
  }
  

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

/*
------------------
form for comments
------------------
*/
const commentsBtns = document.querySelectorAll(".comments-btn");
const commentsModal = document.querySelector(".comments-modal");
const commentsCloseButton = document.querySelector(".comments-close-button");

commentsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    commentsModal.style.display = "block";
  });
});

commentsCloseButton.addEventListener("click", () => {
  commentsModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === commentsModal) {
    commentsModal.style.display = "none";
  }
});
// form listener
const commentForm = document.querySelector(".comment-form");
const commentsDiv = document.querySelector(".comments");

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const commentInput = commentForm.querySelector(".comment-input");
  const commentText = commentInput.value.trim();

  if (commentText) {
    const newComment = document.createElement("p");
    newComment.textContent = commentText;
    commentsDiv.appendChild(newComment);
    commentInput.value = "";
  }
});


/*
------------------
contact modal
------------------
*/
const emailJS = window.emailjs;
emailjs.init("nxCfOms_QKIbLBCN-");
document.addEventListener("DOMContentLoaded", () => {
  const contactModal = document.getElementById("contactModal");
  const contactModalBtn = document.getElementById("contactModalBtn");
  const closeBtn = document.querySelector(".close");
  const contactForm = document.getElementById("contactForm");

  contactModalBtn.addEventListener("click", function () {
    console.log("Opening contact modal");
    contactModal.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    contactModal.style.display = "none";
  });

  window.onclick = function (event) {
    if (event.target == contactModal) {
      contactModal.style.display = "none";
    }
  };

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    emailJS
      .send("service_2gi1ysf", "template_u1iotkr", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(
        (response) => {
          console.log("Email sent successfully", response);
          contactModal.style.display = "none";
          contactForm.reset();
        },
        (error) => {
          console.log("Email failed to send", error);
        }
      );
  });
});

