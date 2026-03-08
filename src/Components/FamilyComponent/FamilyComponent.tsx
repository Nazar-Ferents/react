
import './FamilyComponent.css';
import {simpsons} from "../../data/simpsons-array.ts";
import type {ICharacter} from "../../modules/simpsons-module.ts";
import CharacterComponent from "../CharacterComponent/CharacterComponent.tsx";


export const FamilyComponent = () => {
    return (

        <div className="family">


            {
                simpsons.map((character: ICharacter,index:number) => {
                    return <CharacterComponent character={character} key={index}>
                                                   {character.info} </CharacterComponent>
                })
            }

        </div>
    );
};

export default FamilyComponent;