import React from 'react';

// Images
import plus from "../assets/plus.png"
import docs from "../assets/docs.png"
import currency from "../assets/currency.png"
import camera from "../assets/camera.png"
import microphone from "../assets/microphone.png"


const MessageBoxFooter = () => {
    return (
        <>

            <section>
                <div className="container">
                    <div className='flex justify-between h-[70px] mt-3'>
                        <div>
                            <img src={plus} alt="" />
                        </div>
                        <div className='w-[196px] h-[32px] border-2 border-slate-200 rounded-xl flex items-center justify-center'>
                            <input className='outline-none px-2 w-[160px]' type="text" />
                            <img src={docs} alt="" />
                        </div>
                        <div>
                            <img src={currency} alt="" />
                        </div>
                        <div>
                            <img src={camera} alt="" />
                        </div>
                        <div>
                            <img src={microphone} alt="" />
                        </div>
                    </div>
                    <span className='w-[134px] h-[5px] flex mx-auto bg-black rounded-xl'></span>
                </div>
            </section>

        </>
    );
};

export default MessageBoxFooter;