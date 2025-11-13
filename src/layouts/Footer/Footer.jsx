const Footer = () => {
  return (
    <div
      className="text-white p-3 d-flex justify-content-center align-items-center gap-3 w-100 mt-4"
      style={{
        background: "linear-gradient(90deg, #6a0dad, #9b59b6)", // gradient ม่วง
      }}
    >
      <h5 className="mb-0 text-center">
        มหาวิทยาลัยศรีปทุม คณะเทคโนโลยีสารสนเทศ
        สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์
      </h5>

      <a
        href="https://www.instagram.com/pxnnxphxt_w?igsh=cmMyYW9iejNwZnly"
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex align-items-center"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
          width="32"
          height="32"
          className="ms-2"
          style={{
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </a>
    </div>
  );
};

export default Footer;
