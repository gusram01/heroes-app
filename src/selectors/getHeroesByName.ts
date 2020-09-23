import {heroes} from '../data/heroes';

export const getHeroesByName = (name: string)=>{

  if(name === ''){
    return [];
  }
  name= name.toLocaleLowerCase();
  return heroes.filter(hero => 
    hero.superhero.toLowerCase().includes(name));
}