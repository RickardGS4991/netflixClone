import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContentStore } from '../core/store/content';
import axios from 'axios';
import Navbar from '../core/components/Navbar';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function WatchPage() {
    const { id } = useParams();
    const [trailers, setTrailers] = useState([]);
    const [currentTrailerIdx, setCurrentTrailers] = useState(0);
    const [loading, setLoading] = useState(true);
    const [ content, setContent ] = useState({});
    const [ similarContent, setSimilarContent ] =  useState([]);
    const { contentType } = useContentStore();

    useEffect( () => {
        const getTrailers = async () => {
            try {
                const res = await axios.get(`/api/v1/${contentType}/${id}/trailers`);
                setTrailers(res.data.trailers);
            } catch (error) {
                setTrailers([]);
            }
        }

        getTrailers();
    }, [contentType,id]);

    useEffect( () => {
        const getSmilarContent = async () => {
            try {
                const res = await axios.get(`/api/v1/${contentType}/${id}/similar`);
                setSimilarContent(res.data.similar);
            } catch (error) {
                setSimilarContent([]);
            }
        }

        getSmilarContent();
    }, [contentType,id]);

    useEffect( () => {
        const getMovieDetails = async () => {
            try {
                const res = await axios.get(`/api/v1/${contentType}/${id}/details`);
                setContent(res.data.content);
            } catch (error) {
                setContent([]);
            } finally {
                setLoading(false);
            }
        }

        getMovieDetails();
    }, [contentType,id]);

  return (
    <div className='bg-black min-h-screen text-white'>
        <div className='mx-auth container px-4 py-8 h-full'>
            <Navbar />

            {Array.isArray(trailers) && trailers.length > 0 && (
                <div className='flex justify-between items-center mb-4'>
                    <button
                        className={`bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded ${
                            currentTrailerIdx === 0 ? 'cursor-not-allowed bg-opacity-35' : ''
                            }`}
                        disabled={currentTrailerIdx === 0}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        className={`bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded ${
                            currentTrailerIdx === trailers.length - 1 ? 'cursor-not-allowed opacity-50' : ''
                            }`}
                        disabled={currentTrailerIdx === trailers.length - 1}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            )}
        </div>
      
    </div>
  )
}

export default WatchPage
