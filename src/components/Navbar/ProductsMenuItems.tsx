import { Nav_product } from "@/api/fakeApi";

function ProductsMenuItems() {
    return (
        <div className="grid grid-cols-5 gap-4">
            {
                Nav_product.content.map((item) => (
                    <div key={item.id} className=" relative p-6 rounded-2xl bg-linear-to-b from-[#141416] to-[#0b0b0d] h-78.5 border border-white/5 hover:border-white/20  transition-all duration-300 hover:scale-[1.02] group cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition duration-500" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-3">
                                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                                {item.badge && (
                                    <span className={`text-[10px] px-3 py-1 rounded-full  ${item.badge === "NEW" ? "bg-white text-black" : "bg-white/10 text-white"}`}>
                                        {item.badge}
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-white/60 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default ProductsMenuItems