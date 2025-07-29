import Article from "./Article";

function ArticleList({ blogData, posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} {...post} />
      ))}
    </main>
  );
}

export default ArticleList;
