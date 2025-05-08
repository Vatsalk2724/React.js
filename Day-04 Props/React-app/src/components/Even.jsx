export const Even = ({even}) => {

    return (


        <div>
        <h2>Even Number</h2>
        <ul>
            {even.map((val,index) => (
            
                <li key={index} > value={val}</li>
            

        ))}</ul>
        
        </div>




    )


}