"use client";

import type { ComponentProps } from "react";
import { track, type TrackEvent } from "@/lib/analytics";

type Props = ComponentProps<"a"> & {
  event: TrackEvent;
  location: string;
};

// External link that reports a GA4 event when clicked.
export function TrackedLink({ event, location, onClick, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(e) => {
        track(event, { location });
        onClick?.(e);
      }}
    />
  );
}
