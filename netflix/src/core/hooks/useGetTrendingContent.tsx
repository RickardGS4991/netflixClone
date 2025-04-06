import { useEffect, useState } from 'react';
import { useContentStore } from '../store/content';
import { trendingService } from '../../services/moviesAndTv/trending';
import { TrendingModel } from '../../model/trending.model';

function useGetTrendingContent() {
  const [trendingContent, setTrendingContent] = useState<TrendingModel | null>(null);
  const { contentType } = useContentStore();

  useEffect(() => {
    const getTrendingContent = async () => {
      try {
        const response: TrendingModel = await trendingService(contentType);
        
        if (response) {
          setTrendingContent(response);
        }
      } catch (error) {
        console.error("Error getting trending content:", error);
      }
    };
    getTrendingContent();
  }, [contentType]);

  return { trendingContent };
}

export default useGetTrendingContent
