const CompanyMenuItems = () => {
  return (
    <div className="grid grid-cols-2 gap-4 relative p-6 rounded-2xl bg-linear-to-b from-[#141416] to-[#0b0b0d] h-78.5 border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group cursor-pointer overflow-hidden">
      <div className="rounded-2xl p-4 bg-linear-to-br from-[#0f1117] to-[#070707] border border-white/10">
        <h1>Who We Are</h1>
        <p>The Story behind the Chargeflow</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {/* 4 Big Cards */}
        {["Brand", "Careers", "Become a Partner", "Contact Us"].map((title, i) => (
          <div key={i} className="relative rounded-3xl p-4 bg-linear-to-br from-[#0f1117] to-[#070707] border border-white/10 overflow-hidden group hover:border-white/20 transition">
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}

export default CompanyMenuItems