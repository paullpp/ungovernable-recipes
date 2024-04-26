"use client";

import { UploadButton } from "~/utils/uploadthing";

export default function UploadImage(props: { setImage: React.Dispatch<React.SetStateAction<string>>}) {
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        props.setImage(res[0]?.url ?? "");
      }}
      onUploadError={(error: Error) => {
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}