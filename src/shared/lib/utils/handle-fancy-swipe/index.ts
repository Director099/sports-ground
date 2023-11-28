import {Fancybox} from "@fancyapps/ui";

export const defaultSrc = 'dialog-content';
export const handleFancySwipe = (id: string) =>
  Fancybox.show(
    [{src: id}],
    {Carousel: {
        Panzoom: {
          lockAxis: 'y',
          touch: (e) => !e.isDragging || e.dragOffset.y > -1
        }
      }}
  )

