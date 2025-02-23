import Button from '../Button/index'

const Register = () => {
    return (
        <form className="flex flex-col gap-5">
            <div className="flex flex-col w-full gap-2">
                <label htmlFor="username">Kullanıcı Adı</label>
                <input className="p-2 border-1 border-gray-500 outline-0" id="username" type="text" placeholder="" />
            </div>
            <div className="flex flex-col w-full gap-2">
                <label htmlFor="email">E Posta</label>
                <input className="p-2 border-1 border-gray-500 outline-0" id="email" type="email" placeholder="" />
            </div>
            <div className="flex flex-col w-full gap-2">
                <label htmlFor="password">Şifre</label>
                <input className="p-2 border-1 border-gray-500 outline-0" id="password" type="password" placeholder="" />
            </div>
            <div className="flex flex-col w-full gap-2">
                <label htmlFor="repassword">Tekrar Şifre</label>
                <input className="p-2 border-1 border-gray-500 outline-0" id="repassword" type="password" placeholder="" />
            </div>
            <Button>
                <input type="submit" value="Kayıt Ol" className=" cursor-pointer text-center" />
            </Button>
        </form>
    )
}

export default Register
