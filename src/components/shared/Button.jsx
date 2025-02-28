const Button = ({ children, ...props }) => {
    return (
        <a className="w-auto bg-amber-500 text-black border-b-12 cursor-pointer border-b-amber-600 p-5 text-2xl font-bold text-center" {...props}>
            {children}
        </a>
    )
}

export default Button
