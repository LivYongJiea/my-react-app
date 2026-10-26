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
              <strong>Alex Johnson</strong>
              <br />
              Frontend Developer
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Email</th>
            <td>
              <a href="mailto:alex.johnson@example.com">
                alex.johnson@example.com
              </a>
            </td>
          </tr>
          <tr>
            <th scope="row">Location</th>
            <td>San Francisco, CA</td>
          </tr>
          <tr>
            <th scope="row">Skills</th>
            <td>JavaScript, React, HTML</td>
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