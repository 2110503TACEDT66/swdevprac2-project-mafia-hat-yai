import Image from "next/image"

export default async function Add() {

    return (
        <main className="text-center p-5 mt-5 m-5">
            <h1 className='text-lg font-medium'></h1>
            <div className="flex flex-row my-5">
                <Image src="/img/a01.jpg"
                    alt='Product Picture'
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%] bg-black" />
                <div className="text-md mx-5 text-left">
                    <div className="text-4xl font-bold m-5">Reservation Restaurant Platform</div>
                    <p className="m-5">Work along like-minded professionals in our vibrant coworking spaces in Bangkok, with break out areas and networking events to foster collaboration and growth. Drop in and hot-desk in an open-plan workspace, or reserve your own dedicated desk in a shared office.</p>
                    
                </div>
            </div>
        </main>
    )
}