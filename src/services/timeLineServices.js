const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const generateMockEvents = (page, limit) => {
  const events = [];
  const startIndex = page * limit;
  
  for (let i = 0; i < limit; i++) {
    
    const date = new Date("December 1, 2024 01:15:00");
    date.setDate(date.getDate() + (startIndex + i));
    const formatDate = date.toLocaleDateString('en-US', { 
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    events.push({
      id: `event-${startIndex + i}`,
      date: formatDate,
      event: formatDate === 'December 1, 2024' ? 'myautoIQ nurturing starts':formatDate === 'December 30, 2024' ?'Jill bought 2024 Honda Civic EX' :'Jill came as a showroom-up lead for 2024 Honda Civic EX',
      description: 'Buyer profile target - New or like-new Honda Civic, Budget - $20-25K, reliability shopper, mid-funnel buyer likely to buy in 120-150 days',
      image:`/assets/record${Math.floor(Math.random() * 3) + 1}.html`
    });
  }
  
  return events;
};

export const fetchTimelineEvents = async (page, limit = 5) => {
  await delay(1000); 
  const events = generateMockEvents(page, limit);
  const hasMore = page < 5; 
  
  return {
    events,
    hasMore,
  };
};