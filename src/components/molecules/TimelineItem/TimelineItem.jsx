import React, { useEffect, useRef } from 'react';
import '../../organinsms/TimeLine/Timeline.scss';
import TimelineContent from '../../atoms/TimelineContent/TimelineContent';

const TimelineItem = ({ event, isLast }) => {
  const contentRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const content = contentRef.current;

    const handleClick = () => {
      const isExpanded = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', !isExpanded);
      
      if (!isExpanded) {
        
        content.style.maxHeight = `${content.scrollHeight}px`;
      } else {
        content.style.maxHeight = '0px';
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick();
      }
    };

    header.addEventListener('click', handleClick);
    header.addEventListener('keydown', handleKeyDown);

    return () => {
      header.removeEventListener('click', handleClick);
      header.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="timeline-item">
      {!isLast && <div className="timeline-item__line" />}
      
      <div className="timeline-item__dot">
        <div className={`timeline-item__dot-circle timeline-item__dot-circle--${
          event.status || 'pending'
        }`} />
      </div>

      <TimelineContent event={event} headerRef={headerRef} contentRef={contentRef}/>
    </div>
  );
};

export default TimelineItem;