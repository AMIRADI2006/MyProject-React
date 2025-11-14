import React from "react";


export default function Footer() {
    return (
        <>
            <footer className="mt-[88px] border-t border-neutral-300 rounded-lg">
                <div className="container flex justify-between py-10 mt-0  xl:px-26">
                    <div className="w-[350px] space-y-2">
                        <img src="/images/Logo_joblin.svg" alt="" />
                        <p className="text-sm text-neutral-700">Joblin is a smart job search and recruitment platform that connects
                            job seekers with employers. With fast search, professional resume building, and intelligent
                            matching, Jablin makes hiring and job hunting easy and efficient.</p>
                    </div>
                    <div className="space-y-4">
                        <h6 className="text-lg font-medium mb-8">Our services</h6>
                        <a className="block text-sm text-neutral-700" href="#">Find job</a>
                        <a className="block text-sm text-neutral-700" href="#">Create resume</a>
                        <a className="block text-sm text-neutral-700" href="#">Search company</a>
                        <a className="block text-sm text-neutral-700" href="#">Pricing Plan</a>
                    </div>
                    <div className="space-y-4">
                        <h6 className="text-lg font-medium mb-8">Links</h6>
                        <a className="block text-sm text-neutral-700" href="#">Blog</a>
                        <a className="block text-sm text-neutral-700" href="#">Help center</a>
                        <a className="block text-sm text-neutral-700" href="#">Contact us</a>
                        <a className="block text-sm text-neutral-700" href="#">Privacy Policy</a>
                        <a className="block text-sm text-neutral-700" href="#">About us</a>
                    </div>
                    <div>
                        <h6 className="text-lg font-medium">Contact Us</h6>
                        <div className="flex gap-4 my-6">
                            <img className="p-1.5 bg-neutral-100 rounded-lg" src="/images/footer/insta.svg" alt="" />
                            <img className="p-1.5 bg-neutral-100 rounded-lg" src="/images/footer/facebook.svg" alt="" />
                            <img className="p-1.5 bg-neutral-100 rounded-lg" src="/images/footer/whatsapp.svg" alt="" />
                            <img className="p-1.5 bg-neutral-100 rounded-lg" src="/images/footer/linkedin.svg" alt="" />
                            <img className="p-1.5 bg-neutral-100 rounded-lg" src="/images/footer/X.svg" alt="" />
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-1 text-neutral-700 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <p>1500 Marilla St, Dallas, TX 75201</p>
                            </div>
                            <div className="flex items-center gap-1 text-neutral-700 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <p>1(647)558-5560</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 bg-neutral-200 xl:px-26 mt-0 flex justify-between items-center">
                    <div className="flex gap-1 text-xs">
                        <span className="hover:text-blue-700 transition-colors cursor-pointer ">AmirMohammad MohammadAbadi</span>
                        <img src="/images/footer/footer_bottom/C.svg" alt="" />
                        <span>2025</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="flex items-center justify-center w-11 h-7 bg-white rounded-sm">
                            <img src="/images/footer/footer_bottom/visa-logo.svg" alt="" />
                        </div>
                        <div className="flex items-center justify-center w-11 h-7 bg-white rounded-sm">
                            <img src="/images/footer/footer_bottom/Stripe.svg" alt="" />
                        </div>
                        <div className="flex items-center justify-center w-11 h-7 bg-white rounded-sm">
                            <img src="/images/footer/footer_bottom/PayPal.svg" alt="" />
                        </div>
                        <div className="flex items-center justify-center w-11 h-7 bg-white rounded-sm">
                            <img src="/images/footer/footer_bottom/GooglePay.svg" alt="" />
                        </div>
                        <div className="flex items-center justify-center w-11 h-7 bg-white rounded-sm">
                            <img src="/images/footer/footer_bottom/DinersClub.svg" alt="" />
                        </div>
                        <div className="flex items-center justify-center w-11 h-7 bg-white rounded-sm">
                            <img src="/images/footer/footer_bottom/ApplePay.svg" alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}