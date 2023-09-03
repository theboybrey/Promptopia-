"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
  
  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  }
  
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer ">
          <Image
          src={post.creator.image}
          alt={post.creator.name}
          width={40}
          height={40}
          className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-inter font-semibold text-gray-900">{post.creator.username}</h3>
            <p className="text-sm text-gray-500">{post.creator.email}</p>
          </div>
        </div>

      {/* Copy Button */}
      <div className="copy_btn" onClick={handleCopy}>
        <Image
        src={ copied === post.prompt ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
        width={12}
        height={12}
        />
      </div>

      </div>

      <p className="my-4">{post.prompt}</p>
      <p className="text-sm font-inter text-gray-400 cursor-pointer hover:text-gray-600"
      onClick={() => handleTagClick && handleTagClick(post.tag)}
      >#{post.tag}</p>
    </div>
  )
}

export default PromptCard