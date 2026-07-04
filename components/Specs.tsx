"use client";

import { specs } from "@/data/content";
import Image from "next/image";
import i from "@/assets/360.jpg"
import one from "@/assets/1.jpg"
import two from "@/assets/2.jpg"
import three from "@/assets/3.jpg"
import four from "@/assets/4.jpg"
import five from "@/assets/5.png"
import six from "@/assets/6.png"
import seven from "@/assets/7.jpg"
import eight from "@/assets/8.jpg"
import nine from "@/assets/9.png"

export function Specs() {
  return (
    <section id="specs" className="py-24 md:py-32">
      <div className="container-tight">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Thông số kỹ thuật</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Sức mạnh <span className="text-gradient">nằm trong từng chi tiết.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Từ Intel Core Ultra 7 đến màn hình AMOLED 3K — Galaxy Book5 Pro 360 mang tới
              hiệu năng flagship trong thân máy chỉ 12.8mm, nặng 1.69 kg.
            </p>
          </div>

          <div className="reveal">
            <dl className="glass rounded-2xl divide-y divide-border overflow-hidden shadow-card">
              {specs.map((s) => (
                <div key={s.label} className="flex items-center justify-between p-5">
                  <dt className="text-sm font-medium text-muted-foreground">{s.label}</dt>
                  <dd className="font-display font-semibold text-right">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="reveal py-25">

          <div className="flex flex-col gap-8">

            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Thiết kế <span className="text-gradient"> và cấu trúc</span>
            </h2>
            <p className="text-justify text-lg md:text-xl text-muted-foreground leading-relaxed">
              So sánh Galaxy Book5 với người tiền nhiệm Book4 giống như chơi trò “tìm điểm khác biệt”, ngoại trừ bàn di chuột trên Book5 được thiết kế rộng hơn một chút. Ngoài ra, mọi thứ gần như giữ nguyên với khung vỏ bằng nhôm anod hóa cao cấp, phần dưới hơi cong và đường nét thiết kế tối giản. Chỉ có logo Samsung nhỏ trên mặt ngoài khung máy là điểm nhấn duy nhất thể hiện nguồn gốc của sản phẩm. Với vai trò là một ultraportable chuyển đổi, Galaxy Book5 có thể gập lại dễ dàng và mang lại cảm giác chắc chắn, bền bỉ khi sử dụng.
            </p>
            <div className="relative rounded-[1rem] overflow-hidden glass shadow-elegant animate-float flex flex-col items-center gap-2">
              <Image
                src={i}
                alt="Samsung Galaxy Book5 Pro 360 16"
                width={1280}
                height={1280}
                decoding="async"
                className="w-full h-auto"
              />
            </div>
            <p className="text-justify text-lg md:text-xl text-muted-foreground leading-relaxed">
              Các kế toán viên trên toàn thế giới, hãy vui mừng lên! Galaxy Book5 được trang bị bàn phím đầy đủ với bàn phím số bên cạnh – một tính năng vẫn luôn gây tranh cãi. Dù bạn có thích hay không, không thể phủ nhận rằng việc có bàn phím số yêu cầu người dùng phải dịch chuyển vị trí sử dụng vài centimet so với bàn phím thông thường trên laptop.
            </p>

            <p className="text-justify text-lg md:text-xl text-muted-foreground leading-relaxed">
              Dù vậy, trải nghiệm gõ phím không có nhiều thay đổi: phím bấm mang lại phản hồi rõ ràng, không quá cứng hay gây khó chịu khi sử dụng. Đây chắc chắn là một bàn phím dành cho công việc nhập liệu, và bạn nên gạt bỏ ý định sử dụng nó cho các trò chơi yêu cầu cao. Bố cục bàn phím tuân theo chuẩn ISO với phím Enter đầy đủ – một điểm cộng lớn cho người dùng Pháp quen thuộc với tiêu chuẩn này, và đây cũng là điều không phải laptop nào bán tại Pháp cũng có.
            </p>

            <div className="relative rounded-[1rem] overflow-hidden glass shadow-elegant animate-float flex flex-col items-center gap-2">
              <Image
                src={one}
                alt="Samsung Galaxy Book5 Pro 360 16"
                width={1280}
                height={1280}
                decoding="async"
                className="w-full h-auto"
              />
            </div>

            <p className="text-justify text-lg md:text-xl text-muted-foreground leading-relaxed">
              Như đã đề cập trước đó, bàn di chuột trên Galaxy Book5 chiếm một phần lớn trên khung máy bên trong, và việc sử dụng nó thực sự là một trải nghiệm thú vị nhờ độ nhạy cao cùng cảm giác nhấn chuột phản hồi nhanh, tránh được cảm giác rẻ tiền vẫn còn quá phổ biến trên nhiều sản phẩm khác. Chiều dài rộng của bàn di chuột là một điểm cộng, nhưng không gây bất tiện khi sử dụng. Đương nhiên, nó được đặt lệch về phía bên trái để phù hợp với bố cục bàn phím đầy đủ.
            </p>

            <div className="relative rounded-[1rem] overflow-hidden glass shadow-elegant animate-float flex flex-col items-center gap-2">
              <Image
                src={two}
                alt="Samsung Galaxy Book5 Pro 360 16"
                width={1280}
                height={1280}
                decoding="async"
                className="w-full h-auto"
              />
            </div>

            <p className="text-justify text-lg md:text-xl text-muted-foreground leading-relaxed">
              Không có sự đột phá nào về cổng kết nối so với hai thế hệ Galaxy Book trước đó. Ở phía bên trái, chúng ta có hai cổng USB-C Thunderbolt và một cổng HDMI 2.1. Phía bên phải là bộ ba gồm cổng tai nghe, khe đọc thẻ mini-SD và cổng USB-A. Dù lựa chọn này đã đáp ứng đủ nhu cầu, đặc biệt là với một chiếc ultraportable, nhưng sẽ tuyệt vời hơn nếu Samsung bổ sung thêm một cổng RJ45 để tăng tính linh hoạt.
            </p>

            <div className="relative rounded-[1rem] overflow-hidden glass shadow-elegant animate-float flex flex-col items-center gap-2">
              <Image
                src={three}
                alt="Samsung Galaxy Book5 Pro 360 16"
                width={1280}
                height={1280}
                decoding="async"
                className="w-full h-auto"
              />
            </div>

            <p className="text-justify text-lg md:text-xl text-muted-foreground leading-relaxed">
              Tuy nhiên, không có gì phải phàn nàn về khả năng kết nối không dây khi Galaxy Book5 được trang bị Bluetooth 5.3 và Wi-Fi 7 – một tin vui dành cho những ai đang có kế hoạch sử dụng sản phẩm này trong thời gian dài.
            </p>

            <div className="relative rounded-[1rem] overflow-hidden glass shadow-elegant animate-float flex flex-col items-center gap-2">
              <Image
                src={four}
                alt="Samsung Galaxy Book5 Pro 360 16"
                width={1280}
                height={1280}
                decoding="async"
                className="w-full h-auto"
              />
            </div>

            <p className="text-justify text-lg md:text-xl text-muted-foreground leading-relaxed">
              Galaxy Book5 thể hiện sự ổn định trong mọi tình huống, nhiệt độ máy không vượt quá 38°C trong bài kiểm tra tải nặng (chuyển đổi video 4K), với mức nhiệt cao nhất đo được tại phần lưng máy là 37,8°C. Bộ đôi ống dẫn nhiệt và quạt tản nhiệt hoạt động hiệu quả, đôi khi hơi quá mức, khiến máy phát ra tiếng gió nhẹ trong một số trường hợp, chẳng hạn như khi tải xuống tệp dung lượng lớn. May mắn thay, mức ồn tối đa khi máy hoạt động cường độ cao cũng không quá đáng kể, chỉ ở mức 36,7 dB(A).
            </p>

            <div className="relative rounded-[1rem] overflow-hidden glass shadow-elegant animate-float flex flex-col items-center gap-2">
              <Image
                src={five}
                alt="Samsung Galaxy Book5 Pro 360 16"
                width={1280}
                height={1280}
                decoding="async"
                className="w-full h-auto"
              />
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-gradient">Hiệu năng</span>
            </h2>

            <p className="text-justify text-lg md:text-xl text-muted-foreground leading-relaxed">
              Chiếc Samsung Galaxy Book5 360 Pro mà chúng tôi kiểm tra được trang bị bộ vi xử lý Intel Core Ultra 256V cùng 16 GB RAM tích hợp. Kiến trúc của con chip di động này, với 8 nhân (4 nhân hiệu suất cao và 4 nhân tiết kiệm năng lượng) và tốc độ tối đa lên đến 4,8 GHz, đã chứng minh được năng lực kể từ khi ra mắt vào mùa hè 2024. Do đó, hiệu năng của nó trên Galaxy Book5 hoàn toàn nằm trong kỳ vọng của chúng tôi.
            </p>

            <div className="relative rounded-[1rem] overflow-hidden glass shadow-elegant animate-float flex flex-col items-center gap-2">
              <Image
                src={six}
                alt="Samsung Galaxy Book5 Pro 360 16"
                width={1280}
                height={1280}
                decoding="async"
                className="w-full h-auto"
              />
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-gradient">Màn hình</span>
            </h2>

            <p className="text-justify text-lg md:text-xl text-muted-foreground leading-relaxed">
              Samsung Galaxy Book5 Pro 360 sở hữu màn hình cảm ứng AMOLED 16 inch với độ phân giải 2880 x 1800 pixel. Trải nghiệm sử dụng bút S-Pen trên màn hình rất dễ chịu, và chúng tôi không có bất kỳ phàn nàn nào về khả năng nhận diện chuyển động trên các ứng dụng sáng tạo của Samsung và Microsoft được cài sẵn.
            </p>

            <div className="relative rounded-[1rem] overflow-hidden glass shadow-elegant animate-float flex flex-col items-center gap-2">
              <Image
                src={seven}
                alt="Samsung Galaxy Book5 Pro 360 16"
                width={1280}
                height={1280}
                decoding="async"
                className="w-full h-auto"
              />
            </div>

            <p className="text-justify text-lg md:text-xl text-muted-foreground leading-relaxed">
              Độ hiệu chỉnh màu sắc của màn hình cũng rất tốt, bắt đầu với chỉ số Delta E trung bình là 1,9, đảm bảo không có bất kỳ sai lệch màu sắc nào (có thể nhận thấy từ ngưỡng 3 trở lên). Tuy nhiên, nhiệt độ màu chưa thực sự hoàn hảo với mức trung bình là 7015 K, khá xa so với mức lý tưởng là 6500 K. Chúng tôi khuyên những người làm công việc sáng tạo cần độ hiệu chỉnh chính xác hơn nên điều chỉnh lại màn hình, vốn hơi lạnh mặc định, thông qua phần mềm Samsung Settings.
            </p>

            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Tính di động <span className="text-gradient">và thời lượng pin</span>
            </h2>

            <p className="text-justify text-lg md:text-xl text-muted-foreground leading-relaxed">
              Không thể phủ nhận rằng kích thước của Book5 (355,4 x 252,2 x 12,8 mm) khá lớn… giống như bất kỳ chiếc laptop 16 inch nào khác. Tuy nhiên, điểm cộng là máy khá nhẹ, chỉ nặng 1,69 kg khi cân (nhẹ hơn một chút so với Book4 Ultra nhưng nặng hơn Book4 360), phù hợp với hầu hết các loại balo thông thường. Chúng tôi cũng đánh giá cao trọng lượng siêu nhẹ của bộ sạc (162 g), chỉ nặng hơn một chút so với điện thoại thông minh – một điểm cộng lớn.
            </p>

            <div className="relative rounded-[1rem] overflow-hidden glass shadow-elegant animate-float flex flex-col items-center gap-2">
              <Image
                src={eight}
                alt="Samsung Galaxy Book5 Pro 360 16"
                width={1280}
                height={1280}
                decoding="async"
                className="w-full h-auto"
              />
            </div>

            <p className="text-justify text-lg md:text-xl text-muted-foreground leading-relaxed">
              Kết quả kiểm tra cho thấy sự khác biệt rõ rệt giữa thế hệ Lunar Lake và các phiên bản tiền nhiệm. Với thời lượng pin 14 giờ 22 phút trong bài kiểm tra phát video (streaming Netflix, độ sáng màn hình 200 cd/m²), Book5 360 Pro đứng ngay sau Book4 Ultra và Book4 Pro, nhưng vượt xa so với Book4 360 – chiếc laptop chuyển đổi thế hệ trước của dòng sản phẩm. Sự cải tiến này đến từ dung lượng pin lớn (76 Wh) và các nhân tiết kiệm năng lượng của bộ vi xử lý Core Ultra 7 256V, vốn xuất sắc trong các tác vụ phát video.
            </p>

            <div className="relative rounded-[1rem] overflow-hidden glass shadow-elegant animate-float flex flex-col items-center gap-2">
              <Image
                src={nine}
                alt="Samsung Galaxy Book5 Pro 360 16"
                width={1280}
                height={1280}
                decoding="async"
                className="w-full h-auto"
              />
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-gradient">Kết luận</span>
            </h2>

            <p className="text-justify text-lg md:text-xl text-muted-foreground leading-relaxed">
              <span className="text-gradient">Samsung Galaxy Book5 Pro 360</span> thực sự là một chiếc laptop 2 trong 1 ấn tượng, kết hợp hiệu năng vượt trội với thiết kế sang trọng và đẳng cấp. Với cấu hình mạnh mẽ, màn hình tuyệt đẹp và khả năng linh hoạt khi chuyển đổi giữa các chế độ sử dụng, đây là thiết bị lý tưởng dành cho cả công việc lẫn giải trí. Nếu bạn đang tìm kiếm một chiếc laptop cao cấp, đáp ứng mọi nhu cầu từ học tập, làm việc đến sáng tạo, Galaxy Book5 Pro 360 chắc chắn là sự lựa chọn đáng cân nhắc.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}