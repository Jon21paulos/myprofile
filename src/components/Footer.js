import React from 'react'

export default function Footer() {
    let getYear = () => {
        let currentYear = new Date().getFullYear();
        return currentYear;
    };
    return (
        <div>
            <footer class="footer bg-gray-800 relative pt-1 border-b-2 border-blue-700">
                <div class="container mx-auto px-6">
                    <div class="sm:flex sm:mt-8">
                        <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                            <div class="flex flex-col">
                                <span class="my-2"><a target="_blank" href="https://github.com/Jon21paulos" class="text-3xl hover:text-blue-500"><i class="fab fa-github"></i></a></span>
                            </div>
                            <div class="flex flex-col">
                                <span class="my-2"><a target="_blank" href="https://linkedin.com/in/yohannes-paulos-1a5451211" class="text-3xl hover:text-blue-500"><i class="fab fa-linkedin"></i></a></span>
                            </div>
                            <div class="flex flex-col">
                                <span class="my-2"><a target="_blank" href="https://t.me/Jon21paulos" class="text-3xl  hover:text-blue-500"><i class="fab fa-telegram-plane"></i></a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto px-6">
                    <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                        <div class="sm:w-2/3 text-center py-6">
                            <p class="text-sm text-blue-700 font-bold mb-2">
                                <span>@ {getYear()} by Yohannes paulos </span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
