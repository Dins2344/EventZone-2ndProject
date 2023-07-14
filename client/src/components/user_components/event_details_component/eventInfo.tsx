import { Button } from "@material-tailwind/react";
import VideoPlayer from "./youtube";

export type EventData = {
  _id: string;
  eventName: string;
  organizer: string;
  category: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  imageURL: string[];
  status: string;
  orgOwnerId: string;
  orgName: string;
  __v: number;
  description: string;
  videoURL: string;
  eventCapacity: number;
  ticketPrice: number;
  ticketValue: string;
  registeredTime: string;
  organizerInfo: {
    _id: string;
    userId: string;
    orgName: string;
    orgType: string;
    ownerId: string;
    admin: string[];
    __v: number;
  };
};

type EventDetailsProps = {
  event: EventData;
};
const EventInfo: React.FC<EventDetailsProps> = ({ event }) => {
  const youtubeVideoUrl = event?.videoURL;
  const videoId = youtubeVideoUrl?.split("v=")[1];
  const organization = event?.organizerInfo;
  return (
    <>
      <div className=" mt-5">
        <div className="flex flex-col">
          <p className="font-bold">Date : {event?.startDate}</p>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {event?.eventName}
          </h1>
          <div className="flex flex-col mt-8">
            <h3 className="text-3xl font-bold dark:text-white block">
              When & Where
            </h3>
            <div className="flex flex-wrap mt-5">
              <div className="flex flex-col w-full md:w-1/2 p-5">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>

                  <h5 className="text-xl font-bold dark:text-white mb-3">
                    Date & Time
                  </h5>
                </div>
                <p className="mb-3">
                  Start time: {event?.startDate} {event?.startTime}
                </p>
                <p>
                  End time: {event?.endDate} {event?.endTime}
                </p>
              </div>
              <div className="flex flex-col w-full md:w-1/2 p-5">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>

                  <h5 className="text-xl font-bold dark:text-white mb-3">
                    Location
                  </h5>
                </div>
                <p className="mb-3">
                  {event?.addressLine1} {event?.addressLine2}
                </p>
                <p>{event?.addressLine3}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <h3 className="text-3xl font-bold dark:text-white block ">
              About this event
            </h3>
            <div className="flex flex-col">
              <h5 className="text-xl font-bold dark:text-white mt-3 mb-3">
                Event description
              </h5>
              <p className="mb-3 text-gray-500 dark:text-gray-400">
                {event?.description}
              </p>
              <p>
                event category:{" "}
                <span className="mb-3 text-gray-500 dark:text-gray-400">
                  {event?.category}
                </span>
              </p>
              <p>
                event capacity:{" "}
                <span className="mb-3 text-gray-500 dark:text-gray-400">
                  {event?.eventCapacity}
                </span>
              </p>
            </div>
          </div>
          <div className="mt-3 overflow-scroll">
            <VideoPlayer videoId={videoId} />
          </div>
          <div className="flex flex-col mt-3">
            <h3 className="text-3xl font-bold dark:text-white block mb-3">
              About the organizer
            </h3>
            <div className="flex flex-col place-items-center border rounded-md shadow-md p-5">
              <img
                className="rounded-full w-20 h-20"
                src="https://img.freepik.com/free-icon/user_318-159711.jpg"
                alt="image description"
              />
              <p>Organized by</p>
              <h3 className="text-3xl font-bold dark:text-white">
                {organization?.orgName}
              </h3>
              <p>followers count</p>
              <p className="font-bold">Followers</p>
              <div className="flex mt-3">
                <Button className="mr-3" size="sm" color="blue" variant="outlined">Contact</Button>
                <Button size="sm">Follow</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventInfo;
