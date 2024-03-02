import Logo from '@/assets/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            kjhihij hjhjkshijh   hjhsihi hiosihd sd hioshdioisd  hisdih sdkhi ksdfohifbfksi  sijisdj ksdi kfifsd kfdjjkjfsdkfdskjfij  f kfnioosjdi
          </p>
          <p>@ Evogym All Rights Reserved.</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className="font-bold">Links</h4>
          <p className="my-5">kjkljzd jkdjzkjv jkljkdfsgjk</p>
          <p className="my-5">kjkljzd jkdjzkjv jkljkdfsgjk</p>
          <p>mcknkxncjkn nkdkfjd</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">kjkljzd jkdjzkjv jkljkdfsgjk</p>
          <p>(+123)456-7890</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer