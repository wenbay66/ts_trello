type TextProps = {
    children: React.ReactNode,
    className?: string
}

export const H5 = ({ className='', children='' }: TextProps) => (
    <h5 className={`text-slate-700 font-semibold ${className}`}>{children}</h5>
);