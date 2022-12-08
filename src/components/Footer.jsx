import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-4 lg:gap-8 py-3 w-full text-center bg-main text-white text-sm font-cairo">
      <Link to="/privacy-policy">سياسة الخصوصية</Link>
      <Link to="/terms-conditions">اتفاقية الاستخدام</Link>
      <a href="">اتصل بنا</a>
    </div>
  )
}

export default Footer
