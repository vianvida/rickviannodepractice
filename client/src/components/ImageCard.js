import React from 'react';


const ImageCard = () =>{
    return (


            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src="/images/000.png" alt="" className="w-full"/> 
                <div className="px-6 py-4">
                    <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo of me
                    </div>
                    <ul>
                    <li>
                        <strong>Views: </strong> 4000
                        </li>
                        <li>
                        <strong>Downloads: </strong> 300
                        </li>
                        <li>
                        <strong>Likes: </strong> 12
                        </li>
                    </ul>
                </div>
            </div>

    )
}

export default ImageCard;
