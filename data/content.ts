import type { Spec, Testimonial } from "@/services/api";

export const features = [
  {
    icon: "Cpu",
    title: "Intel Core Ultra 7",
    desc: "Trang bị bộ xử lý Intel Core Ultra 7 thế hệ mới với kiến trúc hybrid hiệu suất cao, tích hợp Intel AI Boost (NPU) chuyên xử lý các tác vụ trí tuệ nhân tạo ngay trên thiết bị. Máy vận hành mượt mà khi lập trình, chỉnh sửa ảnh, dựng video, họp trực tuyến hay chạy nhiều ứng dụng cùng lúc, đồng thời tối ưu mức tiêu thụ điện năng để kéo dài thời lượng pin.",
  },
  {
    icon: "Monitor",
    title: 'Màn hình Dynamic AMOLED 2X 16"',
    desc: "Màn hình Dynamic AMOLED 2X độ phân giải 3K mang lại hình ảnh sắc nét, màu sắc sống động và độ tương phản cao. Tần số quét 120Hz giúp thao tác cuộn trang và chuyển cảnh mượt mà, trong khi khả năng cảm ứng đa điểm cùng hỗ trợ HDR và độ phủ màu DCI-P3 gần như hoàn hảo đáp ứng tốt nhu cầu thiết kế, chỉnh sửa nội dung và giải trí.",
  },
  {
    icon: "RotateCw",
    title: "Bản lề xoay 360°",
    desc: "Thiết kế bản lề 360° cho phép chuyển đổi linh hoạt giữa bốn chế độ sử dụng gồm Laptop, Tablet, Tent và Presentation. Người dùng có thể dễ dàng ghi chú, thuyết trình, xem phim hoặc làm việc nhóm chỉ với một thao tác gập mở, mang lại trải nghiệm linh hoạt trong nhiều môi trường sử dụng khác nhau.",
  },
  {
    icon: "PenTool",
    title: "S Pen đi kèm",
    desc: "Galaxy Book5 Pro 360 đi kèm S Pen chính hãng với độ trễ thấp và khả năng nhận diện lực nhấn chính xác. Người dùng có thể ghi chú trực tiếp trên tài liệu, phác thảo ý tưởng, ký văn bản hoặc chỉnh sửa hình ảnh tự nhiên như viết trên giấy mà không cần sạc bút.",
  },
  {
    icon: "Battery",
    title: "Pin 76Wh cả ngày dài",
    desc: "Viên pin dung lượng 76Wh cho thời lượng sử dụng lên đến khoảng 25 giờ phát video trong điều kiện tiêu chuẩn. Công nghệ sạc nhanh USB-C 65W giúp nạp đáng kể dung lượng chỉ sau khoảng 30 phút, đáp ứng tốt nhu cầu học tập, làm việc và di chuyển cả ngày mà không cần mang theo bộ sạc thường xuyên.",
  },
  {
    icon: "Smartphone",
    title: "Galaxy Ecosystem",
    desc: "Kết nối liền mạch với hệ sinh thái Galaxy thông qua các tính năng như Multi Control, Second Screen, Quick Share, Phone Link và Samsung Notes. Người dùng có thể chia sẻ tệp tin tức thì, điều khiển nhiều thiết bị bằng một bộ bàn phím và chuột, nhận cuộc gọi, đồng bộ ghi chú và tiếp tục công việc trên nhiều thiết bị một cách thuận tiện.",
  },
] as const;

export const specs: Spec[] = [
  { label: "Bộ xử lý", value: "Intel® Core™ Ultra 7 Series 2 Processor 256V" },
  { label: "Màn hình", value: "16\" Dynamic AMOLED 2X · 3K · 120Hz · Màn hình chống phản chiếu với màn hình cảm ứng" },
  { label: "RAM", value: "16 GB LPDDR5X Memory (On Package)" },
  { label: "Bộ nhớ", value: "512 GB / 1 TB NVMe SSD" },
  { label: "Đồ hoạ", value: "Intel® Arc™ 140V GPU (8GB)" },
  { label: "Pin & Sạc", value: "76Wh · Sạc nhanh 65W USB-C" },
  { label: "Cổng kết nối", value: "2× Thunderbolt 4 · USB-A · HDMI · microSD" },
  { label: "Microsoft copilot", value: "Copilot AI assistance Copilot+ PC*" },
  { label: "Kích thước", value: "355.4 × 252.2 × 12.8 mm · 1.69 kg" },
  { label: "Webcam", value: "FHD" },
  { label: "Hệ điều hành", value: "Windows bản quyền" },
  { label: "Màu sắc", value: "Xám, Bạc" },
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
