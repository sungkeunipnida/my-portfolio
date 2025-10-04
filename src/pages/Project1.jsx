// src/pages/Project1.jsx
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";

const center = { lat: 35.6895, lng: 139.6917 };
const tsukishimaStation = { lat: 35.66442, lng: 139.7848 };

function Project1() {
  const [placeInfo, setPlaceInfo] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const mapRef = useRef(null);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const handleShowHome = () => {
    if (mapRef.current) {
      // 카메라 이동
      mapRef.current.panTo(tsukishimaStation);
      mapRef.current.setZoom(15);

      const { google } = window;
      const service = new google.maps.places.PlacesService(mapRef.current);

      // Place ID 대신 쿼리 검색
      service.findPlaceFromQuery(
        {
          query: "月島駅 Tokyo",
          fields: ["name", "formatted_address", "photos", "rating"],
        },
        (results, status) => {
          console.log("findPlaceFromQuery:", status, results);

          if (
            status === google.maps.places.PlacesServiceStatus.OK &&
            results[0]
          ) {
            setPlaceInfo({
              name: results[0].name,
              formatted_address: results[0].formatted_address,
              photos: results[0].photos,
              rating: results[0].rating,
            });
            setShowInfo(true); // 버튼 클릭 시 InfoWindow 자동 표시
          } else {
            console.error("Place search failed:", status);
          }
        }
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-100">
      {/* 헤더 */}
      <header className="fixed top-0 left-0 w-full bg-gray-800/80 text-white p-4 flex justify-between items-center shadow z-50">
        <h1 className="text-xl font-bold">
          <Link to="/" className="text-gray-200 hover:text-white">
            sungkeun
          </Link>
        </h1>
      </header>

      {/* 본문 */}
      <main className="flex-1 pt-24 flex flex-col items-center justify-center px-4">
        <button
          onClick={handleShowHome}
          className="mb-6 px-4 py-2 bg-white text-gray-600 rounded hover:bg-gray-100 transition"
        >
          最寄り駅
        </button>

        <div className="flex justify-center items-center w-full">
          <div className="w-[90%] h-[90vw] sm:w-[70%] sm:h-[70vw] md:w-[50%] md:h-[50vw] max-w-[600px] max-h-[600px]">
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "100%" }}
              center={center}
              zoom={12}
              onLoad={onLoad}
            >
              {/* 마커 */}
              {showInfo && <Marker position={tsukishimaStation} />}

              {/* InfoWindow */}
              {showInfo && placeInfo && (
                <InfoWindow
                  position={tsukishimaStation}
                  onCloseClick={() => setShowInfo(false)}
                >
                  <div className="text-sm">
                    <h2 className="font-bold">{placeInfo.name}</h2>
                    <p>{placeInfo.formatted_address}</p>

                    {/* 사진 안전 처리 */}
                    {placeInfo.photos?.[0]?.photo_reference ? (
                      <img
                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${
                          placeInfo.photos[0].photo_reference
                        }&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`}
                        alt={placeInfo.name}
                        className="mt-2 rounded"
                      />
                    ) : (
                      <div className="mt-2 text-gray-500 italic">사진 없음</div>
                    )}

                    {/* 평점 */}
                    {placeInfo.rating && (
                      <p className="mt-1">⭐ {placeInfo.rating} / 5</p>
                    )}
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="p-4 bg-gray-100 text-center text-sm text-gray-500">
        © 2025 Sungkeun. All rights reserved.
      </footer>
    </div>
  );
}

export default Project1;
