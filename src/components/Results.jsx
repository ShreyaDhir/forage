import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useStateContext } from '../contexts/StateContextProvider';
import { Loading } from './Loading';

export const Results = () => {
  const { results, isLoading, getResults, searchTerm } = useStateContext();
  const location = useLocation(); // images, news, videos

  useEffect(() => {
    if (searchTerm !== '') {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`);
      } else {
        getResults(`${location.pathname}/q=${searchTerm}&num=40`);
      }
    }
  }, [searchTerm, location.pathname]);

  console.log(results);
  if(isLoading) return <Loading />;


  switch(location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
            {results?.results?.map(({ link, title }, index) => (
              <div key={index} className="md:w-2/5 w-full">
                <a href={link} target="_blank" rel="noreferrer">
                  <p className="text-sm">{link.length > 30 ? link.subString(0, 30) : link}</p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">{title}</p>
                </a>
              </div>
            ))}
        </div>
      );
    case '/images':
      return 'Images';
    case '/videos':
      return 'VIDEOS';
    default:
      return 'ERROR!';
  }
};
