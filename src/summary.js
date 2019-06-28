import React from 'react';
import SummaryItem from './summary-item';

export default function Summary(props) {
  const summary = Object.keys(props.selected)
  .map(key => {
    return <SummaryItem key={key} id={key} selected={props.selected} />
  })

  const total = Object.keys(props.selected)
    .reduce((acc, curr) => acc + props.selected[curr].cost, 0);  

  return (
    <section className="main__summary">
      <h3>NEW GREENLEAF 2018</h3>
      {summary}
      <div className="summary__total">
        <div className="summary__total__label">Your Price: </div>
        <div className="summary__total__value">
          { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
          .format(total) }
        </div>
      </div>
    </section>
  );
}



  

// )

