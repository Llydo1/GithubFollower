import React from "react";
import { useEffect } from "react";

const Follower = ({ login, avatar_url, html_url, url }) => {
  const [follow, setFollower] = React.useState(null);
  useEffect(() => {
    (async () => {
      try {
        const newFollower = await (await fetch(url)).json();
        console.log(newFollower);
      } catch (error) {
        console.log(error);
      } finally {
      }
    })();
  }, []);
  return (
    <article className="card">
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a href={html_url} className="btn">
        view profile
      </a>
    </article>
  );
};

export default Follower;
