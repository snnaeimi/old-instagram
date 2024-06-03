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

const userID = document.getElementById("user-section");
const imgPostID = document.getElementById("image-post-id");

for (let i = 0; i < posts.length; i++) {
  let fullcontent = posts[i];
  userID.innerHTML += `
  <div class="user-profile-spec">
  <img
    class="user-avatar"
    id="avatarID"
    src="${fullcontent.avatar}"
    
  />
  <div class="user-name-desc">
    <h3>${fullcontent.name}</h3>
    <p>${fullcontent.location}</p>
  </div>
</div>`;
}

for (let i = 0; i < posts.length; i++) {
  imgPostID.innerHTML += `<img
class="image-post"
src="${posts[i].post}"
/>`;
}
