export default function Card({ children, className = '' }) {
 return <div className={`bg-white shadow-sm p-6 ${className}`}>{children}</div>
}
