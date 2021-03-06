import axios from "axios";
import React, { useEffect, useState } from "react";

export default function GifCard(props) {
    const { searchType, inputValue, wasClicked } = props
    const [gifs, setGifs] = useState([])

    let apiParams = {
        api_key: "xShr94N7vteaLhkPtg2Kv4e9ZEmkQV8F",
        limit: 200,
    }

    if (searchType === "search") {
        apiParams = {
            ...apiParams,
            q: inputValue
        }
    }

    useEffect(() => {
        console.log(apiParams)
        const fetchData = async () => {
            const apiURL = `https://api.giphy.com/v1/gifs/${searchType}`
            const results = await axios(apiURL, {
                params: apiParams
            });
            setGifs(results.data.data);
        };
        fetchData();
    }, [wasClicked, searchType, inputValue]);

    console.log(gifs);

    return (
        <div className="gifs">
            {gifs.map((gif) => {
                return (
                    <figure key={gif.id} className="gif">
                        <img src={gif.images.fixed_height.url} />
                    </figure>
                )
            })
            }
        </div>
    )
}