export function TwFollorCard({ userName, name, isFollowing }) {
  return (
    <article className="tw-follow-card">
      <header className="tw-follow-header">
        <img
          className="tw-follow-avatar"
          src={`"https://unavatar.io/x/${userName}`}
          alt="foto perfil kyle github"
        />
        <div className="tw-follow-card-info">
          <strong>{name}</strong>
          <span className="tw-follow-card-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className="tw-follow-card-button">Seguir</button>
      </aside>
    </article>
  );
}
