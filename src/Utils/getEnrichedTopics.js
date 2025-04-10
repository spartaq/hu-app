import activityFilter from "../Mainpages/Data/activitylist.js";
import videos from "../Mainpages/Listening-Exercises/Data/video.json";

export default function getEnrichedTopics() {
  return activityFilter.map((topic) => {
    if (topic.videoID) {
      const matchingVideo = videos.find((video) => video.topic === topic.videoID);
      return {
        ...topic,
        videoTitle: matchingVideo?.title,
        videoTranscript: matchingVideo?.transcript,
        videoQuestions: matchingVideo?.questions,
        videoVocabulary: matchingVideo?.vocabulary,
      };
    }
    return topic;
  });
}
