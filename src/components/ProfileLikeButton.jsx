import { useState } from "react";

function ProfileLikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      type="button"
      aria-pressed={liked}
      onClick={() => setLiked((previousLiked) => !previousLiked)}
    >
      {liked ? "Un-Like" : "Like"} profile
    </button>
  );
}

export default ProfileLikeButton;
