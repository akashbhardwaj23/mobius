


export default function Button({className, icons, children} : {
    className ? : string,
    icons ? : React.ReactNode,
    children : React.ReactNode
}){
    return <button className= {`flex items-center justify-center px-8 py-2 font-dm-sans rounded-4xl text-lg text-[#022183] bg-white hover:bg-[#022183] hover:text-white ${className}`}>
                        <span>{children}</span>
                        {icons ?? icons}
                    </button>
}