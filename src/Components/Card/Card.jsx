export default function Card(props) {
  const { username, createdAt, author, favoritesCount, title, body } = props;
  const imageUrl = author.image;
  return (
    <>
      <header>
        <div className="avatar">
          <img src={imageUrl} alt="" />
          <div className="alias-data">
            <h4>{username}</h4>
            <p>{createdAt}</p>
          </div>
        </div>
        <div className="favorited">
          <button>{favoritesCount}</button>
        </div>
      </header>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </>
  );
}
