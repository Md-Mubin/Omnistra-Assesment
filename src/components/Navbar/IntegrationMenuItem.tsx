const IntegrationMenuItem = () => {
    return (
        <div className="relative p-3 rounded-2xl bg-linear-to-b from-[#141416] to-[#0b0b0d] h-78.5 border border-white/5  transition-all duration-300 cursor-pointer overflow-hidden">
            <div className="max-w-7xl h-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* LEFT BIG CARD */}
                <div className="relative rounded-3xl bg-linear-to-br from-[#0d0f14] to-[#050505] border border-white/10 p-10 overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-[16px] leading-1.6 font-semibold text-white">
                            All Integrations
                        </h3>
                        <p className="text-sm leading-1.3 text-white/60 mt-3 max-w-md">
                            Choose from hundreds of integrated platforms.
                        </p>
                    </div>
                </div>
                {/* RIGHT SIDE CARDS */}
                <div className="flex flex-col gap-2 justify-between">
                    {["Stripe", "Shopify", "WooCommerce"].map((item, i) => (
                        <div
                            key={i}
                            className="relative rounded-2xl p-4 bg-linear-to-br from-[#0f1117] to-[#080808] border border-white/10 overflow-hidden group hover:border-white/20 transition"
                        >
                            {/* hover glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-r from-blue-500/10 to-transparent" />
                            <div className="relative z-10">
                                <h4 className="text-[16px] leading-1.6 font-semibold text-white">
                                    {item}
                                </h4>
                                <p className="text-sm leading-1.3 text-white/60 mt-2">
                                    Premium native integration with {item}.
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default IntegrationMenuItem