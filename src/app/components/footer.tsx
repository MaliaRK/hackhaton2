import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-[#FAFAFA] pt-10'>
            <div className='flex justify-around'>
                <div>
                    <h3><strong>Exclusive</strong></h3>
                    <p>SUbscribe</p>
                    <p className='text-xs'>Get 10% of your first order</p>
                    <input type='email' placeholder='Enter your email' className='bg-transparent border-[#FAFAFA] border-[1px] px-3 py-1 text-xs rounded'/>
                </div>
                <div>
                    <h3><strong>Support</strong></h3>
                    <p className='text-xs'>111 Bijoy sarani Dhaka, DH 1515 Bangladesh.</p>
                    <p className='text-xs'>exclusive@gmail.com</p>
                    <p className='text-xs'>+88015-88888-9999</p>
                </div>                      
                <div>
                    <h3><strong>Account</strong></h3>
                    <ul className='text-xs'>
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div> 
                <div>
                    <h3><strong>Quick Link</strong></h3>
                    <ul className='text-xs'>
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>  
                <div>
                    <h3><strong>Download App</strong></h3>
                    <p className='text-xs'>Save $3 with App Now User Only</p>
                    <div className='flex gap-2'>
                        <p>QR Code</p>
                        <div>
                            <div>Google Play</div>
                            <div>App Store</div>
                        </div>
                    </div>
                </div>           
            </div>
            <p className='text-center text-xs mt-10 mb-4'><strong>C</strong> Copyright Rimel 2022 All right reserved</p>
        </div>
    )
}

export default Footer