import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (

<input
  id="fancy-input"
  type={type}
  data-slot="input"
  className={cn(
    "peer", 
    "border-0 border-b border-gray-300 focus:border-black focus:ring-0",
    "placeholder:uppercase placeholder:font-extrabold placeholder-black",
    "dark:bg-input/30 flex h-9 w-full min-w-0 rounded-none bg-transparent px-3 pt-2 pb-2 md:pb-4 text-base shadow-none transition-[color,box-shadow] outline-none",
    "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    className
  )}
  {...props}
/>

  )
}

export { Input }
