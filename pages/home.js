import "./home.scss";
import { users } from "./users";

export const home = () => {
  const wrapper = document.createElement("section");
  wrapper.classList = "home";
  const title = document.createElement("h1");
  title.innerHTML = "Welcome to Parcel Bundler Demo";
  title.classList = "title";
  const ul = document.createElement("ul");
  ul.classList = "users";
  //Create a loader element
  const loader = document.createElement("div");
  loader.innerHTML = "Loading...";
  loader.classList = "loader";
  wrapper.appendChild(loader); // add the loader to home wrapper element

  users().then(({ results }) => {
    loader.style.display = "none"; // hide loader when users are available from the API.
    results.forEach(user => {
      const li = document.createElement("li");
      li.classList = "user";
      //create User Avatar element
      const userAvatar = document.createElement("img");
      userAvatar.setAttribute("src", user.picture.thumbnail);
      userAvatar.classList = "userAvatar";
      li.appendChild(userAvatar); // append user avatar to the list
      //Create user details element
      const userDetails = document.createElement("div");
      userDetails.classList = "user-details";
      //user's name element
      const userName = document.createElement("div");
      userName.classList = "user-name";
      userName.innerHTML = `${capitalize(user.name.title)} ${capitalize(
        user.name.first
      )} ${capitalize(user.name.last)}`; //assign name to user's name element
      userDetails.appendChild(userName); // append it to userdetail element
      //Create user's email address element
      const userEmail = document.createElement("div");
      userEmail.classList = "user-email";
      userEmail.innerHTML = `${user.email}`; //assign email address to user's email address element
      userDetails.appendChild(userEmail); //append it to userdetail element
      li.appendChild(userDetails); //append userdetail element to the list
      ul.appendChild(li); // append the list to parent element ul
    });
  });

  wrapper.appendChild(title);
  wrapper.appendChild(ul);

  return wrapper;
};

//Accept a string and return the string in capitalize format
const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
