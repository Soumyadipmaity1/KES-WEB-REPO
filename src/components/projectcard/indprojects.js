 import IndProjectcard from "./projectcard";
 
 const  rahul = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837528/rahul_project_pic_ukyqnf.jpg";
 const  abhinav = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837469/Abhinav_pro_zf4krq.jpg";
 const  arnuv = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837496/arnuv_pro_mc6xku.png";
 const  bittu = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837503/bittu_pro_hujlxf.jpg";
 const  rishav = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837503/bittu_pro_hujlxf.jpg";

 const  junaid = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837514/junaid_pro_h9xkeg.jpg";
 const  aman = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837475/Aman_pro_ep5xmv.jpg";
 const  prathmesh = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837517/prathmesh_pro_mjudo7.jpg";
 const vidit = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837537/vidit_pro_ofdwix.jpg";
 const  soumya = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837531/soumya_pro_hvswzv.webp";
 const  swarup = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837534/Swarup_pro_xwjutz.jpg";
 const  abhishekmohanty = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837472/abhishekmohanty_pro_dde4nt.jpg";
 const  bishayan = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837497/biswayan_pro_m0whtf.jpg";
 const  anirban = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837478/anirbarn_gaxa8t.jpg";
 const  viswanath = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837541/Viswanath_PRO_gjekns.jpg";
 const  archish = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837490/archish_pro_cy26le.jpg";
 const  anup = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837487/anup_pro_yas6hp.jpg";
 const  aritra = "https://res.cloudinary.com/da3u4ukxz/image/upload/v1715837493/aritra_pro_pdpmyy.jpg";
