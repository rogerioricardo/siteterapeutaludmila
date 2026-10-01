import React from 'react';
import { siteConfig } from '../data/siteConfig';

export const Media = () => {
  return (
    <section id="midia" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-primary-dark mb-12">
          {siteConfig.media.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.media.videos.map((video, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h3 className="text-xl font-serif font-semibold text-primary-dark">
                {video.title}
              </h3>
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
