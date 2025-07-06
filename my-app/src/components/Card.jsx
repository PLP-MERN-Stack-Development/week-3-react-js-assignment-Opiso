export default function Card({ title, children }) {
  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
      {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
      {children}
    </div>
  );
}
