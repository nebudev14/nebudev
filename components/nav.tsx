import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";

export const Nav: React.FC = () => {
  return (
    <div className=" font-bricolage fixed w-full flex items-center md:px-5 px-16 py-4  bg-opacity-90 bg-neutral-950  z-40 border-b-[1px] border-b-neutral-800">
      <h1 className="mr-2 font-mono text-xl md:text-xs hover:text-green-500 hover:underline hover:cursor-pointer">
        wyun.sh
      </h1>
      <h1 className="font-mono text-xl md:text-xs"> \ </h1>
      <div className="z-50 mr-auto font-mono text-xl md:text-xs">
        <HoverCard>
          <HoverCardTrigger asChild>
            <h1 className="ml-2 hover:cursor-pointer hover:underline">
              nebudev14
            </h1>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 bg-neutral-900">
            <div className="flex justify-between p-4 space-x-4 rounded-xl">
              <div className="space-y-1">
                <h4 className="mb-1 font-open ">nebudev14</h4>
                <h4 className="text-xs">ne·​bu·​dev</h4>
                <p className="text-sm">
                  Derived from the word ねぶそく (nebusoku), which translates to
                  &quot;lack of sleep&quot; in Japanese.
                </p>
                <div className="flex items-center pt-2">
                  <span className="text-xs text-muted-foreground">
                    Est. April 2020
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      <h1 className="mr-3 md:text-xs">about</h1>
      <h1 className="mr-3 md:text-xs">photos</h1>
    </div>
  );
};
