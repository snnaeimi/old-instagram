const posts = [
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const mainContainerEl = document.getElementById("main-container");

for (let i = 0; i < posts.length; i++) {
  let fullcontent = posts[i];
  mainContainerEl.innerHTML += `
    <section id="user-section">
      <div class="user-profile-spec">
        <img
          class="user-avatar"
          id="avatarID"
          src="${fullcontent.avatar}"
          alt="a avatar of ${fullcontent.name}"
        />
        <div class="user-name-desc">
          <h3>${fullcontent.name}</h3>
          <p>${fullcontent.location}</p>
        </div>
      </div>
    </section>

    <section class="image-section" id="image-post-id">
      <img
        class="image-post"
        src="${fullcontent.post}"
        alt="a paint image of ${fullcontent.name}"
      />
    </section>

    <section class="bottom-section">
        <div class="like-comment-dm-container">
          <img
            class="like-icon"
            src="images/icon-heart.png"
            alt="Like image which is a empty heart and when you clicking on it, it will fully red"
          />
          <img
            class="comment-icon"
            src="images/icon-comment.png"
            alt="an icon of comment"
          />
          <img class="dm-icon" src="images/icon-dm.png" alt="an icon of dm" />
        </div>
        <p>${fullcontent.likes} likes</p>

        <div class="post-description">
          <h3>${fullcontent.username}</h3>
          <p>${fullcontent.comment}</p>
        </div>
      </div>
    </section>
`;
}


