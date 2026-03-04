import type {FC} from 'react';


 type CourseTitleProps = {
    titles:string
}

const TitlesComponents:FC<CourseTitleProps> = ({titles}) => {
    return (


                <li>{titles}</li>




    );
};

export default TitlesComponents;