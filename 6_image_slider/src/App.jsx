import React, { useEffect, useState } from "react";

const App = () => {
  const [images, setImages] = useState(null);
  const [imageNumber, setImageNumber] = useState(0);

  const getData = async () => {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=10"
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    async function fetchImages() {
      const result = await getData();
      console.log(result);
      setImages(result);
    }
    fetchImages();
  }, []);

  function forward() {
    if (images.length - 1 == imageNumber) {
      setImageNumber(0);
      return;
    } else setImageNumber((prev) => prev + 1);
  }

  function previous() {
    if (imageNumber === 0) {
      setImageNumber(images.length - 1);
      return;
    } else setImageNumber((prev) => prev - 1);
  }

  return (
    <div style={styles.pageBackground}>
      <div style={styles.cardContainer}>
        <h1 style={styles.heading}>Images Loaded</h1>

        {images ? (
          <div style={styles.carouselWrapper}>
            {/* Prev Button */}
            <button onClick={previous} style={{ ...styles.navButton, left: 15 }}>
              Prev
            </button>

            {/* Images Container */}
            <div style={styles.imageContainer}>
              {images.map((data, index) => {
                return (
                  <img
                    key={index}
                    src={`${data.download_url}`}
                    alt="carousel"
                    style={{
                      ...styles.image,
                      display: index === imageNumber ? "block" : "none",
                    }}
                  />
                );
              })}
            </div>

            {/* Next Button */}
            <button onClick={forward} style={{ ...styles.navButton, right: 15 }}>
              Next
            </button>

            {/* Indicator Dots Container */}
            <div style={styles.dotsContainer}>
              {images.map((_, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setImageNumber(index)}
                    style={{
                      ...styles.dot,
                      backgroundColor: index === imageNumber ? "#ff4757" : "#57606f",
                      transform: index === imageNumber ? "scale(1.3)" : "scale(1)",
                    }}
                  ></button>
                );
              })}
            </div>
          </div>
        ) : (
          <h2 style={styles.loading}>Loading...</h2>
        )}
      </div>
    </div>
  );
};

// --- INLINE STYLES ---
const styles = {
  pageBackground: {
    backgroundColor: "#1e1e2f",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0,
    padding: 0,
  },
  cardContainer: {
    backgroundColor: "#2a2a40",
    padding: "30px 20px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
    textAlign: "center",
    width: "700px",
    maxWidth: "95vw",
  },
  heading: {
    color: "#f8f8f2",
    marginTop: 0,
    marginBottom: "20px",
    fontWeight: 600,
  },
  carouselWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  navButton: {
    position: "absolute",
    top: "45%",
    transform: "translateY(-50%)",
    backgroundColor: "#6c5ce7",
    color: "white",
    border: "none",
    padding: "10px 15px",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "8px",
    cursor: "pointer",
    zIndex: 10,
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  },
  imageContainer: {
    height: "350px", // Fixed height stops the UI from hopping around
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  image: {
    height: "350px",
    width: "500px",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)",
  },
  dotsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginTop: "10px",
  },
  dot: {
    height: "12px",
    width: "12px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    padding: 0,
    transition: "all 0.3s ease",
  },
  loading: {
    color: "#a29bfe",
  },
};

export default App;