import React from 'react'
import simChip from '../assets/images/sim-chip.svg'
import cardCircle from '../assets/images/card-circle.svg'
import simChip2 from '../assets/images/Chip_Card.svg'
import blackCircle from '../assets/images/black-circle.svg'

function Cards() {
    const creditcards = [
        {
            balanceText: 'Balance', balance: '$5756', icon1: simChip, icon2: cardCircle, cardNumber: '3778 38725741234', ownerName: 'Eddy Cusuma', ExpiryText: 'Expiry Date', ExpiryDate: '12 / 23', cardType: 'Credit Card', ownerText: 'CARD HOLDER',
        },
        {
            balanceText: 'Balance', balance: '$5756', icon1: simChip2, icon2: blackCircle, cardNumber: '3778 38725741234', ownerName: 'Eddy Cusuma', ExpiryText: 'Expiry Date', ExpiryDate: '12/23', cardType: 'Credit Card', ownerText: 'CARD HOLDER',
        }

    ];
    
        const maskCardNumber = (number) => {
            if (!number || number.length !== 15) {
                return 'Invalid Card Number';
        }
        return number.slice(0, 4) + " **** **** " + number.slice(11, 16);
    }
    

    return (
        <>
            <div className='flex lg:overflow-hidden  gap-[30px] w-full justify-between'>
                {
                    creditcards.map((creditcards, index) => (
                        <div className={` pt-[15px]  w-[350px] bg-[#5B5A6F] rounded-3xl flex flex-col gap-[29px] ${index === 1 ? 'bg-white' : 'bg-custom-gradient'} ${index === 1 ? 'text-black' : 'text-white'} border border-[#DFEAF2] `}>
                            <div className='flex px-6 justify-between items-center'>
                                <div className=''>
                                    <p className={`text-[12px] font-lato font-[400] ${index === 1 ? 'text-[#343C6A]' : 'text-white'}`}>{creditcards.balanceText}</p>
                                    <p className={`text-[20px] font-lato font-[600] ${index === 1 ? 'text-[#343C6A]' : 'text-white'}`}>{creditcards.balance}</p>
                                </div>
                                <div>
                                    <img src={creditcards.icon1} alt="card-chip" />
                                </div>
                            </div>
                            <div className='flex px-6 items-center justify-between gap-5 lg:justify-start lg:gap-[67px]'>
                                <div>
                                    <p className={`text-[12px] font-lato font-[400] ${index === 1 ? 'text-[#343C6A]' : 'text-white'}`}>{creditcards.ownerText}</p>
                                    <p className={`text-[14px] font-lato font-[600] ${index === 1 ? 'text-[#343C6A]' : 'text-white'}`}>{creditcards.ownerName}</p>
                                </div>
                                <div>
                                    <p className={`text-[12px] font-lato font-[400] ${index === 1 ? 'text-[#343C6A]' : 'text-white'}`}>{creditcards.ExpiryText}</p>
                                    <p className={`text-[15px] font-lato font-[600] ${index === 1 ? 'text-[#343C6A]' : 'text-white'}`}>{creditcards.ExpiryDate}</p>
                                </div>
                            </div>
                            <div className={`flex px-6  items-center justify-between rounded-b-3xl  py-[15px] ${index === 0 ? 'bg-[#5B5A6F]' : 'border-t-[1px]'}`}>
                                <p handl className={`text-[22px] font-lato font-[600] ${index === 1 ? 'text-[#343C6A]' : 'text-white'}`}>{maskCardNumber(creditcards.cardNumber)}</p>
                                <img src={creditcards.icon2} alt="" />
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default Cards
