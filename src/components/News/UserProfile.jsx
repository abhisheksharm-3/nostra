import { useEffect } from "react";
import toast from "react-hot-toast";

const NewsMessage = () => {
  // Display the announcement on the first visit
  useEffect(() => {
    if (!localStorage.getItem("announcementShown")) {
      toast(
        "We've waved our magic wand and conjured up backend wizardry, now granting you the power to explore the mystical realm of user profiles! Abra-ca-dabra! 🪄✨",
        {
          duration: 10000,
          position: "bottom-right",
          className: "bg-green-500 text-white p-4 rounded-md shadow-md",
          icon: "🎉",
          iconTheme: {
            primary: "#000",
            secondary: "#fff",
          },
        }
      );
      localStorage.setItem("announcementShown", "true");
    }
  }, []);

  return <></>;
};

export default NewsMessage;