// import priangshu from "./";
export default function IndProjects() {
  return (
    <div class="w-full h-full project-bg py-10 ">
      <div class=" h-auto  flex xl:p-7 2lg:p-1   justify-center flex-wrap ">
        <IndProjectcard
          img={rahul}
          title="Password Security System"
          name="Rahul Raj"
          id="22053267"
          github=""
          linkedin="linkedin_link"
          instagram="instagram_link"
          Document="https://drive.google.com/drive/folders/15NZa-af9klFiq7N-D4abeAeD1hxJ9Fy6"
        />
        <IndProjectcard
          img={abhinav}
          title="Water Moisture Level Sensor"
          name="Abhinav Audukoori"
          id="2205870"
          github="github_link"
          linkedin="linkedin_link"
          instagram="instagram_link"
          Document="https://docs.google.com/document/d/1yF34EUY0SJfXp3ohMZtSFFPiJO9AjR1fMbrMZI6Y54s/edit"
        />
        <IndProjectcard
          img={arnuv}
          title="Timed Automatic Switch"
          name="Arnuv Raina"
          id="22052367"
          github="github_link"
          linkedin="linkedin_link"
          instagram="instagram_link"
          Document="https://drive.google.com/drive/folders/1dfZFlKlgMjHtbn8EEl9zrME6Ojn6SiKR"
        />
        <IndProjectcard
          img={bittu}
          title="Automated Light"
          name="Bittu kumari"
          id="2230079"
          github="github_link"
          linkedin="linkedin_link"
          instagram="instagram_link"
          Document="https://docs.google.com/presentation/d/1AUrnPVlWS952kMQBnmjRfsP7vbL_R28p/edit#slide=id.p1"
        />
        <IndProjectcard
          img={soumya}
          title="KES Website"
          name="Soumyadip Maity"
          id="22053029"
          github="github_link"
          linkedin="linkedin_link"
          instagram="instagram_link"
          Document="https://drive.google.com/drive/folders/128nSf4cbzsj-wXR1wgjauZXcU-bIE2pd"
        />
        <IndProjectcard
          img={junaid}
          title="RFID Attendance System"
          name="Junaid Ul ISLAM"
          id="2205472"
          github="github_link"
          linkedin="linkedin_link"
          instagram="instagram_link"
          Document="https://drive.google.com/drive/folders/1FLwxQ1_bSB82POh15eb9ZItgg4L3N6RP"
        />
        <IndProjectcard
          img={aman}
          title="App Controlled Mini Drone"
          name="Kumar Aman"
          id="2205043"
          github="github_link"
          linkedin="linkedin_link"
          instagram="instagram_link"
          Document="https://drive.google.com/drive/folders/1zW7oF3TwoYikF3x-GnTEPHHwn75oz-G7"
        />
        <IndProjectcard
          img={prathmesh}
          title="Parking Management System"
          name="Prathmesh Ramesh Gangarde"
          id="22052487"
          github="github_link"
          linkedin="linkedin_link"
          instagram="instagram_link"
          Document="https://drive.google.com/drive/folders/1mlF3j8u5XyoY44x2jJWwWgMtIZyKr3Jc"
        />

        <IndProjectcard
          img={vidit}
          title="Hotel Management System"
          name="Vidit Rajani Kant Taunk"
          id="22052433"
          github="github_link"
          linkedin="linkedin_link"
          instagram="instagram_link"
        />
        <IndProjectcard
          img={swarup}
          title="DC MOTOR using IR"
          name="Swarup Mohapatra"
          id="KES"
          github="github_link"
          linkedin="linkedin_link"
          instagram="instagram_link"
          Document="https://drive.google.com/drive/u/0/folders/1cz-6EGQ1tziRGqEWy1BSBAuw7HrjEu4rJ9hXJqxV80x4A8e2mFrhnF4d3_HpT6JDmC_-_ABm"
        />
        <IndProjectcard
          img={abhishekmohanty}
          title="Cooling System for Laptop"
          name="Abhisekh Mohanty"
          id="1903002"
          github="github_link"
          linkedin="linkedin_link"
          instagram="instagram_link"
          Document="https://drive.google.com/drive/u/0/folders/1cz-6EGQ1tziRGqEWy1BSBAuw7HrjEu4rJ9hXJqxV80x4A8e2mFrhnF4d3_HpT6JDmC_-_ABm"
        />
    <IndProjectcard
          img="https://hobbycomponents.com/images/forum/4x4x4V2/HCKITS0070.jpg"
          title="Cooling System for Laptop"
          name="Pallavi Ghosh"
          id="2207011"
          github="github_link"
          linkedin="linkedin_link"
          instagram="instagram_link"
          Document="https://docs.google.com/document/d/1HsNdG0x9FgTLBdd9g_O-L1Y1ch8ih7Ie/edit"
        />
        <IndProjectcard
          img={rishav}
          title="Automated Light"
          name="Rishav Kumar"
          id="2206205"
          github="github_link"
          linkedin="linkedin_link"
          instagram="instagram_link"
          Document="https://docs.google.com/document/d/1y4iuV4U1CYNHMFGNzkR3cPgvzDglwgUE/edit"
        />
        <IndProjectcard
          img={bishayan}
          title="Energy Meter"
          name="Bishwayan Ghosh"
          id="1905528"
          github="github_link"
          linkedin="linkedin_link"
          instagram="instagram_link"
          Document="https://drive.google.com/drive/u/0/folders/1cz-6EGQ1tziRGqEWy1BSBAuw7HrjEu4rJ9hXJqxV80x4A8e2mFrhnF4d3_HpT6JDmC_-_ABm"
        />
        <IndProjectcard
          img={viswanath}
          title="RF_ID-Door lock system"
          name="Viswanath Akash"
          id="1904240"
          github="github_link"
          linkedin="linkedin_link"
          instagram="instagram_link"
          Document="https://drive.google.com/drive/u/0/folders/1cz-6EGQ1tziRGqEWy1BSBAuw7HrjEu4rJ9hXJqxV80x4A8e2mFrhnF4d3_HpT6JDmC_-_ABm"
        />
        <IndProjectcard
          img={anirban}
          title="Automated Thermoregulation"
          name="Anirban Sadhukan"
          id="1903052"
          github="github_link"
          linkedin="linkedin_link"
          instagram="instagram_link"
          Document="https://docs.google.com/document/d/1WZKLayGbI6YVc87uMPz8cY2OEBPypUnA/edit"
        />
        <IndProjectcard
          img={archish}
          title="Smart Voltage Sensing"
          name="Archish Chatterjee"
          id="KES"
          github="github_link"
          linkedin="linkedin_link"
          instagram="instagram_link"
          Document="https://docs.google.com/document/d/1U2o_kG4M3j0WkkJYJemppPB5VBIbysEK/edit"
        />
        <IndProjectcard
          img={anup}
          title="iPIANO"
          name="Anup Jyoti Talukdar"
          id="1804433"
          github="github_link"
          linkedin="linkedin_link"
          instagram="instagram_link"
          Document="https://drive.google.com/drive/u/0/folders/1cz-6EGQ1tziRGqEWy1BSBAuw7HrjEu4rJ9hXJqxV80x4A8e2mFrhnF4d3_HpT6JDmC_-_ABm"
        />
        <IndProjectcard
          img={aritra}
          title="Social Distancing Alert"
          name="Aritra Ganguly"
          id="1904015"
          github="github_link"
          linkedin="linkedin_link"
          instagram="instagram_link"
          Document="https://drive.google.com/drive/u/0/folders/1cz-6EGQ1tziRGqEWy1BSBAuw7HrjEu4rJ9hXJqxV80x4A8e2mFrhnF4d3_HpT6JDmC_-_ABm"
        />
        <IndProjectcard
          img={bishayan}
          title="RF_ID DOOR LOCK"
          name="Priyangshu Sen"
          id="1928180"
          github="github_link"
          linkedin="linkedin_link"
          instagram="instagram_link"
          Document="https://drive.google.com/drive/u/0/folders/1cz-6EGQ1tziRGqEWy1BSBAuw7HrjEu4rJ9hXJqxV80x4A8e2mFrhnF4d3_HpT6JDmC_-_ABm"
        />
      </div>
    </div>
  );
}
