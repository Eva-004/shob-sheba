
"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Button,
    Card,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import {
    FaLock,
    FaPhoneAlt,
    FaSignInAlt,
} from "react-icons/fa";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);


    return (
        <main className="flex min-h-[80vh] items-center justify-center px-4 py-12">
            <Card className="w-full max-w-md border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                <Card.Content className="flex flex-col gap-6">
                    <div className="text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5F0] text-2xl text-[#006A4E]">
                            <FaSignInAlt />
                        </div>

                        <h1 className="mt-5 text-2xl font-bold text-[#243A34]">
                            স্বাগতম!
                        </h1>

                        <p className="mt-2 text-sm text-gray-500">
                            সব সেবা অ্যাকাউন্টে লগইন করুন
                        </p>
                    </div>

                    <Form
                        className="flex flex-col gap-5" >
                        <TextField
                            name="phone"
                            type="tel"
                            isRequired
                            validate={(value) => {
                                if (!/^01[3-9]\d{8}$/.test(value)) {
                                    return "সঠিক ১১ সংখ্যার মোবাইল নম্বর দিন";
                                }

                                return null;
                            }}
                        >
                            <Label>মোবাইল নম্বর</Label>

                            <div className="relative">
                                <FaPhoneAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                <Input
                                    placeholder="01XXXXXXXXX"
                                    className="pl-10 w-full"
                                />
                            </div>

                            <FieldError />
                        </TextField>

                        <TextField
                            name="password"
                            type={showPassword ? "text" : "password"}
                            isRequired
                            minLength={6}
                            validate={(value) => {
                                if (value.length < 6) {
                                    return "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে";
                                }

                                return null;
                            }}
                        >
                            <div className="flex items-center justify-between">
                                <Label>পাসওয়ার্ড</Label>

                                <Link
                                    href="/forgot-password"
                                    className="text-sm font-medium text-[#006A4E] hover:underline"
                                >
                                    পাসওয়ার্ড ভুলে গেছেন?
                                </Link>
                            </div>

                            <div className="relative">
                                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

                                <Input
                                    placeholder="আপনার পাসওয়ার্ড দিন"
                                    className="pl-10 pr-16 w-full"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-[#006A4E]"
                                >
                                    {showPassword ? "লুকান" : "দেখুন"}
                                </button>
                            </div>

                            <FieldError />
                        </TextField>

                        <Button
                            type="submit"
                            className="mt-2 w-full bg-[#006A4E] font-semibold text-white hover:bg-[#00543E]" >
                            লগইন করুন
                        </Button>
                    </Form>

                    <div className="text-center text-sm text-gray-600">
                        অ্যাকাউন্ট নেই?{" "}
                        <Link
                            href="/register"
                            className="font-semibold text-[#006A4E] hover:underline"
                        >
                            নতুন অ্যাকাউন্ট তৈরি করুন
                        </Link>
                    </div>
                </Card.Content>
            </Card>
        </main>
    );
};

export default LoginPage;
