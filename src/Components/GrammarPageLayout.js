import React from 'react';
import Breadcrumbs from '../Components/Breadcrumb';
import SEO from '../Components/SEO';
import RelatedExercises from '../Utils/relatedExercises';
import ToggleSection from '../Utils/toggleSection';

const GrammarPageLayout = ({
  level,
  title,
  image,
  ExplanationComponent,
  sections,
  seoTitle,
  seoDescription,
  relatedCategory,
  relatedLevel
}) => {
  return (
    <div>
      <SEO title={seoTitle} description={seoDescription} name="Hungarian Exercises" type="article" />
      <Breadcrumbs />
      <div className="grammar-container">

        <div className="grammar-exercise-wrapper">
        <div className="grammartitle">
          <span className={`label label-${level.toLowerCase()}`}>{level}</span>
          <h3 className="mt-2">{title}</h3>
        </div>
        <div className="grammarimage">
          <img src={image} alt={title} />
        </div>
        <div className="grammar-explanation-grid">
          <ExplanationComponent />
        </div>
      
        {sections.map((section, i) => (
          <div className="bottom-margin" key={i}>
          <ToggleSection  {...section} /> </div>
        ))}
   
        <div className="top-margin">
          <RelatedExercises
            currentCategory={relatedCategory}
            currentLevel={relatedLevel}
            currentTitle={title}
          />
        </div>
</div>

      </div>
    </div>
  );
};

export default GrammarPageLayout;
