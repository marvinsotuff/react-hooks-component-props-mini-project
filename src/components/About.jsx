function About({ blogData, image, about }) {
  const image = blogData.image || "https://via.placeholder.com/215";
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
