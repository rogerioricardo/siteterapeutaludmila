import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Popup } from '../components/Popup';

export const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<{ title: string; details: string } | null>(null);

  return (
    <section id="cursos" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-serif font-bold text-center text-primary-dark mb-16">
          {siteConfig.courses.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.courses.items.map((course: any, index: number) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl shadow-sm border border-sage-light hover:shadow-md transition-shadow ${course.backgroundImage ? 'relative overflow-hidden' : 'bg-off-white'}`}
            >
              {course.backgroundImage && (
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${course.backgroundImage})` }}
                >
                  <div className="absolute inset-0 bg-white/80" />
                </div>
              )}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-primary-dark mb-4">{course.title}</h3>
                <p className="text-primary-dark/70 mb-6">{course.description}</p>
                {course.details ? (
                  <button
                    onClick={() => setSelectedCourse({ title: course.title, details: course.details })}
                    className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all"
                  >
                    Saiba mais
                  </button>
                ) : (
                  <a 
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all"
                  >
                    Saiba mais
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Popup 
        isOpen={!!selectedCourse} 
        onClose={() => setSelectedCourse(null)} 
        title={selectedCourse?.title || ''} 
        content={selectedCourse?.details || ''} 
      />
    </section>
  );
};
