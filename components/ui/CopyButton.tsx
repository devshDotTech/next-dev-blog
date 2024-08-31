// import Image from 'next/image'
// import React from 'react'

// const CopyButton = ({ children, size = 25 }: {
//     size?: number,
//     children: React.ReactNode;
// }) => {
//     const [copyOk, setCopyOk] = React.useState(false);

//     const iconColor = copyOk ? '#0af20a' : '#ddd';
//     const icon = copyOk ? 'fa-check-square' : 'fa-copy';

//     const handleClick = (e: any) => {

//         if (React.isValidElement(children) && children.props.children) {
//             const textToCopy = Array.isArray(children.props.children)
//                 ? children.props.children[0]
//                 : children.props.children;

//             // Writing text to clipboard
//             navigator.clipboard.writeText(String(textToCopy));

//             setCopyOk(true);
//             setTimeout(() => {
//                 setCopyOk(false);
//             }, 500);
//         }
        
//     }
//     return (
//         <div onClick={(e) => handleClick(e)} className={`p-2 rounded-md border cursor-pointer border-white ${iconColor}`} >
//             <Image src={'copy-white.svg'} alt='copy' width={size} height={size}></Image>
//         </div>
//     )
// }

// export default CopyButton

import React from 'react';
import Image from 'next/image';

const CopyButton = ({ value, size = 26 }: { value: string; size?: number }) => {
  const [copyOk, setCopyOk] = React.useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(value);
    setCopyOk(true);
    setTimeout(() => setCopyOk(false), 1000);
  };

  return (
    <div
      onClick={handleClick}
      className="absolute right-8 top-9 p-1 cursor-pointer border bg-transparent border-neutral-500 hidden group-hover:block"
    >
      <Image
        src={copyOk ? '/check-white.svg' : '/copy-white.svg'}
        alt="copy"
        width={size}
        height={size}
      />
    </div>
  );
};

export default CopyButton;