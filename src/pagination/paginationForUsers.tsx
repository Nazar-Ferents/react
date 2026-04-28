import {useSearchParams} from "react-router-dom";

const PaginationForUsers = () => {

    const [query, setQuery] = useSearchParams({pg:'1'});
    return (
        <div className='pagination'>
            <button onClick={() =>{
                const pg = query.get('pg')
                if(pg){
                    let currentPage = +pg;
                    if (currentPage > 1){
                        currentPage--;
                        setQuery({pg:currentPage.toString()})}
            }}}>prev</button>

            <button onClick={() => {
                const pg = query.get('pg')
                if(pg){
                    let currentPage = +pg;
                    if (currentPage < 7){
                        currentPage++;
                        setQuery({pg:currentPage.toString()})
                    }

                }
            }}>next</button>
        </div>
    );
};

export default PaginationForUsers;