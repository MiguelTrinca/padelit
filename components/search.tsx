'use client'
import React from 'react'
import { UIIcons } from "@/components/ui-icons"

type SearchInputType = {
  iconColor: string;
  placeholder: string;
  width?: string | "" 
}

const SearchInput: React.FC<SearchInputType> = ({
  iconColor,
  placeholder,
  width,

}) => {

  const handleSearch = () => {
    alert("You Search For something")
  }

  const className = 'border border-muted/70 rounded-md py-2 pl-8 pr-3 text-inter ring-2 ring-transparent focus-visible:ring-primary focus-visible:border-transparent focus:outline-none placeholder:text-muted ' + width

  return (
    <div className='relative'>
      <input
        className={className}
        placeholder={placeholder}
      />
      <div className='absolute px-1 inset-y-0 flex items-center'>
          <UIIcons.magnifier
            className={'w-5 h-5 ' + iconColor}
            onClick={handleSearch}
          />
      </div>
    </div>
  )
}

export default SearchInput