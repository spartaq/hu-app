const TikTokEmbed = () => {
  return (
    <div>
      <blockquote 
        className="tiktok-embed" 
        cite="https://www.tiktok.com/@bbcnews/video/7466832344540843296" 
        data-video-id="7466832344540843296"
        style={{ maxWidth: '605px', minWidth: '325px' }}
      >
        <section>Loading...</section>
      </blockquote>
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>
  );
};

export default TikTokEmbed;

