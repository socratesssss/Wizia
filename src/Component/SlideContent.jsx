import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircleIcon from "@mui/icons-material/Circle";
import { motion } from "framer-motion";

function SlideContent() {
  const content = [
    { id: 0, speech: "The history of Genghis Khan is particularly interesting. ", name: "Elon Musk", identy: "CEO of Tesla" },
    { id: 1, speech: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", name: "John Doe", identy: "CSO @ Company" },
    { id: 2, speech: "Most people didn't want to learn how to use a computer; they just anted to use it.", name: "Steve Jobs", identy: "Former CEO of Apple" },
    { id: 3, speech: "Some memories stick with you forever. Others follow you around for 28 years.", name: "Bill Gates", identy: "Former CEO of Microsoft" },
    { id: 4, speech: "I choose a lazy person to do a hard job because they'll find an easy way.", name: "Bill Gates", identy: "Founder of Microsoft" },
  ];

  const [index, setIndex] = useState(0);
  const { speech, name, identy } = content[index];

  const preContent = () => {
    setIndex((prev) => (prev === 0 ? content.length - 1 : prev - 1));
  };

  const nextContent = () => {
    setIndex((prev) => (prev === content.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  const getVisibleDots = () => {
    const totalDots = 3; // Show only 3 dots at a time
    const startIndex = Math.max(0, Math.min(index - 1, content.length - totalDots));
    return content.slice(startIndex, startIndex + totalDots);
  };

  return (
    <section className="md:px-16 py-18 md:py-20 px-4">
      <div className="grid grid-cols-12 items-center justify-center text-white">
        {/* Previous Button */}
        <div onClick={preContent} className="col-span-1 flex justify-center cursor-pointer">
          <ArrowBackIcon
            sx={{
              fontSize: { xs: 30, sm: 40 },
              transition: "transform 0.2s ease-in-out",
              "&:hover": { transform: "scale(1.2)" },
            }}
          />
        </div>

        {/* Content (Static) */}
        <div className="col-span-10 flex flex-col justify-center items-center">
          <img className="w-16" src="Group9.png" alt="" />
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-light md:h-26 h-28 md:mt-12 text-center mt-6 text-xl md:text-3xl">{speech}</h2>
            <p className="text-[#0FF1F6] md:text-2xl md:mt-10 mt-6 font-bold">{name}</p>
            <p className="text-gray-300 mt-2 md:text-xl">{identy}</p>

            {/* Dots Navigation */}
            <div className="flex md:gap-5 gap-2 mt-5 md:mt-10">
              {getVisibleDots().map((slide) => (
                <motion.div
                  key={slide.id}
                  onClick={() => goToSlide(slide.id)}
                  className="cursor-pointer"
                  layout
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <CircleIcon
                    sx={{
                      fontSize: { xs: 10, sm: 12, md: 18 },
                      color: index === slide.id ? "#0FF1F6" : "gray",
                     
                      transform: index === slide.id ? "scale(1.5)" : "scale(1)",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div onClick={nextContent} className="col-span-1 flex justify-center cursor-pointer">
          <ArrowForwardIcon
            sx={{
              fontSize: { xs: 30, sm: 40 },
              transition: "transform 0.2s ease-in-out",
              "&:hover": { transform: "scale(1.2)" },
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default SlideContent;
