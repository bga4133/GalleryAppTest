import React, { ReactComponentElement, useState, useEffect } from "react";
import "./GalleryPanel.css";
import { photosApi, GetPhotosResponse } from "../../__dont_modify__/api/photos";
import { Photo } from "../../types/photos";
import { ApiError } from "../ApiError/ApiError";
import { GalleryItem } from "./GalleryItem";
import { LoadingModal } from "../shared/LoadingModal/LoadingModal";

const { getPhotos } = photosApi;
export const GalleryPanel: () => ReactComponentElement<any> = () => {
  // states
  const [photos, setPhotos] = useState<Photo[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPhotosFromApi = async () => {
    setIsLoading(true);
    try {
      const { photos }: GetPhotosResponse = await getPhotos({ page: 1 });
      setPhotos(photos);
      setIsLoading(false);
    } catch (error) {
      setPhotos(null);
      setIsLoading(false);
      throw new Error("Obbsss error");
    }
  };

  useEffect(() => {
    getPhotosFromApi();
  }, []);
  return (
    <>
      <div className="panel__gallery" data-testid="imgId">
        {photos?.map(({ previewUrl, previewId, id }: Photo) => (
          <GalleryItem
            key={`photo${previewUrl}`}
            previewUrl={previewUrl}
            previewId={previewId}
          />
        ))}
        {photos == null && <ApiError />}
        {isLoading && <LoadingModal />}
      </div>
    </>
  );
};
