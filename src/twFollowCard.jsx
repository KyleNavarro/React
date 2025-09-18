import { useState } from "react";

export function TwFollorCard({ userName, name, isFollowing }) {
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-follow-card-button is-following"
    : "tw-follow-card-button";
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
        <button className={buttonClassName}>{text}</button>
      </aside>
    </article>
  );
}

//1:46
