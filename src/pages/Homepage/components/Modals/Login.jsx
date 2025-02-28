import Button from "../../../../components/shared/Button"

const Login = () => {
    return (
        <form className="flex flex-col gap-5">
            <div className="flex flex-col w-full gap-2">
                <label htmlFor="username" className="text-zinc-200">Kullanıcı Adı</label>
                <input
                    className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg outline-none focus:border-amber-500 transition-colors text-white"
                    id="username"
                    type="text"
                />
            </div>
            <div className="flex flex-col w-full gap-2">
                <label htmlFor="password" className="text-zinc-200">Şifre</label>
                <input
                    className="p-3 bg-zinc-800 border border-zinc-700 rounded-lg outline-none focus:border-amber-500 transition-colors text-white"
                    id="password"
                    type="password"
                />
            </div>
            <Button>
                <input type="submit" value="Giriş Yap" className="cursor-pointer text-center w-full" />
            </Button>
        </form>
    )
}

export default Login
