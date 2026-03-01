"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { RES_NAV_ITEMS } from "@/api/fakeApi";

const ResNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
        setExpandedItem(null);
    };

    const toggleItem = (key: string) => {
        setExpandedItem((prev) => (prev === key ? null : key));
    };

    return (
        <>
            <div className={`md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm pointer-events-none transition-opacity duration-400 ${isOpen ? "opacity-100" : "opacity-0"}`} />
            <div className={`md:hidden fixed top-3 inset-x-3 z-50 rounded-xl text-white shadow-2xl border border-white/10 bg-black/50 backdrop-blur-xl transition-all duration-500 ease-in-out overflow-hidden`}>
                <div className="flex justify-between items-center px-5 py-2">
                    {/* Logo */}
                    <div className="text-white">
                        <svg width="26" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M20.4591 23.996L16.4118 18.3721C16.4118 18.3721 24.1707 12.0345 26.791 6.16874C26.7723 6.14897 17.7054 10.7632 17.7054 10.7632L14.0061 5.62295C20.772 0.983474 24.7214 1.69848 25.7767 3.16527L30.1387 9.22647C31.7551 11.4726 26.029 19.6752 20.4587 23.996H20.4591ZM9.95881 -0.000976563L14.0061 5.62295C14.0061 5.62295 6.24723 11.9605 3.62693 17.8263C3.64561 17.846 12.7126 13.2319 12.7126 13.2319L16.4118 18.3721C9.64591 23.0115 5.69657 22.2965 4.64125 20.8297L0.278806 14.7685C-1.33764 12.5224 4.38893 4.31985 9.95881 -0.000976563Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    {/* Toggle Button */}
                    <button
                        onClick={toggleMenu}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        className="w-6 h-6 text-white "
                    >
                        <span className="relative w-5 h-4 flex flex-col justify-between">
                            {/* Top bar */}
                            <span className={`block h-[1.5px] bg-current rounded-full origin-center transition-all duration-300 ${isOpen ? "-rotate-45 translate-y-2.5" : ""}`} />
                            {/* Middle bar */}
                            <span className={`block h-[1.5px] bg-current rounded-full transition-all duration-200 ${isOpen ? "opacity-0 scale-x-0" : ""}`} />
                            {/* Bottom bar */}
                            <span className={`block h-[1.5px] bg-current rounded-full origin-center transition-all duration-300 ${isOpen ? "rotate-45 -translate-y-1.25" : ""}`} />
                        </span>
                    </button>
                </div>
                {/* Expandable */}
                <div className={`transition-all duration-500 ease-in-out ${isOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0"}`}>
                    {/* CTA buttons */}
                    <div className="flex items-center gap-2 px-4 pt-4 pb-8">
                        <Link
                            href="/login"
                            onClick={toggleMenu}
                            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-4 rounded-full text-[10px] font-semibold tracking-widest hover:bg-white/10 transition-colors duration-200"
                        >
                            SIGN IN <ArrowUpRight size={13} />
                        </Link>
                        <Link
                            href="/#"
                            onClick={toggleMenu}
                            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-4 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors duration-200 text-[10px] font-semibold tracking-widest"
                        >
                            SCHEDULE A DEMO <ArrowUpRight size={13} />
                        </Link>
                    </div>
                    {/* Nav rows */}
                    <div className="overflow-y-auto max-h-[calc(85vh-80px)] pb-6">
                        {RES_NAV_ITEMS?.map((item, index) => {
                            const hasContent = !!(item.content && item.content.length > 0);
                            const isExpanded = expandedItem === item.key;
                            return (
                                <div key={item.key}>
                                    <DividerRow />

                                    <button
                                        onClick={() => hasContent
                                            ? toggleItem(item.key)
                                            : toggleMenu()}
                                        className="w-full flex items-center justify-between px-5 py-6 text-[12px] font-semibold text-white/80"
                                    >
                                        {item.label.toUpperCase()}
                                        {hasContent && (
                                            <ChevronDown
                                                size={15}
                                                className={`text-white/40 transition-transform duration-300 ${isExpanded ? "rotate-180 text-white/70" : ""}`}
                                            />
                                        )}
                                    </button>
                                    {/* Sub-item grid */}
                                    {hasContent && (
                                        <div className={`overflow-hidden transition-all duration-400 ease-in-out px-1 ${isExpanded ? "max-h-125 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"}`}
                                            style={{ willChange: 'max-height, opacity, transform' }}
                                        >
                                            <div className="px-4 pb-4 grid grid-cols-1 gap-2">
                                                {item.content!.map((sub) => (
                                                    item.key === "products" ? (
                                                        <Link
                                                            key={sub.id}
                                                            href="#"
                                                            onClick={toggleMenu}
                                                            className="flex flex-col gap-1 p-5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors duration-150"
                                                        >
                                                            <div className="flex flex-wrap items-center gap-1.5">
                                                                <span className="text-[16px] font-semibold text-white leading-tight">
                                                                    {sub.title}
                                                                </span>
                                                                {'badge' in sub && sub.badge && (
                                                                    <span className={`text-[10px] px-3 py-1 rounded-full  ${sub.badge === "NEW" ? "bg-white text-black" : "bg-white/10 text-white"}`}>
                                                                        {sub.badge}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            {'description' in sub && sub.description && (
                                                                <span className="w-52.5 mt-3 text-[14px] text-white/75 leading-snug">
                                                                    {sub.description}
                                                                </span>
                                                            )}
                                                        </Link>
                                                    ) : (
                                                        <Link
                                                            key={sub.id}
                                                            href="#"
                                                            onClick={toggleMenu}
                                                            className="text-white text-[16px] leading-1.3 font-medium px-1"
                                                        >
                                                            {sub.title}
                                                        </Link>
                                                    )
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};
/* Divider */
const DividerRow = () => (
    <svg className="px-3.5" width="100%" height="100%" viewBox="0 0 301 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM300.887 3L298 0.113249L295.113 3L298 5.88675L300.887 3ZM3 3.5H3.99662V2.5H3V3.5ZM5.98986 3.5H7.98311V2.5H5.98986V3.5ZM9.97635 3.5H11.9696V2.5H9.97635V3.5ZM13.9628 3.5H15.9561V2.5H13.9628V3.5ZM17.9493 3.5H19.9426V2.5H17.9493V3.5ZM21.9358 3.5H23.9291V2.5H21.9358V3.5ZM25.9223 3.5H27.9155V2.5H25.9223V3.5ZM29.9088 3.5H31.902V2.5H29.9088V3.5ZM33.8953 3.5H35.8885V2.5H33.8953V3.5ZM37.8818 3.5H39.875V2.5H37.8818V3.5ZM41.8682 3.5H43.8615V2.5H41.8682V3.5ZM45.8547 3.5H47.848V2.5H45.8547V3.5ZM49.8412 3.5H51.8345V2.5H49.8412V3.5ZM53.8277 3.5H55.821V2.5H53.8277V3.5ZM57.8142 3.5H59.8074V2.5H57.8142V3.5ZM61.8007 3.5H63.7939V2.5H61.8007V3.5ZM65.7872 3.5H67.7804V2.5H65.7872V3.5ZM69.7737 3.5H71.7669V2.5H69.7737V3.5ZM73.7601 3.5H75.7534V2.5H73.7601V3.5ZM77.7466 3.5H79.7399V2.5H77.7466V3.5ZM81.7331 3.5H83.7263V2.5H81.7331V3.5ZM85.7196 3.5H87.7128V2.5H85.7196V3.5ZM89.7061 3.5H91.6993V2.5H89.7061V3.5ZM93.6926 3.5H95.6858V2.5H93.6926V3.5ZM97.679 3.5H99.6723V2.5H97.679V3.5ZM101.666 3.5H103.659V2.5H101.666V3.5ZM105.652 3.5H107.645V2.5H105.652V3.5ZM109.638 3.5H111.632V2.5H109.638V3.5ZM113.625 3.5H115.618V2.5H113.625V3.5ZM117.611 3.5H119.605V2.5H117.611V3.5ZM121.598 3.5H123.591V2.5H121.598V3.5ZM125.584 3.5H127.578V2.5H125.584V3.5ZM129.571 3.5H131.564V2.5H129.571V3.5ZM133.557 3.5H135.551V2.5H133.557V3.5ZM137.544 3.5H139.537V2.5H137.544V3.5ZM141.53 3.5H143.524V2.5H141.53V3.5ZM145.517 3.5H147.51V2.5H145.517V3.5ZM149.503 3.5H151.497V2.5H149.503V3.5ZM153.49 3.5H155.483V2.5H153.49V3.5ZM157.476 3.5H159.469V2.5H157.476V3.5ZM161.463 3.5H163.456V2.5H161.463V3.5ZM165.449 3.5H167.442V2.5H165.449V3.5ZM169.436 3.5H171.429V2.5H169.436V3.5ZM173.422 3.5H175.415V2.5H173.422V3.5ZM177.409 3.5H179.402V2.5H177.409V3.5ZM181.395 3.5H183.388V2.5H181.395V3.5ZM185.382 3.5H187.375V2.5H185.382V3.5ZM189.368 3.5H191.361V2.5H189.368V3.5ZM193.355 3.5H195.348V2.5H193.355V3.5ZM197.341 3.5H199.334V2.5H197.341V3.5ZM201.328 3.5H203.321V2.5H201.328V3.5ZM205.314 3.5H207.307V2.5H205.314V3.5ZM209.3 3.5H211.294V2.5H209.3V3.5ZM213.287 3.5H215.28V2.5H213.287V3.5ZM217.273 3.5H219.267V2.5H217.273V3.5ZM221.26 3.5H223.253V2.5H221.26V3.5ZM225.246 3.5H227.24V2.5H225.246V3.5ZM229.233 3.5H231.226V2.5H229.233V3.5ZM233.219 3.5H235.213V2.5H233.219V3.5ZM237.206 3.5H239.199V2.5H237.206V3.5ZM241.192 3.5H243.186V2.5H241.192V3.5ZM245.179 3.5H247.172V2.5H245.179V3.5ZM249.165 3.5H251.159V2.5H249.165V3.5ZM253.152 3.5H255.145V2.5H253.152V3.5ZM257.138 3.5H259.132V2.5H257.138V3.5ZM261.125 3.5H263.118V2.5H261.125V3.5ZM265.111 3.5H267.105V2.5H265.111V3.5ZM269.098 3.5H271.091V2.5H269.098V3.5ZM273.084 3.5H275.078V2.5H273.084V3.5ZM277.071 3.5H279.064V2.5H277.071V3.5ZM281.057 3.5H283.051V2.5H281.057V3.5ZM285.044 3.5H287.037V2.5H285.044V3.5ZM289.03 3.5H291.024V2.5H289.03V3.5ZM293.017 3.5H295.01V2.5H293.017V3.5ZM297.003 3.5H298V2.5H297.003V3.5Z" fill="#364153"></path>
    </svg>
)
export default ResNavbar;