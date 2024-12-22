import React, { useRef } from 'react';
import './Timeline.scss';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';
import TimelineItem from '../../molecules/TimelineItem/TimelineItem';

const Timeline = ({ events, loading = false, hasMore = false, onLoadMore }) => {
  const observerTarget = useRef(null);
    
  useInfiniteScroll(observerTarget, onLoadMore);

  return (
    <div className="timeline">
      <div className="timeline__container">
        {events.map((event, index) => (
          <TimelineItem
            key={event.id} 
            event={event}
            isLast={index === events.length - 1}
          />
        ))}
        
        {loading && (
          <div className="timeline__loading">
            <div className="timeline__loading-spinner" />
          </div>
        )}
        
        {hasMore && <div ref={observerTarget} className="timeline__observer" />}
      </div>
    </div>
  );
};

export default Timeline;