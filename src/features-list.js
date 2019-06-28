import React from 'react';
import Feature from './feature';

export default function FeaturesList(props) {
  const features = Object.keys(props.features)
  .map(key => {
    return <Feature 
    key={key} 
    id={key} 
    feature={props.features[key]}
    selected={props.selected}
    updateFeature={props.updateFeature} />;
  });

  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
     { features }
    </section>
  );
}


