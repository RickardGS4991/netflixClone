import React, { useEffect, useState } from 'react'
import { MovieSliderProps } from '../../model/movieSlideProps'
import { useContentStore } from '../store/content';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SMALL_IMG_BASE_URL } from '../utils/constants';
import { ContentType } from '../../model/contentInterface';


const MovieSlider  = ({category} : MovieSliderProps) => {
    const {contentType} = useContentStore();
    const [content, setContent] = useState<ContentType[]>();

    const formattedCategoryName = category.replace("_", " ")[0].toUpperCase() + category.replace("_", " ").slice(1);
    const formattedContentType = contentType === "movies" ? "Movies" : "TV shows";

    useEffect( () => {
        const getContent = async ()=> {
            const res = await axios.get(`/api/v1/${contentType}/${category}`)
            setContent(res.data.content);
        }

        getContent();
    }, [contentType, category]);
  return (
    <div className='bg-black text-white relative px-5 md:px-20'>
      <h2>
        {formattedCategoryName} {formattedContentType}
      </h2>

      <div className='flex space-x-4 overflow-x-scroll'>
        { content?.map((item: ContentType) => (
            <Link to={`/watch/${item.id}`} className='min-w-[250px] relative group' key={item.id}>
                <div className='rounded-lg overflow-hidden'>
                    <img src={SMALL_IMG_BASE_URL + item.backdrop_path} alt="Movie image" 
                    className='transition-transform duration-300 ease-in-out group-hover:scale-125'/>

                </div>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default MovieSlider
