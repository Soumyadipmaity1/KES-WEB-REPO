import NoticeCard from "./noticeitems";

export default function NoticeBoard() {
  return (
    <div class=" container md:mx-auto md:py-12 md:px-28 py-8 px-6">
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
            title="Card 1"
        description="Description of Card 1"
        date="Date of Card 1"
        link="#"
        bgColor="#fae8ff"
        titleColor="##a31faf"
        textColor="#d946ef"
        buttonColor="#d946ef"
          />
               <NoticeCard
           title="Card 2"
        description="Description of Card 2"
        date="Date of Card 2"
        link="#"
        bgColor="#dbeafe"
        titleColor="#1e40af"
        textColor="#3b82f6"
        buttonColor="#3b82f6"
          />
               <NoticeCard
           title="Card 3"
        description="Description of Card 3"
        date="Date of Card 3"
        link="#"
        bgColor="#fef9c3"
        titleColor="#a36409"
        textColor="#eab308"
        buttonColor="#eab308"
          />
               <NoticeCard
          title="Card 4"
        description="Description of Card 4"
        date="Date of Card 4"
        link="#"
        bgColor="#dcfce7"
        titleColor="#24885b"
        textColor="#29ca74"
        buttonColor="#29ca74"
          />
               <NoticeCard
           title="Card 5"
        description="Description of Card 5"
        date="Date of Card 5"
        link="#"
        bgColor="#fee2e2"
        titleColor="#9e1d26"
        textColor="#ef4444"
        buttonColor="#ef4444"
          />
               <NoticeCard
                title="Card 6"
        description="Description of Card 6"
        date="Date of Card 6"
        link="#"
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
