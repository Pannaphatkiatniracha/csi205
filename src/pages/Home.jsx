const Home = () => {
  return (
    <div className="flex flex-col items-center text-center pt-12 px-4 md:px-0 bg-gradient-to-b from-purple-100 via-purple-200 to-purple-100">
      {/* รูปโปรไฟล์ */}
      <img
        src="/Profile.jpg"
        alt="Profile"
        className="rounded-full shadow-lg mb-3 w-[220px] h-[220px] object-cover border-4 border-white"
      />

      {/* ชื่อ + รหัส */}
      <h1 className="text-xl md:text-2xl font-bold mt-2">
        67098506 นางสาวปัณณพรรธน์ เกียรตินิรชา
      </h1>
      
      {/* ข้อมูลชั้นปี / สาขา */}
      <h6 className="text-md md:text-lg text-gray-500 mt-2 leading-snug text-black">
        ชั้นปีที่ 2 คณะเทคโนโลยีสารสนเทศ <br />
        สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์
      </h6>
        <p className="text-purple-500 mt-2 text-md md:text-lg">
        ชื่อเล่น: เวีย <br />
        อายุ: 19 ปี <br />
        ศิลปินคนโปรด: tiffanyyoung 
      </p>
</div>
  );
};

export default Home;
