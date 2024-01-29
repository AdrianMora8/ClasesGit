import { useEffect, useState } from "react";

export const App = () => {

    const [cats, setcats] = useState([]);
    

    const getDataCat = async () => {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search`)
        const resp = await response.json();
        setcats(resp)
    }
    
    useEffect(() => {
        getDataCat()
    }, [])
    
    

    return (
        <div>
            <h1>Gatitos APP</h1>
            <p>Busca los gatitos que quieras</p>


            <button onClick={getDataCat}>buscar puto</button>

            <div>
                {
                    cats.map(({ url }) => (
                        <img
                            key={url}
                            src={url}
                            alt="gatos"
                            style={{
                                height: "200px",
                                width: "200px",
                                objectFit: "cover",
                                marginTop: "20px"
                            }}
                        />
                    ))
                }
            </div>
        </div>
    )
}
