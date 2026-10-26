import ProfileHead from "./ProfileHead";
import ProfileBody from "./ProfileBody";
import ProfileLikeButton from "./ProfileLikeButton";

function Profile() {
  return (
    <article>
      <table border="1" cellPadding="10" cellSpacing="0">
        <caption>Profile</caption>
        <ProfileHead />
        <ProfileBody />
      </table>
      <ProfileLikeButton />
    </article>
  );
}

export default Profile;