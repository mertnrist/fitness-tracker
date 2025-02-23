const Button = ({ children, ...props }) => {
    return (
        <a className="w-auto bg-white text-black border-b-12 cursor-pointer border-b-gray-500 p-5 text-2xl font-bold text-center" {...props}>
            {children}
        </a>
    )
}

export default Button
