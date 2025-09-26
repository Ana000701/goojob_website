import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className='fixed bottom-0 left-1/2 -translate-x-1/2 max-w-full md:w-[90%] container px-4'>
      <Link
        href='#'
        className='flex items-center justify-center md:justify-end gap-2 pb-5 border-b mb-5'
      >
        <p className='text-brand text-xl'>Back to top</p>
        <Image
          src='arrow_upward.svg'
          alt='arrow_upward_icon'
          width={24}
          height={24}
        />
      </Link>
      {/* Social List & Slogan */}
      <div className='flex flex-col md:flex-row-reverse md:justify-between gap-6'>
        <p className='text-primary title-base font-bold tracking-wider'>
          GOOD JOB <br className='md:hidden' /> STARTS WITH GOOJOB!
        </p>
        <ul className='flex items-center gap-5'>
          <li>
            <Link href='mailto:service@goojob.com.tw'>
              <Image src='email.svg' alt='email-icon' width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href='#'>
              <Image src='line.svg' alt='line-icon' width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href='#'>
              <Image
                src='facebook.svg'
                alt='facebook-icon'
                width={24}
                height={24}
              />
            </Link>
          </li>
          <li>
            <Link href='#'>
              <Image
                src='youtube.svg'
                alt='youtube-icon'
                width={24}
                height={24}
              />
            </Link>
          </li>
        </ul>
      </div>
      {/* Company Info & Navbar */}
      <div className='flex justify-between pt-14 pb-5  md:pt-24 lg:pt-48 lg:pb-36 border-b mb-5'>
        <div>
          <p className='text-primary title-base font-bold tracking-wider mb-4'>
            GooJob 智慧管理
          </p>
          <div className='text-brand'>
            <p className='p-base font-bold tracking-widest mb-2'>
              鼎盛佳科技股份有限公司
            </p>
            <ul className='flex flex-col gap-1'>
              <li>
                <span className='p-sm font-bold tracking-[0.1em] mr-2'>
                  TEL
                </span>
                <Link
                  href='tel:+886075588057'
                  className='p-sm font-medium tracking-wider'
                >
                  (07)5588 - 057
                </Link>
              </li>
              <li>
                <span className='p-sm font-bold tracking-[0.1em] mr-2'>
                  E-MAIL
                </span>
                <Link
                  href='mailto:service@goojob.com.tw'
                  className='p-sm font-medium tracking-wider'
                >
                  service@goojob.com.tw
                </Link>
              </li>
              <li>
                <span className='p-sm font-bold tracking-[0.1em] mr-2'>
                  TAX ID
                </span>
                <span className='p-sm font-medium tracking-wider'>
                  90577449
                </span>
              </li>
              <li>
                <span className='p-sm font-bold tracking-[0.1em] mr-2'>
                  ADDRESS
                </span>
                <span className='p-sm font-medium tracking-wider'>
                  806高雄市前鎮區民權二路6號14樓之2
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Navbar */}
        <div className='hidden md:flex md:gap-5 lg:gap-10 xl:gap-20 2xl:gap-28'>
          <ul className='text-sm lg:p-base 2xl:p-sm tracking-wider flex flex-col gap-3.5'>
            <li>
              <p className='font-bold'>產品中心</p>
            </li>
            <li>
              <Link href='#'>SaaS 服務</Link>
            </li>
            <li>
              <Link href='#'>地端服務</Link>
            </li>
            <li>
              <p className='font-bold'>體驗試用</p>
            </li>
            <li>
              <Link href='#'>30 天免費體驗</Link>
            </li>
          </ul>
          <ul className='text-sm lg:p-base 2xl:p-sm tracking-wider flex flex-col gap-3.5'>
            <li>
              <p className='font-bold'>產品學習</p>
            </li>
            <li>
              <Link href='#'>新手入門</Link>
            </li>
            <li>
              <Link href='#'>操作手冊</Link>
            </li>
            <li>
              <Link href='#'>註冊流程</Link>
            </li>
            <li>
              <Link href='#'>FAQ</Link>
            </li>
          </ul>
          <ul className='text-sm lg:p-base 2xl:p-sm tracking-wider flex flex-col gap-3.5'>
            <li>
              <p className='font-bold'>媒體資源</p>
            </li>
            <li>
              <Link href='#'>最新消息</Link>
            </li>
            <li>
              <Link href='#'>Facebook</Link>
            </li>
            <li>
              <Link href='#'>LINE@</Link>
            </li>
          </ul>
          <ul className='text-sm lg:p-base 2xl:p-sm tracking-wider flex flex-col gap-3.5'>
            <li>
              <p className='font-bold'>關於我們</p>
            </li>
            <li>
              <Link href='#'>鼎盛佳科技</Link>
            </li>
            <li>
              <Link href='#'>資安認證</Link>
            </li>
            <li>
              <Link href='#'>聯繫方式</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* copyright */}
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2.5'>
        <div>
          <p className='p-xs tracking-wider'>
            Copyright © {new Date().getFullYear()} 鼎盛佳科技股份有限公司
            著作權所有
          </p>
        </div>
        <div className='flex gap-2'>
          <Link href='#' className='block p-xs tracking-wider mr-5'>
            使用者條款
          </Link>
          <Link href='#' className='block p-xs tracking-wider'>
            隱私權政策
          </Link>
        </div>
      </div>
    </div>
  );
}
