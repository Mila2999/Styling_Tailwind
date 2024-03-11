export default function Input({ label, invalid, ...props }) {
  let inputClasses = 'w-full px-3 py-2 leading-tight  border rounded shadow ';

  let lableClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase';

  if (invalid) {
    lableClasses += ' text-red-400';
    inputClasses += ' text-red-500 bg-red-100';
  } else {
    lableClasses += ' text-stone-300';
    inputClasses += ' text-gray-700 bg-stone-300 border-red-300';
  }

  return (
    <p>
      <label className={lableClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
}
