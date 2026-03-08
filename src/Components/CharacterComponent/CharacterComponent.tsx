import type {FC, ReactNode} from 'react';
import './CharacterComponent.css'
import type {ICharacter} from "../../modules/simpsons-module.ts";

type CharacterComponentType = {
    character: ICharacter;
    children: ReactNode;
}

const CharacterComponent:FC<CharacterComponentType> = ({character,children}) => {
    return (
        <div className='character'>

            <h2>{character.name} {character.surname}</h2>
            <p>age: {character.age}</p>
            <p className='description'>About: {children}</p>
            <img src={character.photo} alt={character.name}/>
        </div>
    );
};

export default CharacterComponent;