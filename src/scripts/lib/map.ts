import { initYandexMap } from "@lib/yandex-map";

initYandexMap({
  selector: "#map",
  YMapProps: { location: { center: [46.019273, 51.552344], zoom: 14 } },
  points: [
    {
      coordinates: [46.019273, 51.552344],
      height: 40,
      width: 40,
      image: "img/marker.svg",
    },
  ],
});
