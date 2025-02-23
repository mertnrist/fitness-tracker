const Header = () => {
    const setRegisterModal = useModalStore((state) => state.changeRegisterModal)
    return (
        <div className='flex justify-between items-center  '>
            <div className="flex flex-col gap-5 w-100 pt-20 pb-20">
                <div className="text-4xl font-bold">Spor yolculuğunuza ortak olalım</div>
                <p className="text-[12px]">Gelişimini eski usul not defterleriyle mi takip etmeye devam edeceksin, yoksa modern dünyanın sunduğu imkanlardan yararlanarak tamamen ücretsiz bir şekilde bu hizmetten faydalanmak mı istersin? Geçmişin alışkanlıklarına bağlı kalmak mı, yoksa geleceğe bir adım atmak mı? Seçim senin!</p>
                <button className="w-60 bg-white text-black border-b-12 cursor-pointer border-b-gray-500 p-5 text-2xl font-bold" onClick={(e) => setRegisterModal(true)}>Hemen Kayıt Ol</button>
            </div>
            <div className='w-100'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    style={{ enableBackground: "new 0 0 100 100" }}
                    xmlSpace="preserve"
                    fill='#111111'
                >
                    <path d="M48.5,20.7c0,0,3.5-3.6,9.1-3.5c5.6,0.1,8.5,3.3,8.5,3.3L70.4,9l-8.8,2.3l-4-6.9l-4.4,7.1l-9-2.9L48.5,20.7z" />
                    <path d="M57.6,20.9c5.4,0,9.9,4.4,9.9,9.9c0,5.4-4.4,9.8-9.9,9.8c-5.4,0-9.8-4.4-9.8-9.8C47.8,25.3,52.2,20.9,57.6,20.9L57.6,20.9z" />
                    <path d="M93.2,81.9c-5.2-1.7-6.9-1.7-12,0c-5.3,1.8-7.4,1.8-12.8,0c-5.4-1.8-7-1.7-12,0c-5.4,1.8-7.5,1.8-12.8,0  c-5.2-1.7-6.9-1.7-12,0c-5.3,1.8-7.4,1.8-12.8,0c-2.6-0.9-4.7-1.3-6.1-1.3c-1.3,0-3.3,0.4-6,1.3c-2.4,0.8-4.4,1.2-5.9,1.3v8l0,0.3  c0.9-0.5,2.9-0.9,5.6-1.8c5.5-1.8,7.5-1.7,12.7,0c5.1,1.7,6.6,1.8,12,0c5.4-1.8,7.4-1.8,12.8,0c5.4,1.8,6.9,1.7,12,0  c5.2-1.7,7.2-1.8,12.7,0c5.1,1.7,6.6,1.8,12,0c5.4-1.8,7.5-1.8,12.8,0c2.3,0.8,4.1,1.2,5.5,1.3v-7.6C97.8,83.4,95.8,82.8,93.2,81.9z  " />
                    <path d="M81.9,62.4V54c0-7.1-5.1-11.1-12-11.1H44.6c-6.9,0-12,4-12,11.1v8.4h-7.4V40.3h6.1c0.6,0,1.1-0.3,1.5-0.7  c0.4-0.4,0.6-1,0.6-1.6c0,0,0-22.6,0-22.6s-2.4,7.3-3.1,12.3c-0.6,4.4-0.9,8.3-0.9,8.3h-4.2v-5c0-9.4-2.1-22.6-2.1-22.6  S21.1,21.5,21.1,31v5h-4.2c0,0-0.3-3.9-0.9-8.3c-0.7-4.9-3.1-12.3-3.1-12.3s0,22.5,0,22.6c0,0.6,0.2,1.2,0.6,1.6  c0.4,0.4,1,0.7,1.5,0.7h6.1v22.1h-4.2c-2.4,0-4.3,1.9-4.3,4.3s1.9,4.3,4.3,4.3l0,0h4.2v6.8c1.6,0.4,2.9,0.6,4.2,0.6V71h9.4v0h6.6V57  h3.4v20.4c4.5,1.4,6.7,1.3,11.7-0.4c5.1-1.7,6.6-1.8,12,0c0.4,0.1,0.8,0.2,1.1,0.4V57h3.4l0,21.3c2.6,0.4,4.7,0,8.3-1.2  c0.3-0.1,0.5-0.2,0.8-0.3L81.9,62.4L81.9,62.4z" />
                </svg>
            </div>
        </div >
    )
}

export default Header
