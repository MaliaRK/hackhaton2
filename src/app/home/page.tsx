import React from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext,} from '@/components/ui/Carousel'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/Card'

const Home = () => {
  return (
    <div className='max-w-[1170px] mx-auto'>
      <hr />
      <div className='grid grid-cols-[20%_auto] max-w-[1170px] mx-auto my-4'>
        <ul>
          <li className='after:content-[">"]'>Women&apos;s Fashion&nbsp;</li>
          <li className='mb-1'>Men&apos;s Fashion </li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby&apos;s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
        <div className='bg-black text-[#FAFAFA] py-4'>
          <div className='grid grid-cols-[40%_auto] my-auto'>
            <div className='my-auto'>
              <p className='text-xs text-center'>iPhone 14 Series</p>
              <h2 className='text-3xl ml-28 my-5'>Up to 10% <br /> off Voucher</h2>
              <span className='flex gap-2 items-center text-xs ml-28'>
                <u>Shop Now</u> 
                <Image src='/right-arrow.png' alt='right-arrow' width={15} height={10}></Image>
              </span>
            </div>
            <Image src='/hero.png' alt='hero' width={496} height={352}></Image>
          </div>
          <Image src='/loading.png' alt='loading' width={80} height={10} className='mx-auto'></Image>
        </div>
      </div>
      <section>
        <div>
          <span>image Today&apos;s</span>
          <div className='flex gap-8'>
            <div>Flash Sales</div>
            <div>
              <div className='flex gap-5'>
                <p>Days</p><p>Hours</p><p>Minutes</p><p>Seconds</p>
              </div>
              <div className='flex gap-6'>
                <p>03</p><span>:</span><p>23</p><span>:</span><p>19</p><span>:</span><p>56</p>
              </div>
            </div>       
          </div>
        </div>
        <Carousel className='my-4'>
          <CarouselContent>
            <CarouselItem className='flex gap-5 item-center'>
              <div>
                <Card>
                  <div>
                    <span>-40%</span>
                    <Image src='/wishlist.png' alt='wishlist' width={32} height={10}></Image>
                  </div>
                  <Image src='/Frame 611.png' alt='frame' width={250} height={20}></Image>
                </Card>
                <div className='text-black'>
                  <h3>HAVIT HV G92 Gamepad</h3>
                  <span>$120 <del>$160</del></span><br/>
                  <span>✨✨✨✨✨ (88)</span>
                </div>
              </div>
              <div>
                <Card>
                  <div>
                    <span>-40%</span>
                    <Image src='/wishlist.png' alt='wishlist' width={32} height={10}></Image>
                  </div>
                  <Image src='/Frame 611.png' alt='frame' width={250} height={20}></Image>
                </Card>
                <div className='text-black'>
                  <h3>HAVIT HV G92 Gamepad</h3>
                  <span>$120 <del>$160</del></span><br/>
                  <span>✨✨✨✨✨ (88)</span>
                </div>
              </div>
              <div>
                <Card>
                  <div>
                    <span>-40%</span>
                    <Image src='/wishlist.png' alt='wishlist' width={32} height={10}></Image>
                  </div>
                  <Image src='/Frame 611.png' alt='frame' width={250} height={20}></Image>
                </Card>
                <div className='text-black'>
                  <h3>HAVIT HV G92 Gamepad</h3>
                  <span>$120 <del>$160</del></span><br/>
                  <span>✨✨✨✨✨ (88)</span>
                </div>
              </div>
              <div>
                <Card>
                  <div>
                    <span>-40%</span>
                    <Image src='/wishlist.png' alt='wishlist' width={32} height={10}></Image>
                  </div>
                  <Image src='/Frame 611.png' alt='frame' width={250} height={20}></Image>
                </Card>
                <div className='text-black'>
                  <h3>HAVIT HV G92 Gamepad</h3>
                  <span>$120 <del>$160</del></span><br/>
                  <span>✨✨✨✨✨ (88)</span>
                </div>
              </div>
              <div>
                <Card>
                  <div>
                    <span>-40%</span>
                    <Image src='/wishlist.png' alt='wishlist' width={32} height={10}></Image>
                  </div>
                  <Image src='/Frame 611.png' alt='frame' width={250} height={20}></Image>
                </Card>
                <div className='text-black'>
                  <h3>HAVIT HV G92 Gamepad</h3>
                  <span>$120 <del>$160</del></span><br/>
                  <span>✨✨✨✨✨ (88)</span>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='flex gap-5 text-center item-center'>
              <div className='bg-red-500 w-32 h-28'>malia</div>
              <div className='bg-red-500 w-32 h-28'>malia</div>
              <div className='bg-red-500 w-32 h-28'>malia</div>
              <div className='bg-red-500 w-32 h-28'>malia</div>
              <div className='bg-red-500 w-32 h-28'>malia</div>
            </CarouselItem>
            <CarouselItem className='flex gap-5 text-center item-center'>
              <div className='bg-red-500 w-32 h-28'>malia</div>
              <div className='bg-red-500 w-32 h-28'>malia</div>
              <div className='bg-red-500 w-32 h-28'>malia</div>
              <div className='bg-red-500 w-32 h-28'>malia</div>
              <div className='bg-red-500 w-32 h-28'>malia</div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className='absolute left-[99%] top-1 '/>
          <CarouselNext className='absolute top-1 '/>
        </Carousel>
      </section>
    </div>
  )
}

export default Home



{/* <Card className='lex gap-5'> 
              <CardHeader>
                <CardTitle className='flex justify-around'>
                  <span>-40%</span>
                  <Image src='/wishlist.png' alt='wishlist' width={32} height={10}></Image>
                </CardTitle>
              </CardHeader>
              <CardContent className='bg-[#FAFAFA] w-[270px] h-[270px]'>
                <Image src='/Frame 611.png' alt='frame' width={250} height={20}></Image>
              </CardContent>
              <CardContent className='bg-yellow-600'>
                malia
              </CardContent>
              <CardContent className='bg-yellow-600'>
                malia
              </CardContent>
            </Card> */}
