import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      children={content}
      components={{
        h1: ({ node, ...props }) => <h1 className="text-3xl font-bold my-4" {...props} />,
        h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold my-3" {...props} />,
        p: ({ node, ...props }) => <p className="text-base leading-7 my-2 text-gray-800" {...props} />,
        code: ({ node, inline, className, children, ...props }) => {
          return inline ? (
            <code className="bg-gray-100 px-1 rounded text-sm font-mono" {...props}>
              {children}
            </code>
          ) : (
            <pre className="bg-gray-900 text-white p-3 rounded overflow-x-auto">
              <code className="language-js" {...props}>
                {children}
              </code>
            </pre>
          );
        },
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600" {...props} />
        ),
        li: ({ node, ...props }) => <li className="ml-5 list-disc" {...props} />
      }}
    remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeKatex]}
    />
  );
};


export default MarkdownRenderer;