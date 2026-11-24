import { ArrowUpRight, CalendarDays, Clock3, Globe2, Video } from "lucide-react";

const bookingUrl =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2LIDtDhQMxX2V805RP3T7pz88eYl9U3VAjOfvkj2GP1Q-AT_KVEl-JGi5dkdlHvWfqKPhmaK0X";

const meetingDetails = [
  { icon: Clock3, text: "30 minutes · Free" },
  { icon: Video, text: "Google Meet" },
  { icon: Globe2, text: "Daily, 7:30–9:00 PM IST" },
  { icon: CalendarDays, text: "Book up to 7 days ahead" },
];

export function MeetingBooking() {
  return (
    <section
      id="schedule"
      aria-labelledby="schedule-title"
      className="mx-auto mb-12 grid max-w-6xl overflow-hidden rounded-3xl border border-white/15 bg-[#141419] text-left text-white lg:grid-cols-[minmax(230px,0.85fr)_minmax(0,2fr)]"
    >
      <div className="p-6 sm:p-8">
        <p className="mb-3 text-sm font-medium text-zinc-400">Gayatri Samal · Alphacentauric Studio</p>
        <h2 id="schedule-title" className="text-2xl font-semibold tracking-tight">Schedule a meeting</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
          Tell us what you’d like to discuss. We’ll use your meeting objective to prepare for the call.
        </p>
        <ul className="mt-6 space-y-3 text-sm text-zinc-200">
          {meetingDetails.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3">
              <Icon aria-hidden="true" className="size-4 shrink-0 text-primary" />
              {text}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-zinc-400">
          After booking, Google sends both of us a calendar invitation and confirmation email with the Meet link.
        </p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          Open booking in Google Calendar
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      </div>
      <iframe
        src={`${bookingUrl}?gv=true`}
        title="Book a free Google Meet with Gayatri Samal"
        loading="lazy"
        className="block h-[650px] w-full min-w-0 border-0 bg-white sm:h-[640px]"
      />
    </section>
  );
}
