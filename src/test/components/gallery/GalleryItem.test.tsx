import { GalleryItem } from "../../../components/gallery/GalleryItem";
import { render, screen, waitFor } from "@testing-library/react";

describe("test in <GalleryItem />", () => {
  const mockedPhoto = {
    previewId: "1664898372517",
    previewUrl: "https://picsum.photos/300/300?random=0.3833849915413208"
  };
  it("render the component", async () => {
    const { container } = render(
      <GalleryItem
        previewUrl={mockedPhoto.previewUrl}
        previewId={mockedPhoto.previewId}
      />
    );
    expect(container).toMatchSnapshot();
  });
  it("should show the correct src", async () => {
    const { container } = render(
      <GalleryItem
        previewUrl={mockedPhoto.previewUrl}
        previewId={mockedPhoto.previewId}
      />
    );
    const img = container.querySelector("img");
    expect(img).toBeTruthy();
    expect(img!.src).toBe(mockedPhoto.previewUrl);
  });
});
