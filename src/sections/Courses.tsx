import React from 'react';
import { siteConfig } from '../data/siteConfig';

export const Courses = () => {
  return (
    <section id="cursos" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-serif font-bold text-center text-primary-dark mb-16">
          {siteConfig.courses.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.courses.items.map((course, index) => (
            <div key={index} className="p-8 bg-off-white rounded-2xl shadow-sm border border-sage-light hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">{course.title}</h3>
              <p className="text-primary-dark/70 mb-6">{course.description}</p>
              <a 
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all"
              >
                Saiba mais
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
