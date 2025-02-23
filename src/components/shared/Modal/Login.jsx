import Button from "../Button"

const Login = () => {
    return (
        <form className="flex flex-col gap-5">
            <div className="flex flex-col w-full gap-2">
                <label htmlFor="username">Kullanıcı Adı</label>
                <input className="p-2 border-1 border-gray-500 outline-0" id="username" type="text" placeholder="" />
            </div>
            <div className="flex flex-col w-full gap-2">
                <label htmlFor="password">Şifre</label>
                <input className="p-2 border-1 border-gray-500 outline-0" id="password" type="password" placeholder="" />
            </div>
            <Button>
                <input type="submit" value="Giriş Yap" className=" cursor-pointer text-center" />
            </Button>
        </form>
    )
}

export default Login
