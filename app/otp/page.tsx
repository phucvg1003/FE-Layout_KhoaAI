import {InputOTPPattern} from "@/components/InputOTP";
import Image from "next/image";
import cover from "@/public/assets/images/cover.jpg";
import {Button} from "@/components/ui/button";

export default function OTPPage() {
    return(
        <div>
            <div className="w-full lg:grid lg:grid-cols-2 min-h-screen mx-auto container overflow-hidden">
                {/* Image Cover */}
                <div className="hidden lg:block py-14">
                    <Image
                        src={cover}
                        alt="Image"
                        width="1920"
                        height="1080"
                        className="h-full w-full object-cover bg-no-repeat rounded-xl"
                    />
                </div>

                {/* Login */}
                <div className="flex flex-col items-center justify-center gap-8 py-12 min-h-screen lg:min-h-0">
                    <div className="mx-auto grid w-[400px] gap-10">
                        <div className="space-y-5">
                            <div className="grid justify-center mb-8">
                                <div className="rounded-full p-5 border">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         className="w-5 h-5">
                                        <path fillRule="evenodd"
                                              d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="text-center space-y-1">
                                <h1 className="text-3xl font-bold">Nhập mã xác thực</h1>
                                <p className="text-balance text-muted-foreground">Nhập 06 số mà chúng tôi đã gửi qua
                                    Email
                                    của
                                    bạn</p>
                            </div>
                            <div className="grid justify-center">
                                <InputOTPPattern></InputOTPPattern>
                            </div>
                        </div>


                        <Button type="submit" className="w-fit mx-auto">
                            Tiếp tục
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}