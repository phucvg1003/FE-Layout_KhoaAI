"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'

import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import cover from '../public/assets/images/cover.jpg'

export default function Login() {
    useEffect(() => {
        AOS.init({
            duration: 650,
        })
    }, [])

    return(
        <div>
            <div className="w-full lg:grid lg:grid-cols-2 min-h-screen mx-auto container overflow-hidden">
                {/* Image Cover */}
                <div data-aos="zoom-out-right" className="hidden lg:block py-14">
                    <Image
                        src={cover}
                        alt="Image"
                        width="1920"
                        height="1080"
                        className="h-full w-full object-cover bg-no-repeat rounded-xl"
                    />
                </div>

                {/* Login */}
                <div className="flex items-center justify-center py-12 min-h-screen lg:min-h-0">
                    <div className="mx-auto grid w-[400px] gap-6">
                        <div data-aos="fade-up" className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Đăng nhập</h1>
                            <p className="text-balance text-muted-foreground">
                                Nhập tài khoản của bạn phía dưới <br /> để đăng nhập vào hệ thống
                            </p>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="250" className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="accountName">Tên tài khoản</Label>
                                <Input
                                    id="accountName"
                                    type="accountName"
                                    placeholder="Nhập tên tài khoản"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Mật khẩu</Label>
                                    <Link
                                        href="/"
                                        className="ml-auto inline-block text-sm underline"
                                    >
                                        Quên mật khẩu?
                                    </Link>
                                </div>
                                <Input id="password" type="password" placeholder="Nhập mật khẩu" required/>
                            </div>
                            <Button type="submit" className="w-full">
                                Đăng nhập
                            </Button>
                            <Button variant="outline" className="w-full">
                                {/*<Facebook className="mr-2 h-4 w-4" />*/}
                                Đăng nhập với Google

                            </Button>
                            <Button variant="outline" className="w-full">
                                Đăng nhập với Facebook
                            </Button>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="350" data-aos-anchor-placement="bottom-bottom" className="mt-2 md:mt-4 text-center text-xs md:text-sm">
                            Bạn quên tên tài khoản?{" "}
                            <Link href="#" className="underline">
                                Đăng ký ngay
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}