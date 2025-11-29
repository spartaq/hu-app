// Hub Data Imports
import HuDialogueHubData from "../Utils/Activities/Data/hub/dialogues_hub.json";
import HuVocabmatchHubData from "../Utils/Activities/Data/hub/vocabmatch_hub.json";
import HuTapAudioHubData from "../Utils/Activities/Data/hub/tapaudio_hub.json";
import HuOrderingHubData from "../Utils/Activities/Data/hub/ordering_hub.json";
import HuAudioWordMatchHubData from "../Utils/Activities/Data/hub/audiowordmatch_hub.json";
import HuImageMatchHubData from "../Utils/Activities/Data/hub/imagematch_hub.json";
import HuQuizHubData from "../Utils/Activities/Data/hub/quiz_hub.json";

// Hub DATA_MAP
const HUB_DATA_MAP = {
  dialogue: {
    hub: HuDialogueHubData
  },
  vocabmatch: {
    hub: HuVocabmatchHubData
  },
  tapaudio: {
    hub: HuTapAudioHubData
  },
  ordering: {
    hub: HuOrderingHubData
  },
  audiowordmatch: {
    hub: HuAudioWordMatchHubData
  },
  imagematch: {
    hub: HuImageMatchHubData
  },
  quiz: {
    hub: HuQuizHubData
  },
};

export default HUB_DATA_MAP;
