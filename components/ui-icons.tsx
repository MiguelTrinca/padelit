type IconProps = React.HTMLAttributes<SVGElement>

export const UIIcons = {
    leftArrow: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
            <path 
                id="Vector" 
                d="M19 12H5" 
                stroke="currentColor"
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                id="Vector_2" 
                d="M12 19L5 12L12 5" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    ),

    x: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
        <path 
            d="M18 6L6 18" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path 
            d="M6 6L18 18" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
        </svg>
    ),
}