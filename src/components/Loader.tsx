export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-800 rounded-full"></div>
        <div className="w-16 h-16 border-4 border-gray-900 dark:border-gray-100 border-t-transparent dark:border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
      </div>
    </div>
  );
}
