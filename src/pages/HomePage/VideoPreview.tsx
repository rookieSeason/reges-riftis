import preview from "../../assets/wr_preview.webm";

// Extracted clip-path values for reusability
const VIDEO_CLIP =
  "polygon(30px 0%, 100% 0%, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0% 100%, 0% 30px)";

// Video component extracted for better organization and potential memoization
const VideoPreview = () => (
  <div className="w-full md:w-1/2">
    <video
      src={preview}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="w-full h-auto"
      style={{ clipPath: VIDEO_CLIP }}
    />
    <div className="w-1/2 h-1 bg-sky-900 dark:bg-cyan-500 mt-2" />
  </div>
);

export default VideoPreview;
