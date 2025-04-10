import { useState } from "react";

export default function VideoInputForm() {
  const [video, setVideo] = useState({
    id: "",
    title: "",
    videoId: "",
    topic: "",
    level: "",
    vocabulary: [],
    transcript: [],
    questions: []
  });

  const handleChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleTranscriptChange = (e) => {
    setVideo({ ...video, transcript: e.target.value.split(/\n+/).map(line => line.trim()) });
  };

  const handleArrayChange = (e, field) => {
    setVideo({ ...video, [field]: e.target.value.split(",") });
  };

										 
																							 
	

  const handleQuestionChange = (index, key, value) => {
    const updatedQuestions = [...video.questions];
    updatedQuestions[index][key] = value;
    setVideo({ ...video, questions: updatedQuestions });
  };

  const addQuestion = () => {
    setVideo({
      ...video,
      questions: [...video.questions, { number: "", question: "", choices: [] }],
    });
  };

  const handleChoicesChange = (index, value) => {
    const updatedQuestions = [...video.questions];
    updatedQuestions[index].choices = value.split(",").map(choice => choice.trim());
    setVideo({ ...video, questions: updatedQuestions });
  };

  const downloadJSON = () => {
    const jsonString = JSON.stringify(video, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "video_data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Video Input Form</h1>

      <input type="text" name="id" placeholder="ID" onChange={handleChange} className="border p-2 w-full" />
      <input type="text" name="title" placeholder="Title" onChange={handleChange} className="border p-2 w-full" />
      <input type="text" name="videoId" placeholder="Video ID" onChange={handleChange} className="border p-2 w-full" />
      <input type="text" name="topic" placeholder="Topic" onChange={handleChange} className="border p-2 w-full" />
      <input type="text" name="level" placeholder="Level" onChange={handleChange} className="border p-2 w-full" />

      <input type="text" placeholder="Vocabulary (comma-separated)" onChange={(e) => handleArrayChange(e, "vocabulary")} className="border p-2 w-full" />
      
      <textarea name="transcript" placeholder="Transcript" onChange={handleTranscriptChange} className="border p-2 w-full h-32" />

      <h2 className="text-lg font-semibold">Questions</h2>
      {video.questions.map((q, index) => (
        <div key={index} className="border p-2 rounded space-y-2">
          <input type="text" placeholder="Question Number" value={q.number} onChange={(e) => handleQuestionChange(index, "number", e.target.value)} className="border p-2 w-full" />
          <input type="text" placeholder="Question Text" value={q.question} onChange={(e) => handleQuestionChange(index, "question", e.target.value)} className="border p-2 w-full" />
          <input type="text" placeholder="Choices (comma-separated)" value={q.choices.join(",")} onChange={(e) => handleChoicesChange(index, e.target.value)} className="border p-2 w-full" />
        </div>
      ))}
      
      <button onClick={addQuestion} className="bg-green-500 text-white p-2 rounded">Add Question</button>
      <button onClick={downloadJSON} className="bg-blue-500 text-white p-2 rounded">Download JSON</button>
    </div>
  );
}
