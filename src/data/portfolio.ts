export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  about: string;
  skills: {
    category: string;
    items: string[];
  }[];
  projects: Project[];
  experience: Experience[];
}

export const portfolioData: PortfolioData = {
  name: "Đỗ Cao Minh",
  role: "Frontend Developer",
  tagline: "Đam mê phân tích dữ liệu kinh tế. Mong muốn áp dụng kiến thức vào môi trường thực tế, không ngừng học hỏi để phát triển định hướng chuyên nghiệp.",
  about: "Xin chào! Mình là Đỗ Cao Minh, sinh viên năm 3 chuyên ngành Phân tích dữ liệu kinh tế và chính sách công tại Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội (UEB). Hành trình học tập và làm việc của mình được thúc đẩy bởi niềm đam mê kết nối giữa phân tích dữ liệu chuyên sâu và các quyết định thực tế. Với thế mạnh sử dụng các công cụ phân tích dữ liệu như Power BI, Excel và Stata, mình tập trung vào việc chuyển hóa các tập dữ liệu phức tạp thành những thông tin giá trị (insights). Mình luôn hướng tới sự chủ động, tính trách nhiệm cao và cam kết hoàn thành công việc đúng hạn.",
  skills: [
    {
      category: "Data Analysis",
      items: ["Thu thập, làm sạch và xử lý dữ liệu, xây dựng dashboard trực quan."],
    },
    {
      category: "Công cụ hỗ trợ",
      items: ["Power BI", "Stata", "Python (Cơ bản)", "Excel", "Word", "Canva"],
    },
  ],
  projects: [
    {
      title: "SSI Stock Assistant - Trợ lý AI Phân tích Cổ phiếu",
      description: "Xây dựng và triển khai chatbot trợ lý AI thông minh hỗ trợ phân tích định lượng và phân tích cơ bản cho thị trường chứng khoán Việt Nam. Hệ thống tự động truy vấn và xử lý dữ liệu từ Vnstock, giúp người dùng tra cứu nhanh thông tin, chỉ số tài chính và các nhận định thị trường một cách trực quan.",
      tech: ["LLM", "Cloudflare Workers", "Vnstock Data", "Next.js", "AI Agent"],
      link: "https://llm-chat-app-template.mc13022005.workers.dev",
    },
    {
      title: "Nghiên cứu Phương án Sàn TMĐT cho Coolmate",
      description: "Ứng dụng web hiệu năng cao được xây dựng với Next.js và Tailwind CSS.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "UniSwap - Nền tảng Re-commerce",
      description: "Bảng điều khiển tương tác trực quan hóa dữ liệu kinh tế phức tạp.",
      tech: ["React", "D3.js", "TypeScript"],
    },
  ],
  experience: [
    {
      company: "Công ty Cổ phần Chứng khoán SSI",
      role: "Thực tập sinh",
      period: "2026 - Hiện tại",
      description: "Ứng dụng phân tích dữ liệu và công nghệ số để tối ưu hóa quy trình nghiên cứu, hỗ trợ ra quyết định đầu tư hiệu quả.",
      achievements: [
        "Thực hiện nghiên cứu, phân tích chuyên sâu và viết báo cáo chi tiết về các mã cổ phiếu tiềm năng (Tiêu biểu: Báo cáo phân tích cổ phiếu Ngân hàng VIB).",
        "Nghiên cứu và xây dựng chatbot tự động cung cấp thông tin mã chứng khoán dựa trên cơ sở dữ liệu lớn phục vụ tra cứu nhanh.",
        "Hỗ trợ thu thập, xử lý và trực quan hóa dữ liệu thị trường tài chính, góp phần nâng cao hiệu suất làm việc của phòng ban.",
      ],
    },
  ],
};
