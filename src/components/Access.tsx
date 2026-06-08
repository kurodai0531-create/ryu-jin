const hours = [
  { day: "平日", time: "11:30 〜 14:30 / 18:00 〜 22:00" },
  { day: "土日祝", time: "11:00 〜 15:00 / 17:30 〜 22:00" },
];

export default function Access() {
  return (
    <section id="access" className="py-28 md:py-40 bg-[#191510]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <p className="text-[#c9a96e] text-[10px] tracking-[0.6em] mb-5">ACCESS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ede8de] tracking-[0.15em] mb-6">
            店舗情報・アクセス
          </h2>
          <div className="w-10 h-px bg-[#c9a96e] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Store info */}
          <div className="space-y-10">
            <div>
              <p className="text-[#c9a96e] text-[10px] tracking-[0.5em] mb-3">ADDRESS</p>
              <p className="text-[#ede8de]/70 text-sm leading-8">
                〒190-0012
                <br />
                東京都立川市曙町2-14-8 龍神ビル1F
                <br />
                JR立川駅 北口より徒歩3分
              </p>
            </div>

            <div className="h-px bg-[#2e2820]" />

            <div>
              <p className="text-[#c9a96e] text-[10px] tracking-[0.5em] mb-3">HOURS</p>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex gap-6 text-sm">
                    <span className="text-[#9a9080] w-12 shrink-0">{h.day}</span>
                    <span className="text-[#ede8de]/70">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px bg-[#2e2820]" />

            <div>
              <p className="text-[#c9a96e] text-[10px] tracking-[0.5em] mb-3">CLOSED</p>
              <p className="text-[#ede8de]/70 text-sm">
                毎週火曜日（祝日の場合は翌水曜日）
              </p>
            </div>

            <div className="h-px bg-[#2e2820]" />

            <div className="flex gap-16">
              <div>
                <p className="text-[#c9a96e] text-[10px] tracking-[0.5em] mb-3">TEL</p>
                <a
                  href="tel:03-0000-0000"
                  className="text-[#ede8de]/70 text-sm hover:text-[#c9a96e] transition-colors"
                >
                  03-0000-0000
                </a>
              </div>
              <div>
                <p className="text-[#c9a96e] text-[10px] tracking-[0.5em] mb-3">SEATS</p>
                <p className="text-[#ede8de]/70 text-sm">
                  12席（カウンター8・テーブル4）
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full min-h-[360px]">
            <iframe
              src="https://maps.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E7%AB%8B%E5%B7%9D%E5%B8%82%E6%9B%99%E7%94%BA1%E4%B8%81%E7%9B%AE31-1&output=embed&z=16&hl=ja"
              width="100%"
              height="100%"
              className="w-full min-h-[360px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="麺匠龍神 地図"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
