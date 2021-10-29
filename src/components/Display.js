import React from 'react'; 

function Display ({
    aWord, 
    pos, 
    definition, 
    gifUrl,
}) {
    return(
        <section className="displayBox">
            <div className="Wrapper">
                <div className="wordWrapper">
                <h1 className="word">
                    {aWord}
                </h1>

                <p className="POS">
                    {pos}
                </p>
                </div>

                <p className="definition">
                 {definition}
                </p> 
                
                <div className="imageWrapper">
                    <img src={gifUrl} alt={aWord} className="gif"/>
                </div>
            </div>
        </section>
    )
}

export default Display; 