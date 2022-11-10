import React from 'react';

const Wellcome = () => {
    return (
        <div className="bg-[#F0E8FE] p-2 text-[#844ffa] ">
            <div className="text-center text-xs sm:text-sm prose mx-auto text-light-purple prose-a:text-light-purple hover:prose-a:text-dark-purple">
                Welcome to our new site! Find out about our
                <a href="#" className=' text-[#6211cb] underline font-semibold'> rebrand</a>
            </div>
        </div>
    );
};

export default Wellcome;