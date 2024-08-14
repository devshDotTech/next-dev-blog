// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { default as atelierCaveDark } from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark";
// import rehypeRaw from 'rehype-raw'

// const customStyle = {

//   lineHeight: '1.5',

//   fontSize: '1rem',

//   borderRadius: '5px',

//   backgroundColor: '#282C34',

//   'padding': '20px',
//   color: 'rgb(212 212 212)',
//   'text-shadow': 'none',

// };

// const Content = ({ content }: { content: string }) => {
//   return (
//     <div className='container max-w-3xl mx-auto px-4 text-white' >
//       <button className="bg-red-500">Hello</button>
//       <ReactMarkdown
//         remarkPlugins={[remarkGfm]}
//         rehypePlugins={[rehypeRaw]}
//         components={{
//           code({ node, className, children, ...props }) {
//             const language = className?.replace('language-', '');
//             const codeString = Array.isArray(children) && typeof children[0] === 'string' ? children[0] : '';

//             return language ? (
//               <div className="code-block">
//                 <button className="copy-button" onClick={() => navigator.clipboard.writeText(codeString)}>
//                   Copy
//                 </button>
//                 <SyntaxHighlighter
//                   PreTag="div"
//                   language={language}
//                   style={atelierCaveDark}
//                   customStyle={customStyle}>
//                   {codeString.trim()}
//                 </SyntaxHighlighter>
//               </div>
//             ) : (
//               <code className={className} {...props}>
//                 {children}
//               </code>
//             );
//           },
//         }}
//       >
//         {content}
//       </ReactMarkdown>
//     </div>
//   )
// }

// export default Content

// import React from 'react';
// import ReactMarkdown from 'react-markdown';
// import rehypeRaw from 'rehype-raw';
// import rehypeHighlight from 'rehype-highlight';
// import 'highlight.js/styles/atom-one-dark.css'; // Ensure this path is correct

// const Content = ({ content }: { content: string }) => (
//   <ReactMarkdown
//     rehypePlugins={[rehypeRaw, rehypeHighlight]}
//   >
//     {content}
//   </ReactMarkdown>
// );

// export default Content;
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

const CodeBlock = ({ language, value }: { language?: string; value: string }) => {
  return (
    <pre className=" text-white py-4 rounded-lg">
      <SyntaxHighlighter language={language || 'javascript'} style={oneDark}>
        {value}
      </SyntaxHighlighter>
    </pre>
  );
};

const Content =  ({ content }: { content: string }) => (
  <div className='max-w-3xl mx-auto text-text-primary text-xl' >
    <ReactMarkdown
      className='markdown'
      remarkPlugins={[remarkGfm]}
      // rehypePlugins={[rehypeRaw]}
      components={{
        code({ node, className, children, ...props }) {
          const language = className?.replace(/language-/, '');
          return language ? (
            <CodeBlock language={language} value={String(children).trim()} />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        // h1: ({ node, ...props }) => <h1 className="text-5xl font-bold my-4" {...props} />,
        // h2: ({ node, ...props }) => <h2 className="text-4xl font-semibold my-3" {...props} />,
        // h3: ({ node, ...props }) => <h2 className="text-3xl font-semibold my-3" {...props} />,
        // p: ({ node, ...props }) => <p className="text-xl text-white my-2" {...props} />,
        // a: ({ node, ...props }) => <a className="text-blue-500 hover:text-blue-700 underline" {...props} />
        // div: ({ node, ...props }) => <div className='markdown' ></div>
      }}
    >
      {content}
    </ReactMarkdown>
  </div>
);

export default Content