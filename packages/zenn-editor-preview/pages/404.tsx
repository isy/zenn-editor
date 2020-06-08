import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="error">
      <div className="error-container">
        <h1 className="error-title">😿ページが見つかりませんでした</h1>
        <Link href="/">
          <a href="/" className="error-link">
            トップへ戻る
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;