import { SpeedDial } from "primereact/speeddial";

export default function SpeedDials() {
  const items = [
    {
      icon: "fab fa-whatsapp",
      className: "md:text-3xl text-2xl  md:p-2.5 md:px-3 p-1.5 px-2  border-2 border-white my-1 md:my-1 font-bold text-white bg-green-500", // Custom class for blue background and large icon size
      command: () => {
        window.open("https://chat.whatsapp.com/BDq3rFW48nb7dy2RJQNztc", "_blank");
      },
    },
    {
        icon: "fab fa-instagram",
        className: "md:text-3xl text-2xl md:p-2.5 md:px-3 p-1.5 px-2 border-2 border-white  my-1 md:my-1 font-bold text-white bg-pink-600", // Custom class for blue background and large icon size
        command: () => {
          window.open("https://instagram.com/kiit_electrical_society?igshid=MzRlODBiNWFlZA==", "_blank");
        },
      },
      {
        icon: "fab fa-facebook",
        className: "md:text-5xl text-4xl bg-white  border-2 border-white    my-1 md:my-2 font-bold text-sky-600", // Custom class for blue background and large icon size
        command: () => {
          window.open("https://www.facebook.com/kiitelectricalsociety/", "_blank");
        },
      },
      {
        icon: "fab fa-youtube",
        className: "md:text-3xl text-2xl  md:p-2.5 md:px-2.5 p-1.5 px-1 border-2 border-white  my-1 md:my-1 font-bold text-white bg-red-600", // Custom class for blue background and large icon size
        command: () => {
          window.open("https://youtube.com/@kiitelectricalsociety6552?si=VwlOYk_lbrgxOwPZ", "_blank");
        },
      },
      {
        icon: "fab fa-linkedin",
        className: "md:text-3xl text-2xl  md:p-2.5 md:px-3 p-1.5 px-2 border-2 border-white my-1 md:my-1 font-bold text-white bg-blue-600", // Custom class for blue background and large icon size
        command: () => {
          window.open("https://in.linkedin.com/company/kiit-electrical-society", "_blank");
        },
      },
      {
        icon: "fab fa-telegram",
        className: "md:text-5xl text-4xl my-1 md:my-1  border-2 border-white   font-bold text-blue-500 bg-white", // Custom class for blue background and large icon size
        command: () => {
          window.open("https://t.me/+f1btiTNaUu02MDk9", "_blank");
        },
      },
  ];

  return (
    <div class="fixed z-50 font-extrabold   md:bottom-20 bottom-14 md:right-32 right-20">
          <SpeedDial  
          model={items}
          direction="up"
          className="speeddial-bottom-left   left-0 bottom-0"
          buttonClassName="font-bold text-white hover:border-white md:border-4 border-2 m-2  md:px-[25px] md:p-5 px-[17px] p-3 rounded-full    bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-600 hover:to-pink-600  transition-colors duration-300"
        />
    </div>
  );
}
