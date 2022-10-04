import React from "react";

interface PropTypes {
  previewUrl: string;
  previewId: string;
}

export const GalleryItem = ({ previewUrl, previewId }: PropTypes) => {
  return (
    <>
      <img
        className="panel__gallery__img"
        key={`photo${previewUrl}`}
        src={previewUrl}
        alt={previewId}
      />
    </>
  );
};
