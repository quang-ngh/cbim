import upcomingEvents from "@/utils/mock-data/upcoming-events";

export default function News() {
  return (
    <div className="py-5 my-10 w-full">
      <h2 className="xl:text-3xl text-xl font-bold tracking-wide font-pt-serif">
        Upcoming News and Events
      </h2>

      <div className="space-y-6">
        {upcomingEvents.map((event, index) => (
          <div
            key={index}
            className="border-l-4 border-primary-red pl-4 py-2 group cursor-pointer
            hover:pl-8 transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between ">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                <div className="text-gray-600 text-sm">
                  <span className="font-medium">{event.date}</span>
                  <span className="mx-2">•</span>
                  <span>{event.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
