import { useState } from "react";           

function Profile({ }) {
  const [liked, setLiked] = useState(false);

  return (
    <article>
      <table border="1" cellPadding="10" cellSpacing="0">
        <caption>Profile</caption>
        <thead>
          <tr>
            <th colSpan="2" scope="colgroup">
              <strong>Laiden</strong>
              <br />
              Web Developer
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Email</th>
            <td>
              <a href="mailto:yourname@example.com">
                Laiden@gmail.com
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">Location</th>
            <td>Kuala Lumpur, Malaysia</td>
          </tr>
          <tr>
            <th scope="row">Skills</th>
            <td>React, JavaScript, CSS, Vite</td>
          </tr>
        </tbody>
      </table>
        <button
              type="button"
              aria-pressed={liked}
              onClick={() => setLiked((previousLiked) => !previousLiked)}
            >
          {liked ? "Liked" : "Like"} profile
        </button>
    </article>
  );
}

export default Profile;