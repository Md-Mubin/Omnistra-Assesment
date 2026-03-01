const ResourcesMenuItems = () => {
    return (
        <div className="grid grid-cols-5 gap-4 relative p-6 rounded-2xl bg-linear-to-b from-[#141416] to-[#0b0b0d] h-78.5 border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group cursor-pointer overflow-hidden">
            {/* 4 Big Cards */}
            {["Blog", "Reports", "Podcast", "Webinars"].map((title, i) => (
                <div key={i} className="relative rounded-3xl p-4 bg-linear-to-br from-[#0f1117] to-[#070707] border border-white/10 overflow-hidden group hover:border-white/20 transition">
                    <div className="relative z-10">
                        <h3 className="text-lg font-semibold text-white">{title}</h3>
                    </div>
                </div>
            ))}
            {/* Right Side Column */}
            <div className="flex flex-col gap-2 justify-between">
                <div className="rounded-2xl p-4 bg-linear-to-br from-[#0f1117] to-[#070707] border border-white/10">
                    <h3 className="text-[16px] font-semibold text-white mb-1">
                        ROI Calculator
                    </h3>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                            <span className="text-white/60 text-sm">1,020</span>
                            <span className="text-white/40 text-xs">HOURS</span>
                        </div>

                        <div className="flex items-center justify-between px-4 py-1 rounded-lg bg-white/5 border border-white/10">
                            <span className="text-white/60 text-sm">$7,500</span>
                            <span className="text-white/40 text-xs">USD</span>
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl p-4 bg-linear-to-br from-[#0f1117] to-[#070707] border border-white/10">
                    <h3 className="text-[16px] font-semibold text-white mb-1">
                        Reason Codes
                    </h3>

                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                        <input
                            placeholder="Enter Code: 12.7"
                            className="bg-transparent outline-none text-sm text-white/60 w-full"
                        />
                        <div className="w-4 h-4 border border-white/40 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourcesMenuItems