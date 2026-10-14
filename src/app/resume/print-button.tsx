"use client";

import { track } from "@/lib/analytics";
import { buttonStyles } from "@/components/contact-buttons";
import { DownloadIcon } from "@/components/icons";

export function PrintButton() {
  return (
    <button
      type="button"
      className={buttonStyles.primary}
      onClick={() => {
        track("resume_download", { location: "resume-page" });
        window.print();
      }}
    >
      <DownloadIcon className="size-4" /> Save as PDF
    </button>
  );
}
