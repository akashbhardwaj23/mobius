import {motion} from "motion/react"


export default function Button({className, icons, children} : {
    className ? : string,
    icons ? : React.ReactNode,
    children : React.ReactNode
}){



    return <motion.button 
        whileHover={{scale : 1.1}}
        transition={{type:"spring", damping:10, stiffness:200}}
    className= {`flex items-center justify-center px-8 py-2 rounded-4xl text-lg cursor-pointer ${className}`}>
                        <span>{children}</span>
                        {icons ?? icons}
                    </motion.button>
}