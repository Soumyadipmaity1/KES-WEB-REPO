import NoticeCard from "./noticeitems";

export default function NoticeBoard() {
  return (
    <div class=" container md:mx-auto md:py-12 xl:px-28 lg:px-16  py-8 px-6">
      <div class="noticebg bg-cover md:px-12 md:pb-12 md:pt-8 pt-6 px-6 pb-6 rounded-3xl border-8  border-[#7e7d7c] shadow-lg">
        <div class="w-full h-auto flex flex-wrap flex-col pb-8 items-center">
          <p class="text-slate-200 font-bold text-3xl text-center md:p-2 p-2  ">
            Notice Board
          </p>
          <div class="w-36 h-1 border-b-2 border-yellow-400  rounded-full">
            {" "}
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <NoticeCard
            title="KREATIVE KONTROL Mega Event"
        description="Exciting hands-on event by KES, exploring creativity and conquering the world of electronics!"
        date="26th March 2024"
        link="https://www.instagram.com/p/C48Ap_4SkH9/"
        bgColor="#fae8ff"
        titleColor="#a31faf"
        textColor="#d946ef"
        buttonColor="#d946ef"
          />
               <NoticeCard
           title="Happy Holi"
        description="Wishing everyone a vibrant and joyous Holi celebration from all of us at KIIT Electrical Society (KES)!"
        date="25th March 2024"
        link="https://www.instagram.com/p/C47iY0vLfru/"
        bgColor="#dbeafe"
        titleColor="#1e40af"
        textColor="#3b82f6"
        buttonColor="#3b82f6"
          />
               <NoticeCard
           title="KARISHMA Updates - SHAKUNTALA"
        description="Pixxel's Shakuntala satellite represents a groundbreaking leap in Earth observation technology."
        date="24th March 2024"
        link="https://www.instagram.com/p/C448s-5Sdap/?img_index=1"
        bgColor="#fef9c3"
        titleColor="#a36409"
        textColor="#eab308"
        buttonColor="#eab308"
          />
               <NoticeCard
          title="Mega Event Coming Soon!"
        description="Stay tuned for an electrifying mega event - Coming soon with a bang! ⚡️❤️"
        date="24th March 2024"
        link="https://www.instagram.com/p/C44vb7kLxXS/"
        bgColor="#dcfce7"
        titleColor="#24885b"
        textColor="#29ca74"
        buttonColor="#29ca74"
          />
               <NoticeCard
           title="March GBM"
        description="Electrical Society's General Body Meeting: Welcoming new faces, buzzing excitement!"
        date="18th March 2024"
        link="https://www.instagram.com/p/C4qVc1cSSxC/?img_index=1"
        bgColor="#fee2e2"
        titleColor="#9e1d26"
        textColor="#ef4444"
        buttonColor="#ef4444"
          />
               <NoticeCard
                title="KARISHMA Updates - INJECTABLE WATER FILTRATION ✨"
        description="Guihua Yu stresses urgent action."
        date="17th March 2024"
        link="https://www.instagram.com/p/C4mwyMGrc9U/?img_index=2"
        bgColor="#f3f4f6"
        titleColor="#374151"
        textColor="#6b7280"
        buttonColor="#6b7280"
          />
        </div>
      </div>
    </div>
  );
}
