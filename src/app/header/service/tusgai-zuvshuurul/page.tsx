import React from "react";

export default function page() {
  return (
    <div
      id="content"
      className="lan-mn"
      style={{
        backgroundImage: "url(&quot;&quot;)",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "block",
      }}
    >
      <div className="news-list-main nw-padding-top category-service">
        <div className="container">
          <h2 className="caption-title">Тусгай зөвшөөрөл</h2>
        </div>

        <div className="container cat-padding-top">
          <div className="row">
            <div className="col-sm-1 col-md-3">
              <div className="tags current-position cat-service">
                <h3>Мэргэшсэн Хуульч</h3>
                <ul></ul>
              </div>
            </div>

            <div className="col-sm-1 col-md-9  no-md">
              <div className="back-white no-gradient">
                <div className="service-about">
                  <p style={{ textAlign: "justify" }}>
                    Бид нийтийн ашиг сонирхол, хүний эрүүл мэнд, хүрээлэн байгаа
                    орчин, улс орны аюулгүй байдалд хохирол учруулж болзошгүй,
                    тодорхой нөхцөл, нарийн мэргэжил шаардах аж ахуйн зарим үйл
                    ажиллагааг эрхлэхэд тусгай зөвшөөрөл олгох, түдгэлзүүлэх,
                    хүчингүй болгохтой холбоотой аливаа харилцаанд хуульд заасан
                    хуулийн этгээдийн шаардлагыг бүрдүүлэхэд хууль эрх зүйн
                    зөвлөгөө өгөх, бичиг баримтыг боловсруулах, үйлчлүүлэгчийг
                    зохих хуулийн этгээд, төрийн байгууллагад төлөөлөн ажиллаж
                    байна.&nbsp; &nbsp;{" "}
                    <strong>
                      <br />
                    </strong>
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <strong>ТУРШЛАГА</strong>
                  </p>
                  <ul>
                    <li>
                      Монголын уул, уурхайн салбарт үйл ажиллагаа явуулдаг
                      Камекс ХХК болон түүний охин компаниудын эзэмшдэг
                      хайгуулын болон ашигт малтмалын тусгай зөвшөөрлүүд дээр
                      хууль зүйн дүгнэлт (2016);
                    </li>
                    <li>
                      Тэвшийн Говь цахилгаан станцын төсөлтэй холбогдуулан ашигт
                      малтмалын ашиглалтын тусгай зөвшөөрөлтэй хуулийн этгээд
                      болон эрчим хүчний барилга байгууламж барих тусгай
                      зөвшөөрөлтэй хуулийн этгээдийн үйл ажиллагаа, &nbsp;хууль
                      зүйн дүн шинжилгээ (2015);
                    </li>
                    <li>
                      Х компанитай холбогдуулан ашигт малтмалын ашиглалтын
                      тусгай зөвшөөрөлтэй хуулийн этгээдийн үйл ажиллагаанд
                      хууль зүйн дүн шинжилгээ хийсэн. (2019);
                    </li>
                  </ul>
                  <ul></ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="clear"></div>
        </div>
      </div>

      <input type="hidden" value="" id="sqqs" />
    </div>
  );
}