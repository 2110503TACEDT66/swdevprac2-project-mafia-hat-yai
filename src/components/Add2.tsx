import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

export default function Add2() {
    return (
        <div className="flex flex-row mt-5">
        <InteractiveCard contentName='hello'>
                <div className="w-full h-[70%] relative rounded-t-lg">
                    <Image src="/img/res01.jpg"
                        alt='Product Picture'
                        layout="fill"
                        className='object-cover rounded-t-lg'
                    />
                </div>
        </InteractiveCard>
        <InteractiveCard contentName='hello'>
                <div className="w-full h-[70%] relative rounded-t-lg">
                    <Image src="/img/res02.jpg"
                        alt='Product Picture'
                        layout="fill"
                        className='object-cover rounded-t-lg'
                    />
                </div>
        </InteractiveCard>
        <InteractiveCard contentName='hello'>
                <div className="w-full h-[70%] relative rounded-t-lg">
                    <Image src="/img/res03.jpg"
                        alt='Product Picture'
                        layout="fill"
                        className='object-cover rounded-t-lg'
                    />
                </div>
        </InteractiveCard>
        </div>
    );
}
