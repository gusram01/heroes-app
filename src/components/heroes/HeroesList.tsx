import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

interface ChildComponentProps  {
  /* Parent component's props*/ 
  'id'?: string;
  'superhero'?: string;
  'publisher'?: string;
  'alter_ego'?: string;
  'first_appearance'?: string;
  'characters'?: string;
}

export default function HeroesList ( {publisher}:ChildComponentProps ) {

  const heroes = useMemo(() => getHeroesByPublisher(publisher!), [publisher]);

  // const heroes = getHeroesByPublisher(publisher!);

  return (
    <div className="card-columns card__fade">
      {
        heroes.map(hero=>(
          <HeroCard
           key={hero.id}
           {...hero}
           />
        ))
      }
    </div>
  );
};
