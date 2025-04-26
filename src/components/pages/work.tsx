



export default function WorkPage(){
    return (
        <main className="bg-white h-96">
            <div className="max-w-4xl mx-auto pt-10">
            <h2 className="text-3xl text-primary mb-20">How we work?</h2>
            <ul className="flex h-52 gap-16">
                    <li className="w-60">
                        <div className="rounded-full mb-2 border flex justify-center items-center text-black text-3xl border-hover h-14 w-14">
                            1
                        </div>
                        <hr className="border border-black mb-4 w-32" />
                        <h3 className="text-primary font-medium">
                        Submit Intake Form
                        </h3>
                    </li>
                    <li className="w-60">
                    <div className="rounded-full mb-2 border flex justify-center items-center text-black text-3xl border-hover h-14 w-14">
                            2
                        </div>
                        <hr className="border border-black mb-4 w-32" />
                        <h3 className="text-primary font-medium">
                        We do the search and curation for list of jobs
                        </h3>
                    </li>
                    <li className="w-60">
                    <div className="rounded-full mb-2 border flex justify-center items-center text-black text-3xl border-hover h-14 w-14">
                            3
                        </div>
                        <hr className="border border-black mb-4 w-32" />
                        <h3 className="text-primary font-medium">
                        You approve, we do the tedious part (applying)
                        </h3>
                    </li>
                    <li className="w-60">
                    <div className="rounded-full mb-2 border flex justify-center items-center text-black text-3xl border-hover h-14 w-14">
                            4
                        </div>
                        <hr className="border border-black mb-4 w-32" />
                        <h3 className="text-primary font-medium">
                        You get the interviews
                        </h3>
                    </li>
            </ul>
            </div>
            
        </main>
    )
}