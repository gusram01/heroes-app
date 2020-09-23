import React, { useMemo } from 'react';
import { Redirect, RouteComponentProps, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';
import { IHero } from '../../data/heroes';
import { History } from 'history';

interface Params{
  heroId: string
}

interface ChildComponentProps extends RouteComponentProps<any> {
  /* Parent component's props*/
  history: History;
}

export default function HeroeScreen ({history}: ChildComponentProps ){

  const {heroId} = useParams<Params>();

  let hero = useMemo(() => getHeroById(heroId!), [heroId]);

  // let hero = getHeroById(heroId);

  if(!hero){
    return <Redirect to="/"/>
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  }: IHero = hero;

  const handleBack=()=>{
    if(history.length<=2){
      history.replace(`/${publisher.split(' ')[0].toLowerCase()}`);
    }else{
      history.goBack();
    }
  }

  return (
    <div className="row mt-5">
      <div className="col-4"> 
        <img
          src={`/assets/${heroId}.jpg`} 
          alt={superhero}
          className="img-thumbnail"/>
      </div>
      <div className="col-8">
        <h3>
          {superhero}
        </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Alter ego: <b>{alter_ego}</b>
          </li>
          <li className="list-group-item">
            Publisher: <b>{publisher}</b>
          </li>
          <li className="list-group-item">
            First Appearance: <b>{first_appearance}</b>
          </li>
          <h5>Characters</h5>
          <p>
            {characters}
          </p>
          <button 
          className="btn btn-outline-info"
          onClick={handleBack}
          >
            Back
            </button>
        </ul>
      </div>
    </div>
  );
};
