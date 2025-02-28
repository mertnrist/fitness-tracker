const Container = ({ children }) => {
    return (
        <div className="flex w-full h-auto items-center justify-center">
            <div className="w-[90%]">{children}</div>
        </div>
    )
}

export default Container
