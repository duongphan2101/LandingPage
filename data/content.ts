import type { Spec, Testimonial } from "@/services/api";

export const features = [
  {
    icon: "Cpu",
    title: "Intel Core Ultra 7",
    desc: "Chip Intel Core Ultra thế hệ mới với NPU tích hợp — tăng tốc AI, tiết kiệm pin ấn tượng.",
  },
  {
    icon: "Monitor",
    title: "Màn hình Dynamic AMOLED 2X 16\"",
    desc: "Độ phân giải 3K, 120Hz, cảm ứng, hỗ trợ HDR — màu sắc rực rỡ như trên Galaxy flagship.",
  },
  {
    icon: "RotateCw",
    title: "Bản lề xoay 360°",
    desc: "Bốn chế độ sử dụng: laptop, tablet, lều và trình chiếu — linh hoạt cho mọi tình huống.",
  },
  {
    icon: "PenTool",
    title: "S Pen đi kèm",
    desc: "Ghi chú, ký tài liệu và vẽ mượt mà với độ trễ thấp, không cần sạc.",
  },
  {
    icon: "Battery",
    title: "Pin 76Wh cả ngày dài",
    desc: "Lên tới 25 giờ phát video, sạc nhanh 65W qua USB-C — cắm 30 phút dùng cả buổi.",
  },
  {
    icon: "Smartphone",
    title: "Galaxy Ecosystem",
    desc: "Đồng bộ liền mạch với Galaxy phone, tablet, Buds — nhận cuộc gọi, chia sẻ tệp trong một chạm.",
  },
] as const;

export const steps = [
  { n: "01", title: "Mở máy & đăng nhập", desc: "Khởi động chỉ vài giây, đăng nhập Samsung Account để đồng bộ toàn bộ hệ sinh thái." },
  { n: "02", title: "Kết nối Galaxy của bạn", desc: "Quick Share, Multi Control và Second Screen tự động nhận diện các thiết bị Galaxy xung quanh." },
  { n: "03", title: "Sáng tạo & làm việc", desc: "Chuyển đổi giữa laptop và tablet, dùng S Pen để phác thảo ý tưởng bất cứ lúc nào." },
];

export const specs: Spec[] = [
  { label: "Bộ xử lý", value: "Intel Core Ultra 7 155H" },
  { label: "Màn hình", value: "16\" Dynamic AMOLED 2X · 3K · 120Hz · Cảm ứng" },
  { label: "RAM", value: "16 GB LPDDR5x" },
  { label: "Bộ nhớ", value: "512 GB / 1 TB NVMe SSD" },
  { label: "Đồ hoạ", value: "Intel Arc Graphics" },
  { label: "Pin & Sạc", value: "76Wh · Sạc nhanh 65W USB-C" },
  { label: "Cổng kết nối", value: "2× Thunderbolt 4 · USB-A · HDMI · microSD" },
  { label: "Kích thước", value: "355.4 × 252.2 × 12.8 mm · 1.66 kg" },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Nguyễn Minh Anh",
    role: "Kiến trúc sư",
    quote: "Màn hình AMOLED 16\" quá đẹp để dựng bản vẽ, gập lại thành tablet dùng S Pen cực tiện.",
    rating: 5,
  },
  {
    id: "2",
    name: "Trần Hoàng",
    role: "Kỹ sư phần mềm",
    quote: "Core Ultra 7 chạy Docker, IDE và trình duyệt cả chục tab vẫn mát, pin trụ nguyên ngày.",
    rating: 5,
  },
  {
    id: "3",
    name: "Lê Thu Hà",
    role: "Content Creator",
    quote: "Kết nối với Galaxy phone qua Quick Share nhanh không tưởng. Máy mỏng nhẹ, mang đi cà phê cả ngày.",
    rating: 5,
  },
];

export const faqs = [
  { q: "Galaxy Book5 Pro 360 có mấy tuỳ chọn cấu hình?", a: "Phiên bản đang bán tại Việt Nam gồm Intel Core Ultra 7 155H, 16 GB RAM LPDDR5x, tuỳ chọn SSD 512 GB hoặc 1 TB." },
  { q: "Máy có đi kèm S Pen không?", a: "Có. S Pen tặng kèm hộp máy, hỗ trợ 4096 mức áp lực, không cần sạc và có thể gắn từ tính vào thân máy." },
  { q: "Thời lượng pin thực tế bao lâu?", a: "Pin 76Wh cho tới 25 giờ phát video theo công bố của Samsung; sử dụng hỗn hợp văn phòng thường đạt 12–15 giờ. Sạc nhanh 65W qua USB-C." },
  { q: "Có tương thích với hệ sinh thái Galaxy không?", a: "Có, tích hợp đầy đủ Quick Share, Multi Control, Second Screen, Samsung Notes và Link to Windows với điện thoại Galaxy." },
  { q: "Chính sách bảo hành như thế nào?", a: "Bảo hành chính hãng Samsung Việt Nam 12 tháng, hỗ trợ tại hơn 80 trung tâm bảo hành trên toàn quốc." },
];
