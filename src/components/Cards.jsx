import Card from './Card';
import './Cards.css'

export default function Cards({characters}) {
   return (
      <div className='cards-container'>
         {
            characters.map((character) => (
            <Card
            name={character.name} 
            key={character.id}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin?.name}
            image={character.image}
            onClose={character.onClose}
            />))
         }
      </div>
   )
}
