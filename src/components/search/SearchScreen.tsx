import React, {  FormEvent, useMemo } from 'react'
import queryString from 'query-string';
import { RouteComponentProps, useLocation } from 'react-router-dom';
import { History } from 'history';
import HeroCard from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

interface Initial {
  search?: string;
}

interface ChildComponentProps extends RouteComponentProps<any> {
  /* Parent component's props*/
  history: History;
}

export default function SearchScreen({history}: ChildComponentProps) {

  const location = useLocation();
  const {q=''}=  queryString.parse(location.search);

  //@ts-expect-error
  const data: Initial = {search: q!}
  const  { values, handleInputChange } = useForm(data);
  
  //@ts-expect-error
  const heroesFIltered = useMemo(()=>getHeroesByName(q), [q]);
  
  
  const handleSearch =(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    history.push(`?q=${values.search}`);
  }
  
  return (
    <div>
      <h1>Search Screen</h1>
      <hr/>
      <div className="row">
        <div className="col-5">
          <h4>Search for</h4>
          <hr/>
          <form onSubmit={handleSearch}>
            <input 
              type="text"
              name="search"
              placeholder="Find your hero"
              className="form-control"
              autoComplete="off"
              value={values.search}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn n-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr/>
          {
            (q==='') 
              &&
              <div className="alert alert-info">
                Search a hero...
              </div>
          }
          {
            (q!=='' && heroesFIltered.length===0) 
              &&
              <div className="alert alert-danger">
                Hero "{`${values.search}`}" not found
              </div>
          }
          {
            heroesFIltered.map(hero=>(
              <HeroCard 
              key={hero.id}
              {...hero}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
