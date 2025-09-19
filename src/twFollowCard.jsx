import { useState } from "react";

export function TwFollorCard({ userName, name, inicialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(inicialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-follow-card-button is-following"
    : "tw-follow-card-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing); //cambia de tru a false (seguir o dejar de seguir)
  };

  return (
    <article className="tw-follow-card">
      <header className="tw-follow-header">
        <img
          className="tw-follow-avatar"
          src={`https://unavatar.io/x/${userName}`}
          alt="foto perfil kyle github"
        />
        <div className="tw-follow-card-info">
          <strong>{name}</strong>
          <span className="tw-follow-card-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
