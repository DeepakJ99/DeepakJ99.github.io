

type TagListProps = {
  tags: string[];
  setSearchTerm? : (term : string) => void 
};

export default function Tags({ tags, setSearchTerm }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-6">
      {tags.map((tag, idx) => (
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent parent 
            e.preventDefault();
            if(setSearchTerm) setSearchTerm(`#${tag}`)
            }}
          key={idx}
          className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 dark:bg-zinc-700 dark:text-blue-200"
        >
          #{tag}
        </button>
      ))}
    </div>
  );
}
