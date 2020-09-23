import React from 'react';
import { Link } from 'react-router-dom';

interface ChildComponentProps {
  /* Parent component's props*/ 
  'id'?: string;
  'superhero'?: string;
  'publisher'?: string;
  'alter_ego'?: string;
  'first_appearance'?: string;
  'characters'?: string;
}

export default function HeroCard({
id,
superhero,
alter_ego,
first_appearance,
characters,
}: ChildComponentProps) {
  return (
    <div className="card ms-3" style={{maxWidth: 540}}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={`./assets/${id}.jpg`} className="card-img" alt={`card ${superhero}`}/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">{alter_ego}</p>
          {
            (alter_ego!==characters)
              && <p className="card-text">{characters}</p>
          }
          <p className="card-text">
            <small className="text-muted">{first_appearance}</small>
          </p>
          <Link to={`/hero/${id}`}>
            More...
          </Link>
        </div>
      </div>
    </div>
  );
};
