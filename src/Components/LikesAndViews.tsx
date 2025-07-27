import { FaEye, FaThumbsUp } from "react-icons/fa";
interface LikesAndViewsProps {
  likes: number;
  views: number;
}
export default function LikesAndViews({likes , views} : LikesAndViewsProps){
    console.log(likes+''+views)
    return (
    <span className="absolute top-2 right-2 flex items-center gap-2 sm:gap-4 rounded px-2 sm:px-3 py-1 text-xs sm:text-sm">
        <span className="flex items-center gap-1 text-gray-500">
        <FaThumbsUp /> {likes}
        </span>

        <span className="flex items-center gap-1 text-gray-500">
        <FaEye /> {views}
        </span>
    </span>
    );

}