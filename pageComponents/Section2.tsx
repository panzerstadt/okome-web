import React from "react";
import Section from "../components/Section";

const Top = () => {
  return (
    <div
      className="flex items-center w-full overflow-hidden font-serif bg-ivory"
      style={{ height: "50%" }}
    >
      <div className="w-1/3">
        <h1>日本三大米</h1>
        <p>
          江戸時代に「日本三大米」と称され た讃岐こしひかり。瀬戸内の温暖な
          気候ときれいな水で育ったお米は一 粒一粒がしっかりしており、甘みの
          あるお米に仕上がります。
        </p>
      </div>

      <div className="w-2/3 ">
        <img src="/images/info/rice.jpg" alt="" />
      </div>
    </div>
  );
};

const Bottom = () => {
  return (
    <div
      className="flex items-center w-full overflow-hidden font-serif"
      style={{ height: "50%" }}
    >
      <div className="w-2/3 ">
        <video autoPlay muted loop>
          <source src="/videos/vid.webm" type="video/webm" />
        </video>
      </div>

      <div className="w-1/3">
        <h1>自分の目で確かめよう</h1>
        <p>
          収穫までの一部始終をモニタリング。
          お客様に安心・安全をお届けできるよう、
          お米が「今」どう育っているのかをご確
          認いただけます。口にする物の成長を
          是非ご自身の目で確かめてみてください。
        </p>
      </div>
    </div>
  );
};

export const Two = () => {
  return (
    <Section>
      <Top />
      <Bottom />
    </Section>
  );
};
