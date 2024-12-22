
const TimelineContent = ({event, headerRef, contentRef}) => {
  return (
    <div className="timeline-item__content">
        <button 
          ref={headerRef}
          className="timeline-item__header"
          aria-expanded="false"
          aria-controls={`content-${event.id}`}
        >
        <div className="timeline-item__top">
          <time className="timeline-item__date">
            {event.date} {event.event}
          </time>
          <span className="timeline-item__toggle">
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M2 4L6 8L10 4" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
          <h3 className="timeline-item__title">
            {event.description}
          </h3>
        </button>
        <div 
          ref={contentRef}
          id={`content-${event.id}`}
          className="timeline-item__body"
          role="region"
          aria-labelledby={`header-${event.id}`}
        >
          <iframe src={event.image} width={'100%'} title={event.id}/>
        </div>
      </div>
  )
}

export default TimelineContent