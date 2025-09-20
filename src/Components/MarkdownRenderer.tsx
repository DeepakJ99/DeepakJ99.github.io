import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
type Props = {
  content: string;
};
const MarkdownRenderer = ({ content } : Props) => {
  return (
    <ReactMarkdown
      children={content}
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-2xl sm:text-3xl font-bold my-4" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-xl sm:text-2xl font-semibold my-3" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="text-sm sm:text-base leading-6 sm:leading-7 my-2" {...props} />
        ),
        code: ({ className, children, ...props }) => {
          return (
            <pre className="bg-black text-white p-2 sm:p-3 rounded overflow-x-auto text-sm sm:text-base">
              <code className="language-js" {...props}>
                {children}
              </code>
            </pre>
          );
        },
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-gray-400 pl-3 sm:pl-4 italic" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="ml-4 sm:ml-5 list-disc" {...props} />
        ),
      }}
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex]}
    />
  );

};


export default MarkdownRenderer;