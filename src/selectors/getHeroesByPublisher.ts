import { heroes } from '../data/heroes';


export const getHeroesByPublisher = (publisher:string)=>{
  const validPublishers = ['DC Comics', 'Marvel Comics'];
  if(!validPublishers.includes(publisher)){
    throw new Error(`Publisher "${publisher}" must be <Marvel Comics | DC Comics>`);
  }
  return heroes.filter(hero=>hero.publisher===publisher);
}
