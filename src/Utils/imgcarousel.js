import React, { useState, useEffect } from 'react';
import { Carousel, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagesData from '../Mainpages/Vocabulary-Exercises/Data/vocabimages.json';

const ImageCarousel = ({ topic }) => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [autoplay, setAutoplay] = useState(true);

  // On mount, set topic from prop if available
  useEffect(() => {
    if (topic) {
      setSelectedTopic(topic);
    }
  }, [topic]);

  // Extract unique topics
  const topics = [...new Set(imagesData.map(image => image.topic))];

  // Filter images based on selectedTopic
  const filteredImages = selectedTopic
    ? imagesData.filter(image => image.topic === selectedTopic)
    : imagesData;

  return (
    <div>
      {/* Show topic selector only if no topic prop is passed */}
      {!topic && (
        <div>
          <label>Select Topic: </label>
          <select
            onChange={(e) => setSelectedTopic(e.target.value)}
            value={selectedTopic}
          >
            <option value="">All Topics</option>
            {topics.map((topic, index) => (
              <option key={index} value={topic}>{topic}</option>
            ))}
          </select>
        </div>
      )}

      <div className="imgcarousel">
        <Form.Check
          type="switch"
          id="autoplay-switch"
          label="Autoplay"
          checked={autoplay}
          onChange={() => setAutoplay(!autoplay)}
        />

        <Carousel
          controls
          indicators={false}
          interval={autoplay ? 3000 : null}
        >
          {filteredImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block"
                src={`/Images/${image.src}`}
                alt={image.alt || `Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;
