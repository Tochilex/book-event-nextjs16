import EventsDetails from "@/components/EventsDetails";
import { Suspense } from "react";

const EventDetailsPage = async ({ params }: { params: Promise<{slug: string}>}) => {
  const slug = params.then((p) =>p.slug);
 
 return (
  <main>
    <Suspense fallback={<div>Loading...</div>}>
      <EventsDetails params={slug} />
    </Suspense>
  </main>
 )
 
}

export default EventDetailsPage