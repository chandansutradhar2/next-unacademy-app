"use client";
import { useParams } from "next/navigation";

export default function Page() {
  const router = useParams();
  console.log(router);
  const { courseId } = router;

  return (
    <div className="p-6 max-w-sm mx-auto bg-slate-100 rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0"></div>
      <div>
        <div className="text-xl font-medium text-black">
          Course Detail for course Id {courseId}
        </div>
        <p className="text-slate-500">You have a new message!</p>
        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Message
        </button>
      </div>
    </div>
  );
}
