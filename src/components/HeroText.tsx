import React from 'react';
import { Button } from './ui/button';


const HeroText: React.FC = () => {
    

    return (
        <div>
            <div className="max-w-3xl mx-auto text-center mt-14">
                <h1 className="font-extrabold text-5xl">
                    View Various Company<br />
                        Data Efficiently
                </h1>
                {/* <>
                    <div className="">
                        <Button className="bg-black mt-10">
                            Create Event
                        </Button>
                    </div>
                </> */}
            </div>
        </div>
    );
}

export default HeroText;
