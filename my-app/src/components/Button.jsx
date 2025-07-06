const variants = {
  primary: 'bg-blue-600 hover:bg-blue-700',
  secondary: 'bg-gray-600 hover:bg-gray-700',
  danger: 'bg-red-600 hover:bg-red-700',
};

export default function Button({ variant = 'primary', children, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded text-white font-semibold ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
