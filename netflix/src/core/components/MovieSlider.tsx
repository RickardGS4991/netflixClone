import React, { useEffect, useRef, useState } from 'react'
import { MovieSliderProps } from '../../model/movieSlideProps'
import { useContentStore } from '../store/content';
import { Link } from 'react-router-dom';
import { SMALL_IMG_BASE_URL } from '../utils/constants';
import { ContentType } from '../../model/contentInterface';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { categoryService } from '../../services/moviesAndTv/category';

const MovieSlider  = ({category} : MovieSliderProps) => {
    const {contentType} = useContentStore();
    const [content, setContent] = useState<ContentType[]>();
    const [showArrows, setShowArrows] = useState<boolean>(false);

    const sliderRef = useRef<HTMLDivElement>(null);

    const formattedCategoryName = category.replace("_", " ")[0].toUpperCase() + category.replace("_", " ").slice(1);
    const formattedContentType = contentType === "movie" ? "Movies" : "TV shows";

    useEffect(() => {
      const getContent = async () => {
        try {

          let res = await categoryService(category, 'movies');
          setContent(res);
        } catch (error: any) {
          console.error(`Error al cargar ${category}:`, error.message);
        }
      };
    
      getContent();
    }, [contentType, category]);

    const scrollsLeft = () => {
      if(sliderRef.current){
        sliderRef.current.scrollBy({left:-sliderRef.current.offsetWidth, behavior: 'smooth' });
      }
    };

    const scrollsRight = () => {
      if(sliderRef.current){
        sliderRef.current.scrollBy({left:sliderRef.current.offsetWidth, behavior: 'smooth' });
      }
    };
  return (
    <div className='bg-black text-white relative px-5 md:px-20'
    onMouseEnter={() => {setShowArrows(true)}}
    onMouseLeave={() => setShowArrows(false)}>
      <h2>
        {formattedCategoryName} {formattedContentType}
      </h2>

      <div className='flex space-x-4 overflow-x-scroll scrollbar-hide' ref={sliderRef} >
        { content?.map((item: ContentType) => (
            <Link to={`/watch/${item.id}`} className='min-w-[250px] relative group' key={item.id}>
                <div className='rounded-lg overflow-hidden'>
                    <img src={SMALL_IMG_BASE_URL + item.backdrop_path} alt="Movie image" 
                    className='transition-transform duration-300 ease-in-out group-hover:scale-125'/>

                </div>
                <p className='mt-2 text-center'>{item.title}</p>
            </Link>
        ))}
      </div>

      {showArrows && (
        <>
        <button className='absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center
        size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10'
        onClick={scrollsLeft}>
          <ChevronLeft size={24} />
        </button>

        <button className='absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center
        size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10'
        onClick={scrollsRight}>
          <ChevronRight size={24} />
        </button>
      </>
    )}
    </div>
  )
}

export default MovieSlider
