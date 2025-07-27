interface Props{
    id: number;
    content: string;
    author_username: string;
    created_at: string;
}
const PostedComment:React.FC<Props> = ({id, content, author_username, created_at}) => {
    return (
    <div key={id} className="border-t p-2 sm:p-3 dark:border-zinc-700 border-gray-200">
        <p className="text-sm sm:text-base text-zinc-700 dark:text-stone-300">{content}</p>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-stone-500">
        by {author_username} • {new Date(created_at).toLocaleString()}
        </p>
    </div>
);

}
export default PostedComment;