const Loader = () =>{
    return (
        <>
            <div className="flex items-center justify-center space-x-4 sm:space-x-6 m-4">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-zinc-800 dark:bg-stone-50 rounded-full animate-pulse delay-0"></span>
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-zinc-800 dark:bg-stone-50 rounded-full animate-pulse delay-150"></span>
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-zinc-800 dark:bg-stone-50 rounded-full animate-pulse delay-300"></span>
            </div>
        </>
    );

}
export default Loader;