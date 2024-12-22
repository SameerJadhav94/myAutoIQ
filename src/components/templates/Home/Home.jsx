import { useCallback, useEffect, useState } from "react";
import { fetchTimelineEvents } from "../../../services/timeLineServices";
import CustomerHeader from "../../atoms/CustomerHeader/CustomerHeader";
import LeadCards from "../../molecules/LeadCards/LeadCards";
import Timeline from "../../organinsms/TimeLine/TimeLine";
import "./Home.scss"
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const customerData = {
    name: 'Jill Jones',
    email: 'jill@gmail.com',
    leads: [
      {
        type: 'Original',
        source: 'CarGurus',
        leadIn: '30th January 2024',
        vehicle: '2023 Honda Civic',
        status: 'Lost',
        active: true
      },
      {
        type: 'Revival',
        source: 'Walk In',
        leadIn: '23rd October 2024',
        vehicle: '2024 Honda Civic',
        status: 'Sold',
        active: true
      }
    ],
    timeline: [
      {
        date: '1st March 2024',
        event: 'myautoIQ nurturing starts',
        description: 'Buyer profile target - New or like-new Honda Civic, Budget - $20-25K, reliability shopper, mid-funnel buyer likely to buy in 120-150 days'
      },
      {
        date: '23rd October 2024',
        event: 'Lead In',
        description: 'Jill came as a showroom-up lead for 2024 Honda Civic EX'
      },
      {
        date: '23rd June 2024',
        event: 'SOLD',
        description: 'Jill bought 2024 Honda Civic EX'
      }
    ]
  };
  const [page, setPage] = useState(0);
  const [allEvents, setAllEvents] = useState([]);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['timeline', page],
    queryFn: () => fetchTimelineEvents(page),
  });

  // Update allEvents when data changes
  useEffect(() => {
    if (data?.events) {
      setAllEvents(prev => [...prev, ...data.events]);
    }
  }, [data]);

  const loadMore = useCallback(() => {
    if (!isFetching && data?.hasMore) {
      setPage(prev => prev + 1);
    }
  }, [isFetching, data?.hasMore]);

  return (
    <main className="container">
      <CustomerHeader name={customerData.name} email={customerData.email}/>
      <LeadCards leads={customerData.leads}/>
      <div className="timeline-page">
      <div className="timeline-page__container">
        <Timeline
          events={allEvents}
          loading={isLoading || isFetching}
          hasMore={data?.hasMore}
          onLoadMore={loadMore}
        />
      </div>
    </div>
    </main>
  )
}

export default Home